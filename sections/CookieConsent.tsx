'use client'

import { useEffect, useId, useState } from 'react'
import Link from 'next/link'
import {
  defaultConsentDenied,
  readConsent,
  writeConsent,
  type CookieConsentState,
} from '@/lib/cookie-consent'
import { pushDataLayer } from '@/lib/meta-pixel'

type View = 'hidden' | 'banner' | 'preferences'

function announceConsent(state: CookieConsentState) {
  pushDataLayer({
    event: 'cookie_consent_update',
    consent_analytics: state.analytics,
    consent_marketing: state.marketing,
    consent_version: state.version,
  })
  window.dispatchEvent(new CustomEvent('sultec:consent', { detail: state }))
}

export function CookieConsent() {
  const formId = useId()
  const [view, setView] = useState<View>('banner')
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const existing = readConsent()
    if (existing) {
      setAnalytics(existing.analytics)
      setMarketing(existing.marketing)
      setView('hidden')
      announceConsent(existing)
      return
    }
    setView('banner')
  }, [])

  useEffect(() => {
    const openPrefs = () => {
      const current = readConsent() || defaultConsentDenied()
      setAnalytics(current.analytics)
      setMarketing(current.marketing)
      setView('preferences')
    }
    window.addEventListener('sultec:open-cookie-preferences', openPrefs)
    return () => window.removeEventListener('sultec:open-cookie-preferences', openPrefs)
  }, [])

  const persist = (nextAnalytics: boolean, nextMarketing: boolean) => {
    const state = writeConsent({ analytics: nextAnalytics, marketing: nextMarketing })
    setAnalytics(state.analytics)
    setMarketing(state.marketing)
    setView('hidden')
    announceConsent(state)
  }

  if (view === 'hidden') return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[80] p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
    >
      <div className="max-w-[560px] mx-auto bg-[#0f1012] border border-[#1c1d1e] rounded-2xl shadow-2xl p-4 sm:p-5">
        <h2
          id={`${formId}-title`}
          className="font-roboto font-bold text-white text-[16px] sm:text-[18px] tracking-[-0.02em]"
        >
          Preferências de cookies
        </h2>
        <p className="font-sora text-[#ABADAB] text-[12px] sm:text-[13px] leading-[1.45] mt-1.5">
          Usamos cookies essenciais. Analytics e marketing só são ativados com sua autorização. Veja a{' '}
          <Link
            href="/politica-de-privacidade"
            className="text-white underline underline-offset-2 hover:text-[#F35901]"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        {view === 'preferences' && (
          <fieldset className="mt-5 flex flex-col gap-3">
            <legend className="sr-only">Categorias de cookies</legend>
            <label className="flex items-start gap-3 rounded-xl border border-[#1c1d1e] px-4 py-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-[#F35901]"
                aria-describedby={`${formId}-necessary`}
              />
              <span>
                <span className="block font-sora text-white text-[14px]">Necessários</span>
                <span id={`${formId}-necessary`} className="block font-sora text-[#898A89] text-[12px] mt-0.5">
                  Sempre ativos. Incluem preferência de consentimento e funcionamento básico.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#1c1d1e] px-4 py-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 accent-[#F35901]"
              />
              <span>
                <span className="block font-sora text-white text-[14px]">Analytics</span>
                <span className="block font-sora text-[#898A89] text-[12px] mt-0.5">
                  Medição de audiência e desempenho (ex.: via Google Tag Manager).
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-[#1c1d1e] px-4 py-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 accent-[#F35901]"
              />
              <span>
                <span className="block font-sora text-white text-[14px]">Marketing</span>
                <span className="block font-sora text-[#898A89] text-[12px] mt-0.5">
                  Campanhas e pixels de publicidade (ex.: Meta via GTM), apenas com autorização.
                </span>
              </span>
            </label>
          </fieldset>
        )}

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          {view === 'banner' ? (
            <>
              <button
                type="button"
                onClick={() => persist(true, true)}
                className="inline-flex justify-center items-center font-sora text-[14px] text-white bg-[#C84700] hover:bg-[#A83D01] rounded-[12px] px-5 py-3 min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
              >
                Aceitar todos
              </button>
              <button
                type="button"
                onClick={() => persist(false, false)}
                className="inline-flex justify-center items-center font-sora text-[14px] text-white border border-[#2a2b2c] hover:border-[#F35901] rounded-[12px] px-5 py-3 min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
              >
                Rejeitar não essenciais
              </button>
              <button
                type="button"
                onClick={() => setView('preferences')}
                className="inline-flex justify-center items-center font-sora text-[14px] text-[#ABADAB] hover:text-white rounded-[12px] px-5 py-3 min-h-11 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
              >
                Personalizar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => persist(analytics, marketing)}
                className="inline-flex justify-center items-center font-sora text-[14px] text-white bg-[#C84700] hover:bg-[#A83D01] rounded-[12px] px-5 py-3 min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
              >
                Salvar preferências
              </button>
              <button
                type="button"
                onClick={() => persist(true, true)}
                className="inline-flex justify-center items-center font-sora text-[14px] text-white border border-[#2a2b2c] hover:border-[#F35901] rounded-[12px] px-5 py-3 min-h-11"
              >
                Aceitar todos
              </button>
              <button
                type="button"
                onClick={() => setView('banner')}
                className="inline-flex justify-center items-center font-sora text-[14px] text-[#ABADAB] hover:text-white rounded-[12px] px-5 py-3 min-h-11"
              >
                Voltar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function openCookiePreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event('sultec:open-cookie-preferences'))
}
