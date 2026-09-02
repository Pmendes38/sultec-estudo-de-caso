import { createHmac, timingSafeEqual } from 'crypto'
import { readFile, stat } from 'fs/promises'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import {
  CAMPAIGNS,
  CHECKLIST_UPLOAD_MAX_BYTES,
  buildChecklistLeadEmailHtml,
  buildChecklistLeadEmailText,
  getCampaign,
  sanitizeHeaderValue,
  validateChecklistLead,
} from '@/lib/leads/checklist-campaigns'

export const runtime = 'nodejs'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8
const SUBMISSION_TTL_MS = 10 * 60_000
const rateMap = new Map<string, { count: number; resetAt: number }>()
const seenSubmissions = new Map<string, number>()

function clientIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown'
}

function allowRequest(ip: string, now: number): boolean {
  for (const [key, ts] of seenSubmissions) if (now - ts > SUBMISSION_TTL_MS) seenSubmissions.delete(key)
  const current = rateMap.get(ip)
  if (!current || current.resetAt <= now) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (current.count >= RATE_LIMIT_MAX) return false
  current.count += 1
  return true
}

function accessSecret(): string {
  return process.env.CHECKLIST_ACCESS_SECRET?.trim() || process.env.RESEND_API_KEY?.trim() || ''
}

export function buildAccessToken(campaign: string, expiresAt: number): string {
  const payload = `${campaign}.${expiresAt}`
  const digest = createHmac('sha256', accessSecret()).update(payload).digest('hex')
  return `${expiresAt}.${digest}`
}

export function isValidAccessToken(campaign: string, token: string | undefined, now = Date.now()): boolean {
  if (!token || !accessSecret()) return false
  const [expires, signature] = token.split('.')
  const expiresAt = Number(expires)
  if (!Number.isFinite(expiresAt) || expiresAt < now || !signature) return false
  const expected = createHmac('sha256', accessSecret()).update(`${campaign}.${expiresAt}`).digest('hex')
  try {
    return timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'))
  } catch {
    return false
  }
}

function normalizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120)
}

function extension(name: string): string {
  return name.toLowerCase().split('.').pop() || ''
}

async function validateUpload(file: File): Promise<{ ok: true; buffer: Buffer; name: string } | { ok: false; message: string }> {
  if (!file.name || file.size === 0) return { ok: false, message: 'O arquivo anexado está vazio.' }
  if (file.size > CHECKLIST_UPLOAD_MAX_BYTES) return { ok: false, message: 'O arquivo deve ter no máximo 4 MB.' }
  const ext = extension(file.name)
  const mimeByExtension: Record<string, string[]> = {
    pdf: ['application/pdf'],
    docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'],
    xlsx: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip'],
    jpg: ['image/jpeg'],
    jpeg: ['image/jpeg'],
    png: ['image/png'],
  }
  if (!mimeByExtension[ext] || !mimeByExtension[ext].includes(file.type || 'application/octet-stream')) {
    return { ok: false, message: 'Formato de arquivo não permitido. Use PDF, DOCX, XLSX, JPG ou PNG.' }
  }
  const buffer = Buffer.from(await file.arrayBuffer())
  const isPdf = ext === 'pdf' && buffer.subarray(0, 5).toString() === '%PDF-'
  const isZipOffice = (ext === 'docx' || ext === 'xlsx') && buffer[0] === 0x50 && buffer[1] === 0x4b
  const isJpg = (ext === 'jpg' || ext === 'jpeg') && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff
  const isPng = ext === 'png' && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  if (!isPdf && !isZipOffice && !isJpg && !isPng) return { ok: false, message: 'O conteúdo do arquivo não corresponde ao formato informado.' }
  return { ok: true, buffer, name: normalizeFileName(file.name) }
}

async function materialExists(campaign: keyof typeof CAMPAIGNS): Promise<boolean> {
  try {
    const filePath = path.join(process.cwd(), 'private', 'checklists', CAMPAIGNS[campaign].privateFilename)
    const info = await stat(filePath)
    return info.isFile() && info.size > 0
  } catch {
    return false
  }
}

function mailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = process.env.LEADS_RECIPIENT_EMAIL?.trim()
  const fromEmail = process.env.LEADS_FROM_EMAIL?.trim()
  const fromName = process.env.LEADS_FROM_NAME?.trim()
  if (!apiKey || !to || !fromEmail || !fromName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) return null
  return { apiKey, to, from: `${sanitizeHeaderValue(fromName)} <${fromEmail}>` }
}

