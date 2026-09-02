'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CARGO_OPTIONS,
  EBOOK_ACCESS_STORAGE_KEY,
  EBOOK_AUTH_TEXT_COMMERCIAL,
  EBOOK_AUTH_TEXT_MATERIAL,
  EBOOK_AUTH_VERSION,
  EBOOK_CONTENT_CATEGORY,
  EBOOK_CONTENT_NAME,
  SITUACAO_OPTIONS,
  buildAccessUrl,
  formatPhoneBR,
  isValidEmail,
  type FieldErrors,
} from '@/lib/leads/ebook-homologacao'
import { trackLead } from '@/lib/meta-pixel'

type FormData = {
  nome: string
  email: string
  empresa: string
  cargo: string
  situacao: string
  telefone: string
  autorizacaoMaterial: boolean
  autorizacaoComercial: boolean
  website: string
}

const empty: FormData = {
  nome: '',
  email: '',
  empresa: '',
  cargo: '',
  situacao: '',
  telefone: '',
  autorizacaoMaterial: false,
  autorizacaoComercial: false,
  website: '',
}

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
] as const

function newId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `id_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function readUrlAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const attr: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) attr[key] = value
  }
  return attr
}

export function CaptureForm() {
  const router = useRouter()
  const formId = useId()
  const [data, setData] = useState<FormData>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const leadTrackedRef = useRef(false)
  const submittingRef = useRef(false)

  useEffect(() => {
    const fromUrl = readUrlAttribution()
    if (Object.keys(fromUrl).length === 0) return
    try {
      sessionStorage.setItem('sultec_ebook_utm', JSON.stringify(fromUrl))
    } catch {
      /* ignore */
    }
  }, [])

  const update =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : key === 'telefone'
            ? formatPhoneBR(e.target.value)
            : e.target.value
      setData((d) => ({ ...d, [key]: value }))
      setErrors((prev) => {
        if (!prev[key]) return prev
        const next = { ...prev }
        delete next[key]
        return next
      })
    }

  const validateClient = (): FieldErrors => {
    const next: FieldErrors = {}
    if (!data.nome.trim() || data.nome.trim().length < 2) next.nome = 'Informe seu nome completo.'
    if (!data.email.trim()) next.email = 'Informe seu e-mail profissional.'
    else if (!isValidEmail(data.email.trim())) next.email = 'Informe um e-mail válido.'
    if (!data.empresa.trim()) next.empresa = 'Informe o nome da empresa.'
    if (!data.cargo) next.cargo = 'Selecione seu cargo ou área de atuação.'
    if (!data.situacao) next.situacao = 'Selecione a situação atual da empresa.'
    if (!data.autorizacaoMaterial) {
      next.autorizacaoMaterial =
        'É necessário autorizar o tratamento dos dados para liberar o material.'
    }
    return next
  }

  const getAttribution = () => {
    const attr = readUrlAttribution()
    try {
      const raw = sessionStorage.getItem('sultec_ebook_utm')
      if (raw) {
        const stored = JSON.parse(raw) as Record<string, string>
        for (const key of UTM_KEYS) {
          if (!attr[key] && stored[key]) attr[key] = stored[key]
        }
      }
    } catch {
      /* ignore */
    }
    return attr
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submittingRef.current || sending) return

    setFormError(null)
    const clientErrors = validateClient()
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors)
      return
    }

    submittingRef.current = true
    setSending(true)
    setErrors({})

    const eventId = newId()
    const submissionId = newId()
    const attr = getAttribution()

    try {
      const res = await fetch('/api/leads/ebook-homologacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          empresa: data.empresa,
          cargo: data.cargo,
          situacao: data.situacao,
          telefone: data.telefone || undefined,
          autorizacaoMaterial: data.autorizacaoMaterial,
          autorizacaoComercial: data.autorizacaoComercial,
          website: data.website,
          ...attr,
          paginaOrigem: typeof window !== 'undefined' ? window.location.href : undefined,
          referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
          eventId,
          submissionId,
        }),
      })

      const json = (await res.json().catch(() => null)) as {
        ok?: boolean
        emailAccepted?: boolean
        message?: string
        errors?: FieldErrors
      } | null

      // Somente libera material / Lead / redirect se o Resend aceitou o e-mail
      if (!res.ok || !json?.ok || json.emailAccepted !== true) {
        if (json?.errors) setErrors(json.errors)
        setFormError(
          json?.message ||
            'Não foi possível liberar o material neste momento. Verifique os dados e tente novamente.',
        )
        return
      }

      try {
        sessionStorage.setItem(EBOOK_ACCESS_STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }

      if (!leadTrackedRef.current) {
        leadTrackedRef.current = true
        trackLead({
          content_name: EBOOK_CONTENT_NAME,
          content_category: EBOOK_CONTENT_CATEGORY,
          eventID: eventId,
        })
      }

      const qs = new URLSearchParams(attr)
      router.push(buildAccessUrl(qs))
    } catch {
      setFormError(
        'Não foi possível liberar o material neste momento. Verifique os dados e tente novamente.',
      )
    } finally {
      setSending(false)
      submittingRef.current = false
    }
  }

  const fieldErrorId = (name: string) => `${formId}-${name}-error`

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative bg-dark-700 border border-[#1c1d1e] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-5"
      aria-busy={sending}
    >
      <div>
        <h2 className="font-roboto font-bold text-white text-[22px] lg:text-[26px] tracking-[-0.03em]">
          Receba o material gratuitamente
        </h2>
        <p className="font-sora text-muted text-[13px] mt-2">
          Campos marcados com <span className="text-[#F35901]">*</span> são obrigatórios.
        </p>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={update('website')}
        />
      </div>

      <Field
        label="Nome completo"
        id={`${formId}-nome`}
        required
        error={errors.nome}
        errorId={fieldErrorId('nome')}
      >
        <input
          id={`${formId}-nome`}
          name="nome"
          type="text"
          required
          autoComplete="name"
          value={data.nome}
          onChange={update('nome')}
          className={inputClass(!!errors.nome)}
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? fieldErrorId('nome') : undefined}
        />
      </Field>

      <Field
        label="E-mail profissional"
        id={`${formId}-email`}
        required
        error={errors.email}
        errorId={fieldErrorId('email')}
      >
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={data.email}
          onChange={update('email')}
          className={inputClass(!!errors.email)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? fieldErrorId('email') : undefined}
        />
      </Field>

      <Field
        label="Empresa"
        id={`${formId}-empresa`}
        required
        error={errors.empresa}
        errorId={fieldErrorId('empresa')}
      >
        <input
          id={`${formId}-empresa`}
          name="empresa"
          type="text"
          required
          autoComplete="organization"
          value={data.empresa}
          onChange={update('empresa')}
          className={inputClass(!!errors.empresa)}
          aria-invalid={!!errors.empresa}
          aria-describedby={errors.empresa ? fieldErrorId('empresa') : undefined}
        />
      </Field>

      <Field
        label="Cargo ou área de atuação"
        id={`${formId}-cargo`}
        required
        error={errors.cargo}
        errorId={fieldErrorId('cargo')}
      >
        <select
          id={`${formId}-cargo`}
          name="cargo"
          required
          value={data.cargo}
          onChange={update('cargo')}
          className={inputClass(!!errors.cargo)}
          aria-invalid={!!errors.cargo}
          aria-describedby={errors.cargo ? fieldErrorId('cargo') : undefined}
        >
          <option value="" disabled>
            Selecione…
          </option>
          {CARGO_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="font-sora text-muted text-[13px] tracking-[-0.01em] mb-1">
          Em qual situação sua empresa se encontra atualmente?{' '}
          <span className="text-[#F35901]" aria-hidden>
            *
          </span>
          <span className="sr-only">(obrigatório)</span>
        </legend>
        <div
          className="flex flex-col gap-2.5"
          role="radiogroup"
          aria-required="true"
          aria-invalid={!!errors.situacao}
          aria-describedby={errors.situacao ? fieldErrorId('situacao') : undefined}
        >
          {SITUACAO_OPTIONS.map((opt, index) => {
            const id = `${formId}-situacao-${index}`
            return (
              <label
                key={opt}
                htmlFor={id}
                className={`flex items-start gap-3 cursor-pointer rounded-xl border px-4 py-3 transition-colors ${
                  data.situacao === opt
                    ? 'border-[#F35901] bg-[#F35901]/10'
                    : 'border-[#1c1d1e] hover:border-[#333]'
                }`}
              >
                <input
                  id={id}
                  type="radio"
                  name="situacao"
                  value={opt}
                  checked={data.situacao === opt}
                  onChange={update('situacao')}
                  className="mt-1 accent-[#F35901] shrink-0"
                />
                <span className="font-sora text-white text-[14px] leading-[1.4]">{opt}</span>
              </label>
            )
          })}
        </div>
        {errors.situacao && (
          <p id={fieldErrorId('situacao')} role="alert" className="font-sora text-[13px] text-red-400">
            {errors.situacao}
          </p>
        )}
      </fieldset>

      <Field
        label="Telefone ou WhatsApp"
        id={`${formId}-telefone`}
        error={errors.telefone}
        errorId={fieldErrorId('telefone')}
        hint="Opcional"
      >
        <input
          id={`${formId}-telefone`}
          name="telefone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={data.telefone}
          onChange={update('telefone')}
          placeholder="(00) 00000-0000"
          className={inputClass(!!errors.telefone)}
          aria-invalid={!!errors.telefone}
          aria-describedby={errors.telefone ? fieldErrorId('telefone') : undefined}
        />
      </Field>

      <div className="flex flex-col gap-4 pt-1 border-t border-[#1c1d1e]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.autorizacaoMaterial}
            onChange={update('autorizacaoMaterial')}
            className="mt-1 accent-[#F35901] shrink-0"
            aria-invalid={!!errors.autorizacaoMaterial}
            aria-describedby={
              errors.autorizacaoMaterial ? fieldErrorId('autorizacaoMaterial') : undefined
            }
          />
          <span className="font-sora text-[#ABADAB] text-[13px] leading-[1.5]">
            Li a{' '}
            <a
              href="/politica-de-privacidade"
              className="text-white underline underline-offset-2 hover:text-[#F35901]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade
            </a>{' '}
            e autorizo o tratamento dos meus dados para disponibilização do material solicitado.{' '}
            <span className="text-[#F35901]">*</span>
            <span className="sr-only"> {EBOOK_AUTH_TEXT_MATERIAL} Versão {EBOOK_AUTH_VERSION}</span>
          </span>
        </label>
        {errors.autorizacaoMaterial && (
          <p
            id={fieldErrorId('autorizacaoMaterial')}
            role="alert"
            className="font-sora text-[13px] text-red-400 -mt-2"
          >
            {errors.autorizacaoMaterial}
          </p>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.autorizacaoComercial}
            onChange={update('autorizacaoComercial')}
            className="mt-1 accent-[#F35901] shrink-0"
          />
          <span className="font-sora text-[#ABADAB] text-[13px] leading-[1.5]">
            {EBOOK_AUTH_TEXT_COMMERCIAL}
          </span>
        </label>
        <p className="sr-only">Versão do texto de autorização: {EBOOK_AUTH_VERSION}</p>
      </div>

      {formError && (
        <p
          role="alert"
          className="font-sora text-[14px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
        >
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-3 font-sora text-white text-[15px] bg-[#F35901] hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed rounded-[14px] px-8 py-[14px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
      >
        {sending ? 'Enviando...' : 'Acessar o checklist'}
        {!sending && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M1 7H13M13 7L7 1M13 7L7 13"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  id,
  required,
  error,
  errorId,
  hint,
  children,
}: {
  label: string
  id: string
  required?: boolean
  error?: string
  errorId: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-sora text-muted text-[13px] tracking-[-0.01em]">
        {label}
        {required ? (
          <>
            {' '}
            <span className="text-[#F35901]" aria-hidden>
              *
            </span>
            <span className="sr-only">(obrigatório)</span>
          </>
        ) : hint ? (
          <span className="text-[#666867]"> · {hint}</span>
        ) : null}
      </label>
      {children}
      {error && (
        <p id={errorId} role="alert" className="font-sora text-[13px] text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return `w-full bg-dark-900 border ${
    hasError ? 'border-red-400' : 'border-[#1c1d1e]'
  } focus:border-[#F35901] focus:outline-none rounded-xl px-4 py-3 font-sora text-white text-[14px] placeholder:text-muted/50 transition-colors`
}
