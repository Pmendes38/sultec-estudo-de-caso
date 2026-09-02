import { NextRequest, NextResponse } from 'next/server'
import { validateEbookLead } from '@/lib/leads/ebook-homologacao'
import { getLeadMailConfig, sendLeadEmailViaResend } from '@/lib/leads/ebook-email'

export const runtime = 'nodejs'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8
const SUBMISSION_TTL_MS = 10 * 60_000

type RateEntry = { count: number; resetAt: number }

/**
 * Rate limit e idempotência em memória do processo.
 * Em serverless (Vercel) isso NÃO é compartilhado entre instâncias nem persistente
 * após cold start. Proteção básica por IP/instância, não distribuída.
 */
const rateMap = new Map<string, RateEntry>()
const seenSubmissions = new Map<string, number>()

function clientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() || 'unknown'
  return req.headers.get('x-real-ip') || 'unknown'
}

function pruneMaps(now: number) {
  for (const [key, entry] of rateMap) {
    if (entry.resetAt <= now) rateMap.delete(key)
  }
  for (const [key, ts] of seenSubmissions) {
    if (now - ts > SUBMISSION_TTL_MS) seenSubmissions.delete(key)
  }
}

function checkRateLimit(ip: string, now: number): boolean {
  const entry = rateMap.get(ip)
  if (!entry || entry.resetAt <= now) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count += 1
  return true
}

/** Meta Conversions API opcional. Falha não bloqueia o lead por e-mail. */
async function sendMetaCapi(
  lead: {
    email: string
    eventId: string
    paginaOrigem?: string
    fbclid?: string
  },
  req: NextRequest,
): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID
  const token = process.env.META_CAPI_ACCESS_TOKEN
  if (!pixelId || !token) return

  const { createHash } = await import('crypto')
  const hashedEmail = createHash('sha256')
    .update(lead.email.trim().toLowerCase())
    .digest('hex')

  const userAgent = req.headers.get('user-agent') || undefined
  const ip = clientIp(req)

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.eventId,
        event_source_url: lead.paginaOrigem || undefined,
        action_source: 'website',
        user_data: {
          em: [hashedEmail],
          client_ip_address: ip !== 'unknown' ? ip : undefined,
          client_user_agent: userAgent,
          fbc: lead.fbclid ? `fb.1.${Date.now()}.${lead.fbclid}` : undefined,
        },
        custom_data: {
          content_name: 'Checklist de Homologação de Fornecedores',
          content_category: 'E-book técnico',
        },
      },
    ],
  }

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
  )

  if (!res.ok) {
    console.error('[ebook-homologacao] meta_capi_failed', {
      status: res.status,
      eventId: lead.eventId,
    })
  }
}

const FAIL_MESSAGE =
  'Não foi possível liberar o material neste momento. Verifique os dados e tente novamente.'

export async function POST(req: NextRequest) {
  const now = Date.now()
  pruneMaps(now)

  const ip = clientIp(req)
  if (!checkRateLimit(ip, now)) {
    return NextResponse.json(
      { ok: false, emailAccepted: false, message: 'Muitas tentativas. Aguarde um momento e tente novamente.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, emailAccepted: false, message: 'Requisição inválida.' },
      { status: 400 },
    )
  }

  const validated = validateEbookLead(body)
  if (!validated.ok) {
    return NextResponse.json(
      {
        ok: false,
        emailAccepted: false,
        message: validated.message,
        errors: validated.errors,
      },
      { status: 400 },
    )
  }

  const lead = validated.data

  // Honeypot: resposta silenciosa SEM emailAccepted. Frontend não libera material
  if (lead.website) {
    return NextResponse.json({ ok: true, emailAccepted: false, duplicate: false })
  }

  // Idempotência: mesmo submissionId não reenvia e-mail
  if (seenSubmissions.has(lead.submissionId)) {
    return NextResponse.json({
      ok: true,
      emailAccepted: true,
      duplicate: true,
      eventId: lead.eventId,
    })
  }

  if (!getLeadMailConfig()) {
    console.error('[ebook-homologacao] email_not_configured')
    return NextResponse.json(
      {
        ok: false,
        emailAccepted: false,
        message: FAIL_MESSAGE,
        code: 'email_not_configured',
      },
      { status: 503 },
    )
  }

  try {
    await sendLeadEmailViaResend(lead)

    seenSubmissions.set(lead.submissionId, now)

    await sendMetaCapi(lead, req).catch(() => {
      console.error('[ebook-homologacao] capi_error', { eventId: lead.eventId })
    })

    return NextResponse.json({
      ok: true,
      emailAccepted: true,
      duplicate: false,
      eventId: lead.eventId,
    })
  } catch (err) {
    const code = err instanceof Error ? err.message : 'delivery_error'
    console.error('[ebook-homologacao] delivery_error', {
      code,
      submissionId: lead.submissionId,
    })
    return NextResponse.json(
      {
        ok: false,
        emailAccepted: false,
        message: FAIL_MESSAGE,
      },
      { status: 502 },
    )
  }
}
