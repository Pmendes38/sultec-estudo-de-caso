import type { WhatsappClickRecord } from './whatsapp-tracking'

const EMAIL_RE = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/

type WebhookConfig = {
  url: string
  token: string
}

type EmailConfig = {
  apiKey: string
  to: string
  fromEmail: string
  fromName: string
}

export type WhatsappDeliveryResult = {
  webhook: 'sent' | 'not_configured' | 'failed'
  email: 'sent' | 'not_configured' | 'failed'
}

function cleanHeader(value: string): string {
  return value.replace(/[\r\n\0]/g, ' ').replace(/\s+/g, ' ').trim()
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function displayValue(value: string): string {
  return value || 'Não informado'
}

function formatClickDate(iso: string): string {
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

export function getWhatsappWebhookConfig(
  env: NodeJS.ProcessEnv = process.env,
): WebhookConfig | null {
  const url = env.WHATSAPP_TRACKING_WEBHOOK_URL?.trim()
  const token = env.WHATSAPP_TRACKING_WEBHOOK_TOKEN?.trim()
  if (!url || !token) return null
  if (/[\r\n\0]/.test(token)) return null

  try {
    const parsed = new URL(url)
    if (parsed.protocol !== 'https:' || parsed.username || parsed.password) return null
  } catch {
    return null
  }

  return { url, token }
}

export function getWhatsappEmailConfig(
  env: NodeJS.ProcessEnv = process.env,
): EmailConfig | null {
  const apiKey = env.RESEND_API_KEY?.trim()
  const to = env.WHATSAPP_TRACKING_NOTIFICATION_EMAIL?.trim()
  const fromEmail = env.LEADS_FROM_EMAIL?.trim()
  const fromName = env.LEADS_FROM_NAME?.trim()

  if (!apiKey || !to || !fromEmail || !fromName) return null
  if (!EMAIL_RE.test(to) || !EMAIL_RE.test(fromEmail)) return null
  if (/[<>\r\n]/.test(fromName)) return null

  return { apiKey, to, fromEmail, fromName }
}

export async function sendWhatsappClickToWebhook(
  record: WhatsappClickRecord,
  fetchImpl: typeof fetch = fetch,
  env: NodeJS.ProcessEnv = process.env,
): Promise<void> {
  const config = getWhatsappWebhookConfig(env)
  if (!config) throw new Error('webhook_not_configured')

  const response = await fetchImpl(config.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(record),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`webhook_rejected_${response.status}`)
  }
}

export function buildWhatsappNotificationText(
  record: WhatsappClickRecord,
): string {
  return [
    'NOVO CLIQUE PARA INICIAR CONVERSA',
    '',
    `Evento: ${record.event}`,
    `Data e horário: ${formatClickDate(record.clicked_at)}`,
    `Destaque: ${record.content_label}`,
    `UTM source: ${displayValue(record.utm_source)}`,
    `UTM medium: ${displayValue(record.utm_medium)}`,
    `UTM campaign: ${displayValue(record.utm_campaign)}`,
    `UTM content: ${displayValue(record.utm_content)}`,
    `Identificador do evento: ${record.event_id}`,
    '',
    'Este evento registra apenas o clique para iniciar uma conversa.',
    'Ele não confirma que a mensagem foi enviada pelo usuário.',
  ].join('\n')
}

export function buildWhatsappNotificationHtml(
  record: WhatsappClickRecord,
): string {
  const rows = [
    ['Evento', record.event],
    ['Data e horário', formatClickDate(record.clicked_at)],
    ['Destaque', record.content_label],
    ['UTM source', displayValue(record.utm_source)],
    ['UTM medium', displayValue(record.utm_medium)],
    ['UTM campaign', displayValue(record.utm_campaign)],
    ['UTM content', displayValue(record.utm_content)],
    ['Identificador do evento', record.event_id],
  ]
    .map(
      ([label, value]) => `<tr>
  <td style="padding:6px 0;color:#666;font-size:13px;vertical-align:top;width:190px;">${escapeHtml(label)}</td>
  <td style="padding:6px 0;color:#111;font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>
</tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8" /><title>Novo clique para WhatsApp</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f4;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:640px;background:#fff;border:1px solid #e5e5e5;">
        <tr><td style="background:#0B0B0B;padding:20px 24px;">
          <p style="margin:0;color:#FF5A1F;font-size:12px;letter-spacing:.08em;text-transform:uppercase;">Sultec</p>
          <h1 style="margin:8px 0 0;color:#fff;font-size:20px;">NOVO CLIQUE PARA INICIAR CONVERSA</h1>
        </td></tr>
        <tr><td style="padding:24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rows}</table>
          <p style="margin:20px 0 0;color:#666;font-size:12px;line-height:1.5;">
            Este evento registra apenas o clique para iniciar uma conversa. Ele não confirma que a mensagem foi enviada pelo usuário.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function sendWhatsappClickEmail(
  record: WhatsappClickRecord,
  fetchImpl: typeof fetch = fetch,
  env: NodeJS.ProcessEnv = process.env,
): Promise<void> {
  const config = getWhatsappEmailConfig(env)
  if (!config) throw new Error('email_not_configured')

  const response = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${cleanHeader(config.fromName)} <${config.fromEmail}>`,
      to: [config.to],
      subject: cleanHeader(
        `[Novo lead | WhatsApp] ${record.content_label} | ${displayValue(record.utm_source)}`,
      ),
      text: buildWhatsappNotificationText(record),
      html: buildWhatsappNotificationHtml(record),
    }),
  })

  if (!response.ok) {
    throw new Error(`email_rejected_${response.status}`)
  }
}

export async function deliverWhatsappClick(
  record: WhatsappClickRecord,
  fetchImpl: typeof fetch = fetch,
  env: NodeJS.ProcessEnv = process.env,
): Promise<WhatsappDeliveryResult> {
  const webhookConfigured = Boolean(getWhatsappWebhookConfig(env))
  const emailConfigured = Boolean(getWhatsappEmailConfig(env))

  const [webhook, email] = await Promise.allSettled([
    webhookConfigured
      ? sendWhatsappClickToWebhook(record, fetchImpl, env)
      : Promise.reject(new Error('webhook_not_configured')),
    emailConfigured
      ? sendWhatsappClickEmail(record, fetchImpl, env)
      : Promise.reject(new Error('email_not_configured')),
  ])

  const result: WhatsappDeliveryResult = {
    webhook:
      webhook.status === 'fulfilled'
        ? 'sent'
        : webhookConfigured
          ? 'failed'
          : 'not_configured',
    email:
      email.status === 'fulfilled'
        ? 'sent'
        : emailConfigured
          ? 'failed'
          : 'not_configured',
  }

  if (webhook.status === 'rejected') {
    console.error('[whatsapp-tracking] webhook_delivery_error', {
      eventId: record.event_id,
      code:
        webhook.reason instanceof Error ? webhook.reason.message : 'unknown_error',
    })
  }
  if (email.status === 'rejected') {
    console.error('[whatsapp-tracking] email_delivery_error', {
      eventId: record.event_id,
      code: email.reason instanceof Error ? email.reason.message : 'unknown_error',
    })
  }

  return result
}
