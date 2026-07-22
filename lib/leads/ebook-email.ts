import type { EbookLeadRecord } from '@/lib/leads/ebook-homologacao'
import { EBOOK_CAMPAIGN_ID, isValidEmail } from '@/lib/leads/ebook-homologacao'

const NI = 'Não informado'
const CAPTURE_PATH = '/materiais/checklist-homologacao'
const MATERIAL_LABEL = 'Checklist de Homologação Técnica de Fornecedores'

const EMAIL_ONLY_RE = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/

function orNi(value?: string | null): string {
  const v = typeof value === 'string' ? value.trim() : ''
  return v ? v : NI
}

/** Remove CR/LF e nulos para evitar injeção de cabeçalhos. */
export function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n\0]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function formatAuthDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'medium',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildLeadEmailSubject(lead: EbookLeadRecord): string {
  const empresa = sanitizeHeaderValue(lead.empresa)
  const nome = sanitizeHeaderValue(lead.nome)
  return `[Novo lead | E-book] ${empresa} — ${nome}`
}

export function buildLeadEmailText(lead: EbookLeadRecord): string {
  const lines: string[] = [
    'NOVO LEAD — CHECKLIST DE HOMOLOGAÇÃO',
    '',
    'DADOS DO CONTATO',
    '',
    `Nome: ${lead.nome}`,
    `E-mail profissional: ${lead.email}`,
    `Empresa: ${lead.empresa}`,
    `Cargo ou área: ${lead.cargo}`,
  ]

  if (lead.telefone) {
    lines.push(`Telefone ou WhatsApp: ${lead.telefone}`)
  }

  lines.push(
    '',
    'MOMENTO DA EMPRESA',
    '',
    `Situação informada: ${lead.situacao}`,
    '',
    'AUTORIZAÇÕES',
    '',
    'Solicitação e acesso ao material: Autorizado',
    `Aceitou receber contatos comerciais: ${lead.autorizacaoComercial ? 'Sim' : 'Não'}`,
    `Data e horário da autorização: ${formatAuthDate(lead.enviadoEm)}`,
    `Versão do texto de autorização: ${lead.versaoAutorizacao}`,
    '',
    'ORIGEM DO LEAD',
    '',
    `Material: ${MATERIAL_LABEL}`,
    `Identificação da campanha: ${lead.campanha}`,
    `Página de captura: ${CAPTURE_PATH}`,
    `Página de origem: ${orNi(lead.paginaOrigem)}`,
    `Referrer: ${orNi(lead.referrer)}`,
    `UTM source: ${orNi(lead.utm_source)}`,
    `UTM medium: ${orNi(lead.utm_medium)}`,
    `UTM campaign: ${orNi(lead.utm_campaign)}`,
    `UTM content: ${orNi(lead.utm_content)}`,
    `UTM term: ${orNi(lead.utm_term)}`,
    `FBCLID: ${orNi(lead.fbclid)}`,
  )

  return lines.join('\n')
}

function row(label: string, value: string): string {
  return `<tr>
  <td style="padding:6px 0;color:#666;font-size:13px;vertical-align:top;width:200px;">${escapeHtml(label)}</td>
  <td style="padding:6px 0;color:#111;font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>
</tr>`
}

