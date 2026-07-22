export const COOKIE_CONSENT_KEY = 'sultec_cookie_consent'
export const COOKIE_CONSENT_VERSION = 'v1_2026-07'

export type CookieConsentState = {
  version: typeof COOKIE_CONSENT_VERSION
  necessary: true
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

export function defaultConsentDenied(): CookieConsentState {
  return {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  }
}

export function readConsent(): CookieConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<CookieConsentState>
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null
    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
    }
  } catch {
    return null
  }
}

export function writeConsent(state: Omit<CookieConsentState, 'version' | 'necessary' | 'updatedAt'> & {
  analytics: boolean
  marketing: boolean
}): CookieConsentState {
  const next: CookieConsentState = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: state.analytics === true,
    marketing: state.marketing === true,
    updatedAt: new Date().toISOString(),
  }
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(next))
  } catch {
    /* ignore */
  }
  return next
}

export function allowsAnalytics(consent: CookieConsentState | null): boolean {
  return consent?.analytics === true
}

export function allowsMarketing(consent: CookieConsentState | null): boolean {
  return consent?.marketing === true
}

/** Pode carregar GTM quando analytics ou marketing foram aceitos. */
export function allowsGtm(consent: CookieConsentState | null): boolean {
  return allowsAnalytics(consent) || allowsMarketing(consent)
}
