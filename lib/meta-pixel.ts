/**
 * Helpers de analytics via dataLayer (GTM).
 * Origem única no navegador. Não chama fbq diretamente para evitar duplicidade
 * com tags configuradas no contêiner GTM.
 */

import { allowsMarketing, readConsent } from '@/lib/cookie-consent'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

function canTrackMarketing(): boolean {
  return allowsMarketing(readConsent())
}

/** Visualização de conteúdo (landing de captura). Requer consentimento de marketing. */
export function trackViewContent(params: {
  content_name: string
  content_category?: string
}) {
  if (!canTrackMarketing()) return
  pushDataLayer({
    event: 'view_content',
    content_name: params.content_name,
    content_category: params.content_category,
  })
}

/** Conversão Lead, somente após e-mail aceito pelo Resend + consentimento de marketing. */
export function trackLead(params: {
  content_name: string
  content_category: string
  eventID: string
}) {
  if (!canTrackMarketing()) return
  pushDataLayer({
    event: 'generate_lead',
    content_name: params.content_name,
    content_category: params.content_category,
    event_id: params.eventID,
  })
}

/** Liberação do material na página de acesso. */
export function trackEbookAccess(params: { content_name: string }) {
  if (!canTrackMarketing()) return
  pushDataLayer({
    event: 'ebook_access',
    content_name: params.content_name,
  })
}

/** Download do PDF, uma vez por clique real. */
export function trackEbookDownload(params: { content_name: string }) {
  if (!canTrackMarketing()) return
  pushDataLayer({
    event: 'ebook_download',
    content_name: params.content_name,
  })
}