export async function POST(req: NextRequest) {
  const now = Date.now()
  if (!allowRequest(clientIp(req), now)) {
    return NextResponse.json({ ok: false, message: 'Muitas tentativas. Aguarde um momento e tente novamente.' }, { status: 429 })
  }

  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ ok: false, message: 'Requisição inválida.' }, { status: 400 })
  }

  const campaign = getCampaign(String(form.get('campanha') || ''))
  if (!campaign) return NextResponse.json({ ok: false, message: 'Campanha inválida.' }, { status: 400 })

  const raw = Object.fromEntries(form.entries()) as Record<string, unknown>
  raw.consentimento = form.get('consentimento') === 'true'
  raw.website = String(form.get('website') || '')
  const validated = validateChecklistLead(raw)
  if (!validated.ok) return NextResponse.json({ ok: false, message: validated.message, errors: validated.errors }, { status: 400 })
  if (raw.website) return NextResponse.json({ ok: true, emailAccepted: false })

  const uploadValue = form.get('arquivo')
  let upload: { buffer: Buffer; name: string } | undefined
  if (campaign === 'checklist_expansao_rede' && uploadValue instanceof File && uploadValue.size > 0) {
    return NextResponse.json({ ok: false, message: 'O formulário de expansão não aceita anexos.' }, { status: 400 })
  }
  if (campaign === 'checklist_custos_ocultos' && uploadValue instanceof File && uploadValue.size > 0) {
    const checked = await validateUpload(uploadValue)
    if (!checked.ok) return NextResponse.json({ ok: false, message: checked.message, errors: { arquivo: checked.message } }, { status: 400 })
    upload = { buffer: checked.buffer, name: checked.name }
    validated.data.uploadNome = checked.name
    validated.data.uploadTamanho = checked.buffer.length
  }

  if (seenSubmissions.has(validated.data.submissionId)) {
    return NextResponse.json({ ok: true, emailAccepted: true, duplicate: true, downloadUrl: `/api/checklists/${campaign}/download` })
  }
  if (!mailConfig()) return NextResponse.json({ ok: false, message: 'O envio está temporariamente indisponível.', code: 'email_not_configured' }, { status: 503 })
  if (!(await materialExists(campaign))) return NextResponse.json({ ok: false, message: 'O material ainda não foi configurado para esta campanha.', code: 'material_not_configured' }, { status: 503 })

  const config = mailConfig()!
  const attachment = upload ? { filename: upload.name, content: upload.buffer.toString('base64') } : undefined
  const campaignConfig = CAMPAIGNS[campaign]
  let emailResponse: Response
  try {
    emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: validated.data.email,
        subject: campaignConfig.subject,
        text: buildChecklistLeadEmailText(validated.data, upload && { name: upload.name, size: upload.buffer.length }),
        html: buildChecklistLeadEmailHtml(validated.data, upload && { name: upload.name, size: upload.buffer.length }),
        ...(attachment ? { attachments: [attachment] } : {}),
      }),
    })
  } catch (error) {
    console.error('[checklists] resend_unreachable', { campaign, message: error instanceof Error ? error.message : 'unknown' })
    return NextResponse.json({ ok: false, message: 'Não foi possível liberar o material neste momento. Tente novamente.' }, { status: 502 })
  }
  if (!emailResponse.ok) {
    console.error('[checklists] resend_failed', { campaign, status: emailResponse.status, submissionId: validated.data.submissionId })
    return NextResponse.json({ ok: false, message: 'Não foi possível liberar o material neste momento. Tente novamente.' }, { status: 502 })
  }

  seenSubmissions.set(validated.data.submissionId, now)
  const response = NextResponse.json({ ok: true, emailAccepted: true, duplicate: false, downloadUrl: `/api/checklists/${campaign}/download` })
  response.cookies.set(`sultec_checklist_access_${campaign}`, buildAccessToken(campaign, now + 60 * 60_000), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60,
    path: '/',
  })
  return response
}

export async function readPrivateMaterial(campaign: keyof typeof CAMPAIGNS): Promise<Buffer | null> {
  try {
    return await readFile(path.join(process.cwd(), 'private', 'checklists', CAMPAIGNS[campaign].privateFilename))
  } catch {
    return null
  }
}