export function buildLeadEmailHtml(lead: EbookLeadRecord): string {
  const contactRows = [
    row('Nome', lead.nome),
    row('E-mail profissional', lead.email),
    row('Empresa', lead.empresa),
    row('Cargo ou área', lead.cargo),
  ]
  if (lead.telefone) {
    contactRows.push(row('Telefone ou WhatsApp', lead.telefone))
  }

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8" /><title>Novo lead</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f4;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #e5e5e5;">
          <tr>
            <td style="background:#0B0B0B;padding:20px 24px;">
              <p style="margin:0;color:#FF5A1F;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Sultec</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:20px;font-weight:700;">
                NOVO LEAD — CHECKLIST DE HOMOLOGAÇÃO
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h2 style="margin:0 0 12px;font-size:14px;color:#111;letter-spacing:0.04em;">DADOS DO CONTATO</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${contactRows.join('')}</table>

              <h2 style="margin:24px 0 12px;font-size:14px;color:#111;letter-spacing:0.04em;">MOMENTO DA EMPRESA</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${row('Situação informada', lead.situacao)}
              </table>

              <h2 style="margin:24px 0 12px;font-size:14px;color:#111;letter-spacing:0.04em;">AUTORIZAÇÕES</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${row('Solicitação e acesso ao material', 'Autorizado')}
                ${row('Aceitou receber contatos comerciais', lead.autorizacaoComercial ? 'Sim' : 'Não')}
                ${row('Data e horário da autorização', formatAuthDate(lead.enviadoEm))}
                ${row('Versão do texto de autorização', lead.versaoAutorizacao)}
              </table>

              <h2 style="margin:24px 0 12px;font-size:14px;color:#111;letter-spacing:0.04em;">ORIGEM DO LEAD</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${row('Material', MATERIAL_LABEL)}
                ${row('Identificação da campanha', lead.campanha || EBOOK_CAMPAIGN_ID)}
                ${row('Página de captura', CAPTURE_PATH)}
                ${row('Página de origem', orNi(lead.paginaOrigem))}
                ${row('Referrer', orNi(lead.referrer))}
                ${row('UTM source', orNi(lead.utm_source))}
                ${row('UTM medium', orNi(lead.utm_medium))}
                ${row('UTM campaign', orNi(lead.utm_campaign))}
                ${row('UTM content', orNi(lead.utm_content))}
                ${row('UTM term', orNi(lead.utm_term))}
                ${row('FBCLID', orNi(lead.fbclid))}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export type LeadMailConfig = {
  apiKey: string
  to: string
  fromEmail: string
  fromName: string
}

export function isPlainEmail(value: string): boolean {
  return EMAIL_ONLY_RE.test(value) && isValidEmail(value)
}

export function getLeadMailConfig(
  env: NodeJS.ProcessEnv = process.env,
): LeadMailConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim()
  const to = env.LEADS_RECIPIENT_EMAIL?.trim()
  const fromEmail = env.LEADS_FROM_EMAIL?.trim()
  const fromName = env.LEADS_FROM_NAME?.trim()

  if (!apiKey || !to || !fromEmail || !fromName) return null
  if (!isPlainEmail(to) || !isPlainEmail(fromEmail)) return null
  if (/[<>\r\n]/.test(fromName)) return null

  return { apiKey, to, fromEmail, fromName }
}

export function formatFromAddress(config: LeadMailConfig): string {
  return `${sanitizeHeaderValue(config.fromName)} <${config.fromEmail}>`
}

export type ResendSendResult = { ok: true } | { ok: false; status: number }

/** Envia o lead via Resend. Lança se a API recusar ou a config estiver ausente. */
export async function sendLeadEmailViaResend(
  lead: EbookLeadRecord,
  fetchImpl: typeof fetch = fetch,
  env: NodeJS.ProcessEnv = process.env,
): Promise<void> {
  const config = getLeadMailConfig(env)
  if (!config) {
    throw new Error('email_not_configured')
  }

  if (!isValidEmail(lead.email)) {
    throw new Error('invalid_reply_to')
  }

  const res = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: formatFromAddress(config),
      to: [config.to],
      reply_to: sanitizeHeaderValue(lead.email),
      subject: buildLeadEmailSubject(lead),
      text: buildLeadEmailText(lead),
      html: buildLeadEmailHtml(lead),
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    console.error('[ebook-homologacao] resend_failed', {
      status: res.status,
      detail: detail.slice(0, 300),
      submissionId: lead.submissionId,
    })
    throw new Error('resend_failed')
  }
}
