'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import {
  allowsAnalytics,
  allowsGtm,
  allowsMarketing,
  readConsent,
  type CookieConsentState,
} from '@/lib/cookie-consent'
import { pushDataLayer } from '@/lib/meta-pixel'

const VercelAnalytics = dynamic(
  () => import('@vercel/analytics/next').then((mod) => mod.Analytics),
  { ssr: false }
)

export const GTM_ID = 'GTM-TSGBLTXP'

/**
 * Carrega GTM e Vercel Analytics somente após consentimento.
 * Vercel Analytics exige a categoria analytics (não marketing).
 */
export function AnalyticsLoader() {
  const [consent, setConsent] = useState<CookieConsentState | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setReady(true)

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentState>).detail
      setConsent(detail || readConsent())
    }
    window.addEventListener('sultec:consent', onConsent)
    return () => window.removeEventListener('sultec:consent', onConsent)
  }, [])

  useEffect(() => {
    if (!consent || !allowsGtm(consent)) return
    pushDataLayer({
      event: 'consent_default',
      analytics_storage: allowsAnalytics(consent) ? 'granted' : 'denied',
      ad_storage: allowsMarketing(consent) ? 'granted' : 'denied',
      ad_user_data: allowsMarketing(consent) ? 'granted' : 'denied',
      ad_personalization: allowsMarketing(consent) ? 'granted' : 'denied',
    })
  }, [consent])

  if (!ready) return null

  return (
    <>
      {allowsAnalytics(consent) ? (
        <VercelAnalytics
          beforeSend={(event) => {
            if (!allowsAnalytics(readConsent())) return null
            // Não medir páginas de acesso a material / APIs
            if (
              event.url.includes('/materiais/checklist-homologacao/acesso') ||
              event.url.includes('/api/')
            ) {
              return null
            }
            return event
          }}
        />
      ) : null}

      {allowsGtm(consent) ? (
        <>
          <Script id="gtm-base" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
    </>
  )
}
