import { waitUntil } from '@vercel/functions'
import { NextRequest, NextResponse } from 'next/server'

import { deliverWhatsappClick } from '@/lib/leads/whatsapp-delivery'
import {
  buildWhatsappClickRecord,
  buildWhatsappUrl,
  getWhatsappHighlight,
  isLikelyAutomatedRequest,
} from '@/lib/leads/whatsapp-tracking'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 10

function redirectToWhatsapp(url: string) {
  return NextResponse.redirect(url, {
    status: 307,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
      'Referrer-Policy': 'no-referrer',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}

export function GET(request: NextRequest) {
  const record = buildWhatsappClickRecord(request.nextUrl.searchParams, {
    eventId: crypto.randomUUID(),
  })

  if (!isLikelyAutomatedRequest(request.headers.get('user-agent'))) {
    waitUntil(deliverWhatsappClick(record))
  }

  return redirectToWhatsapp(record.whatsapp_url)
}

/** HEAD é usado por monitores e prévias; redireciona sem contabilizar lead. */
export function HEAD(request: NextRequest) {
  const highlight = getWhatsappHighlight(
    request.nextUrl.searchParams.get('utm_content'),
  )
  return redirectToWhatsapp(buildWhatsappUrl(highlight.message))
}
