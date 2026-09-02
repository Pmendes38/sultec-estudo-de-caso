'use client'

import { allowsMarketing, readConsent } from '@/lib/cookie-consent'
import type { ChecklistCampaign } from '@/lib/leads/checklist-campaigns'

const EVENTS: Record<ChecklistCampaign, {
  view: string
  start: string
  submit: string
  download: string
  whatsapp: string
}> = {
  checklist_expansao_rede: {
    view: 'view_checklist_expansao',
    start: 'start_form_expansao',
    submit: 'submit_form_expansao',
    download: 'download_checklist_expansao',
    whatsapp: 'click_whatsapp_expansao',
  },
  checklist_custos_ocultos: {
    view: 'view_checklist_custos',
    start: 'start_form_custos',
    submit: 'submit_form_custos',
    download: 'download_checklist_custos',
    whatsapp: 'click_whatsapp_custos',
  },
}

export type ChecklistEvent = keyof typeof EVENTS[ChecklistCampaign]

export function trackChecklistEvent(campaign: ChecklistCampaign, type: ChecklistEvent) {
  if (typeof window === 'undefined' || !allowsMarketing(readConsent())) return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: EVENTS[campaign][type], checklist_campaign: campaign })
}

export function checklistEventName(campaign: ChecklistCampaign, type: ChecklistEvent): string {
  return EVENTS[campaign][type]
}
