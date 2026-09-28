export const WHATSAPP_CLICK_EVENT = 'Clique para iniciar conversa' as const
export const WHATSAPP_NUMBER = '5500000000000'

export const WHATSAPP_HIGHLIGHTS = {
  fluke_dsx: {
    label: 'Certificação Fluke DSX',
    message:
      'Olá, vim pelo LinkedIn da Sultec e gostaria de falar sobre certificação de redes com Fluke DSX.',
  },
  infraestrutura_completa: {
    label: 'Infraestrutura Completa',
    message:
      'Olá, vim pelo LinkedIn da Sultec e gostaria de conversar sobre um projeto completo de infraestrutura de TI.',
  },
  operacoes_criticas: {
    label: 'Operações Críticas',
    message:
      'Olá, vim pelo LinkedIn da Sultec e gostaria de conversar sobre infraestrutura para operações críticas.',
  },
  data_center: {
    label: 'Data Centers',
    message:
      'Olá, vim pelo LinkedIn da Sultec e gostaria de conversar sobre Data Centers e salas técnicas corporativas.',
  },
  redes_fibra: {
    label: 'Redes e Fibra',
    message:
      'Olá, vim pelo LinkedIn da Sultec e gostaria de conversar sobre redes corporativas, cabeamento e fibra óptica.',
  },
  cases: {
    label: 'Cases',
    message:
      'Olá, vim pelo LinkedIn da Sultec, vi os cases da empresa e gostaria de conversar sobre um projeto.',
  },
} as const

export type WhatsappHighlightKey = keyof typeof WHATSAPP_HIGHLIGHTS

const GENERIC_HIGHLIGHT = {
  label: 'Conteúdo não identificado',
  message:
    'Olá, vim pelo LinkedIn da Sultec e gostaria de conversar sobre um projeto.',
} as const

export type WhatsappClickRecord = {
  schema_version: 1
  event_id: string
  event: typeof WHATSAPP_CLICK_EVENT
  clicked_at: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  content_label: string
  whatsapp_number: typeof WHATSAPP_NUMBER
  whatsapp_message: string
  whatsapp_url: string
}

export function sanitizeTrackingValue(
  value: string | null | undefined,
  maxLength = 160,
): string {
  return (value || '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function isWhatsappHighlightKey(
  value: string,
): value is WhatsappHighlightKey {
  return Object.prototype.hasOwnProperty.call(WHATSAPP_HIGHLIGHTS, value)
}

export function getWhatsappHighlight(value: string | null | undefined) {
  const content = sanitizeTrackingValue(value)
  return isWhatsappHighlightKey(content)
    ? WHATSAPP_HIGHLIGHTS[content]
    : GENERIC_HIGHLIGHT
}

export function buildWhatsappUrl(message: string): string {
  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`)
  url.searchParams.set('text', message)
  return url.toString()
}

export function buildWhatsappClickRecord(
  searchParams: URLSearchParams,
  options: { eventId: string; clickedAt?: Date },
): WhatsappClickRecord {
  const utmContent = sanitizeTrackingValue(searchParams.get('utm_content'))
  const highlight = getWhatsappHighlight(utmContent)

  return {
    schema_version: 1,
    event_id: sanitizeTrackingValue(options.eventId, 120),
    event: WHATSAPP_CLICK_EVENT,
    clicked_at: (options.clickedAt || new Date()).toISOString(),
    utm_source: sanitizeTrackingValue(searchParams.get('utm_source'), 120),
    utm_medium: sanitizeTrackingValue(searchParams.get('utm_medium'), 120),
    utm_campaign: sanitizeTrackingValue(searchParams.get('utm_campaign')),
    utm_content: utmContent,
    content_label: highlight.label,
    whatsapp_number: WHATSAPP_NUMBER,
    whatsapp_message: highlight.message,
    whatsapp_url: buildWhatsappUrl(highlight.message),
  }
}

/** Evita que prévias de redes sociais e monitores gerem falsos leads. */
export function isLikelyAutomatedRequest(userAgent: string | null): boolean {
  return /(bot|crawler|spider|preview|facebookexternalhit|curl|wget)/i.test(
    userAgent || '',
  )
}
