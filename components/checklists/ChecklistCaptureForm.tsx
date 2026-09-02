'use client'

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  CAMPAIGNS,
  CHECKLIST_AUTH_TEXT,
  CONTRACT_STAGES,
  EXPANSION_TYPES,
  INVESTMENT_RANGES,
  PROJECT_TYPES,
  STATE_OPTIONS,
  formatPhoneBR,
  isValidEmail,
  type ChecklistCampaign,
  type FieldErrors,
} from '@/lib/leads/checklist-campaigns'
import { trackChecklistEvent } from '@/lib/checklist-tracking'

type FormValues = {
  nome: string
  email: string
  telefone: string
  empresa: string
  cargo: string
  cidade: string
  estado: string
  tipoExpansao: string
  dataInicio: string
  investimento: string
  preocupacao: string
  tipoProjeto: string
  etapaContratacao: string
  prazoContratacao: string
  arquivo: File | null
  consentimento: boolean
  website: string
}

const empty: FormValues = {
  nome: '', email: '', telefone: '', empresa: '', cargo: '', cidade: '', estado: '',
  tipoExpansao: '', dataInicio: '', investimento: '', preocupacao: '', tipoProjeto: '',
  etapaContratacao: '', prazoContratacao: '', arquivo: null, consentimento: false, website: '',
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

function newId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id_${Date.now()}_${Math.random().toString(36).slice(2)}`
}

function getAttribution(campaign: ChecklistCampaign): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const key = `sultec_checklist_utm_${campaign}`
  const current: Record<string, string> = {}
  const params = new URLSearchParams(window.location.search)
  for (const name of UTM_KEYS) if (params.get(name)) current[name] = params.get(name)!
  try {
    const stored = JSON.parse(sessionStorage.getItem(key) || '{}') as Record<string, string>
    for (const name of UTM_KEYS) if (!current[name] && stored[name]) current[name] = stored[name]
    if (Object.keys(current).length) sessionStorage.setItem(key, JSON.stringify(current))
  } catch {
    /* storage is optional */
  }
  return current
}

export function ChecklistCaptureForm({ campaign }: { campaign: ChecklistCampaign }) {
  const config = CAMPAIGNS[campaign]
  const formId = useId()
  const [data, setData] = useState<FormValues>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const startedRef = useRef(false)
  const submittingRef = useRef(false)

  useEffect(() => {
    getAttribution(campaign)
    trackChecklistEvent(campaign, 'view')
  }, [campaign])

  const update = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = event.target instanceof HTMLInputElement && event.target.type === 'checkbox'
      ? event.target.checked
      : field === 'telefone'
        ? formatPhoneBR(event.target.value)
        : field === 'arquivo' && event.target instanceof HTMLInputElement
          ? event.target.files?.[0] || null
          : event.target.value
    setData((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => {
      if (!previous[field]) return previous
      const next = { ...previous }
      delete next[field]
      return next
    })
  }

  const validateClient = (): FieldErrors => {
    const next: FieldErrors = {}
    if (!data.nome.trim() || !data.nome.trim().includes(' ')) next.nome = 'Informe seu nome e sobrenome.'
    if (!isValidEmail(data.email.trim())) next.email = 'Informe um e-mail válido.'
    if (data.telefone.replace(/\D/g, '').length < 10) next.telefone = 'Informe um telefone válido.'
    if (!data.empresa.trim()) next.empresa = 'Informe o nome da empresa.'
    if (!data.cargo.trim()) next.cargo = 'Informe seu cargo.'
    if (!data.cidade.trim()) next.cidade = 'Informe sua cidade.'
    if (!data.estado) next.estado = 'Selecione seu estado.'
    if (!data.investimento) next.investimento = 'Selecione uma faixa de investimento.'
    if (!data.preocupacao.trim()) next.preocupacao = 'Informe sua principal preocupação ou dúvida.'
    if (campaign === 'checklist_expansao_rede') {
      if (!data.tipoExpansao) next.tipoExpansao = 'Selecione o tipo de expansão.'
      if (!data.dataInicio) next.dataInicio = 'Informe a data prevista para o início.'
    } else {
      if (!data.tipoProjeto) next.tipoProjeto = 'Selecione o tipo de projeto.'
      if (!data.etapaContratacao) next.etapaContratacao = 'Selecione a etapa atual.'
      if (!data.prazoContratacao.trim()) next.prazoContratacao = 'Informe o prazo previsto para contratação.'
    }
    if (!data.consentimento) next.consentimento = 'É necessário aceitar o consentimento.'
    return next
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submittingRef.current || sending) return
    setFormError(null)
    const clientErrors = validateClient()
    if (Object.keys(clientErrors).length) {
      setErrors(clientErrors)
      return
    }
    submittingRef.current = true
    setSending(true)
    setErrors({})
    const form = new FormData()
    const payload: Record<string, string> = {
      campanha: campaign,
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      empresa: data.empresa,
      cargo: data.cargo,
      cidade: data.cidade,
      estado: data.estado,
      investimento: data.investimento,
      preocupacao: data.preocupacao,
      consentimento: String(data.consentimento),
      website: data.website,
      eventId: newId(),
      submissionId: newId(),
      ...getAttribution(campaign),
      paginaOrigem: window.location.href,
      referrer: document.referrer,
    }
    if (campaign === 'checklist_expansao_rede') {
      payload.tipoExpansao = data.tipoExpansao
      payload.dataInicio = data.dataInicio
    } else {
      payload.tipoProjeto = data.tipoProjeto
      payload.etapaContratacao = data.etapaContratacao
      payload.prazoContratacao = data.prazoContratacao
    }
    Object.entries(payload).forEach(([key, value]) => form.append(key, value))
    if (data.arquivo) form.append('arquivo', data.arquivo)

    try {
      const response = await fetch('/api/leads/checklists', { method: 'POST', body: form })
      const json = (await response.json().catch(() => null)) as {
        ok?: boolean; emailAccepted?: boolean; message?: string; errors?: FieldErrors; downloadUrl?: string
      } | null
      if (!response.ok || !json?.ok || json.emailAccepted !== true) {
        if (json?.errors) setErrors(json.errors)
        setFormError(json?.message || 'Não foi possível liberar o material neste momento. Tente novamente.')
        return
      }
      trackChecklistEvent(campaign, 'submit')
      setDownloadUrl(json.downloadUrl || `/api/checklists/${campaign}/download`)
      setSuccess(true)
    } catch {
      setFormError('Não foi possível liberar o material neste momento. Verifique sua conexão e tente novamente.')
    } finally {
      setSending(false)
      submittingRef.current = false
    }
  }

  if (success) {
    return (
      <section className="relative rounded-2xl border border-[#F35901]/50 bg-[#101111] p-6 sm:p-8 lg:p-10" aria-live="polite">
        <div className="w-12 h-12 rounded-full bg-[#F35901]/15 border border-[#F35901]/40 flex items-center justify-center text-[#F35901] text-2xl">✓</div>
        <h2 className="font-roboto font-bold text-white text-[28px] mt-6 tracking-[-0.03em]">Seu checklist está pronto.</h2>
        <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.65] mt-4">{config.successMessage}</p>
        <div className="flex flex-col gap-3 mt-8">
          <a href={downloadUrl} download={config.downloadFilename} onClick={() => trackChecklistEvent(campaign, 'download')} className="inline-flex items-center justify-center gap-3 bg-[#F35901] hover:bg-[#d94e00] rounded-[14px] px-5 py-4 font-sora text-[13px] font-semibold tracking-[0.02em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]">
            {config.downloadLabel}
          </a>
          <a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackChecklistEvent(campaign, 'whatsapp')} className="inline-flex items-center justify-center border border-[#343536] hover:border-[#F35901] rounded-[14px] px-5 py-4 font-sora text-[13px] font-semibold tracking-[0.02em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]">
            AGENDAR REUNIÃO COM A SULTEC
          </a>
        </div>
      </section>
    )
  }

  const fieldErrorId = (field: string) => `${formId}-${field}-error`
  return (
    <form onSubmit={handleSubmit} noValidate onFocus={() => { if (!startedRef.current) { startedRef.current = true; trackChecklistEvent(campaign, 'start') } }} aria-busy={sending} className="relative bg-[#101111] border border-[#252526] rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col gap-4 shadow-2xl shadow-black/20">
      <div>
        <p className="font-sora text-[#F35901] text-[11px] uppercase tracking-[0.16em]">Acesso imediato</p>
        <h2 className="font-roboto font-bold text-white text-[24px] mt-2 tracking-[-0.03em]">{config.formTitle}</h2>
        <p className="font-sora text-[#898A89] text-[13px] leading-[1.55] mt-2">{config.formSupport}</p>
        <p className="font-sora text-[#898A89] text-[12px] mt-2">Todos os campos marcados com <span className="text-[#F35901]">*</span> são obrigatórios.</p>
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true"><label htmlFor={`${formId}-website`}>Website</label><input id={`${formId}-website`} value={data.website} onChange={update('website')} tabIndex={-1} autoComplete="off" /></div>

      <Field label="Nome e sobrenome" id={`${formId}-nome`} error={errors.nome} errorId={fieldErrorId('nome')}><input id={`${formId}-nome`} value={data.nome} onChange={update('nome')} autoComplete="name" className={inputClass(!!errors.nome)} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? fieldErrorId('nome') : undefined} /></Field>
      <Field label="E-mail corporativo" id={`${formId}-email`} error={errors.email} errorId={fieldErrorId('email')}><input id={`${formId}-email`} type="email" inputMode="email" value={data.email} onChange={update('email')} autoComplete="email" className={inputClass(!!errors.email)} aria-invalid={!!errors.email} aria-describedby={errors.email ? fieldErrorId('email') : undefined} /></Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Telefone/WhatsApp" id={`${formId}-telefone`} error={errors.telefone} errorId={fieldErrorId('telefone')}><input id={`${formId}-telefone`} type="tel" inputMode="tel" value={data.telefone} onChange={update('telefone')} autoComplete="tel" placeholder="(00) 00000-0000" className={inputClass(!!errors.telefone)} aria-invalid={!!errors.telefone} aria-describedby={errors.telefone ? fieldErrorId('telefone') : undefined} /></Field>
        <Field label="Empresa" id={`${formId}-empresa`} error={errors.empresa} errorId={fieldErrorId('empresa')}><input id={`${formId}-empresa`} value={data.empresa} onChange={update('empresa')} autoComplete="organization" className={inputClass(!!errors.empresa)} aria-invalid={!!errors.empresa} aria-describedby={errors.empresa ? fieldErrorId('empresa') : undefined} /></Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Cargo" id={`${formId}-cargo`} error={errors.cargo} errorId={fieldErrorId('cargo')}><input id={`${formId}-cargo`} value={data.cargo} onChange={update('cargo')} autoComplete="organization-title" className={inputClass(!!errors.cargo)} aria-invalid={!!errors.cargo} aria-describedby={errors.cargo ? fieldErrorId('cargo') : undefined} /></Field>
        <Field label="Cidade" id={`${formId}-cidade`} error={errors.cidade} errorId={fieldErrorId('cidade')}><input id={`${formId}-cidade`} value={data.cidade} onChange={update('cidade')} autoComplete="address-level2" className={inputClass(!!errors.cidade)} aria-invalid={!!errors.cidade} aria-describedby={errors.cidade ? fieldErrorId('cidade') : undefined} /></Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Estado" id={`${formId}-estado`} error={errors.estado} errorId={fieldErrorId('estado')}><select id={`${formId}-estado`} value={data.estado} onChange={update('estado')} className={inputClass(!!errors.estado)} aria-invalid={!!errors.estado}><option value="">Selecione…</option>{STATE_OPTIONS.map((state) => <option key={state} value={state}>{state}</option>)}</select></Field>
        <Field label="Faixa de investimento prevista" id={`${formId}-investimento`} error={errors.investimento} errorId={fieldErrorId('investimento')}><select id={`${formId}-investimento`} value={data.investimento} onChange={update('investimento')} className={inputClass(!!errors.investimento)} aria-invalid={!!errors.investimento}><option value="">Selecione…</option>{INVESTMENT_RANGES.map((option) => <option key={option} value={option}>{option}</option>)}</select></Field>
      </div>

      {campaign === 'checklist_expansao_rede' ? <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Field label="Tipo de expansão" id={`${formId}-tipo-expansao`} error={errors.tipoExpansao} errorId={fieldErrorId('tipoExpansao')}><select id={`${formId}-tipo-expansao`} value={data.tipoExpansao} onChange={update('tipoExpansao')} className={inputClass(!!errors.tipoExpansao)} aria-invalid={!!errors.tipoExpansao}><option value="">Selecione…</option>{EXPANSION_TYPES.map((option) => <option key={option} value={option}>{option}</option>)}</select></Field><Field label="Início da nova operação" id={`${formId}-data-inicio`} error={errors.dataInicio} errorId={fieldErrorId('dataInicio')}><input id={`${formId}-data-inicio`} type="date" value={data.dataInicio} onChange={update('dataInicio')} className={inputClass(!!errors.dataInicio)} aria-invalid={!!errors.dataInicio} /></Field></div> : <><Field label="Tipo de projeto de infraestrutura" id={`${formId}-tipo-projeto`} error={errors.tipoProjeto} errorId={fieldErrorId('tipoProjeto')}><select id={`${formId}-tipo-projeto`} value={data.tipoProjeto} onChange={update('tipoProjeto')} className={inputClass(!!errors.tipoProjeto)} aria-invalid={!!errors.tipoProjeto}><option value="">Selecione…</option>{PROJECT_TYPES.map((option) => <option key={option} value={option}>{option}</option>)}</select></Field><Field label="Etapa atual da contratação" id={`${formId}-etapa`} error={errors.etapaContratacao} errorId={fieldErrorId('etapaContratacao')}><select id={`${formId}-etapa`} value={data.etapaContratacao} onChange={update('etapaContratacao')} className={inputClass(!!errors.etapaContratacao)} aria-invalid={!!errors.etapaContratacao}><option value="">Selecione…</option>{CONTRACT_STAGES.map((option) => <option key={option} value={option}>{option}</option>)}</select></Field><Field label="Prazo previsto para contratação" id={`${formId}-prazo`} error={errors.prazoContratacao} errorId={fieldErrorId('prazoContratacao')}><input id={`${formId}-prazo`} value={data.prazoContratacao} onChange={update('prazoContratacao')} placeholder="Ex.: nos próximos 60 dias" className={inputClass(!!errors.prazoContratacao)} aria-invalid={!!errors.prazoContratacao} /></Field><Field label="Escopo, orçamento ou proposta" id={`${formId}-arquivo`} required={false} error={errors.arquivo} errorId={fieldErrorId('arquivo')} hint="opcional · até 4 MB"><input id={`${formId}-arquivo`} type="file" accept=".pdf,.docx,.xlsx,.jpg,.jpeg,.png" onChange={update('arquivo')} className="block w-full text-[13px] text-[#ABADAB] file:mr-3 file:rounded-lg file:border-0 file:bg-[#F35901]/15 file:px-3 file:py-2 file:text-[#F35901] file:font-sora file:text-[12px]" aria-invalid={!!errors.arquivo} /><p className="font-sora text-[#666867] text-[11px] mt-1">PDF, DOCX, XLSX, JPG ou PNG.</p></Field></>}

      <Field label={campaign === 'checklist_expansao_rede' ? 'Principal preocupação técnica' : 'Principal dúvida ou risco percebido'} id={`${formId}-preocupacao`} error={errors.preocupacao} errorId={fieldErrorId('preocupacao')}><textarea id={`${formId}-preocupacao`} rows={3} value={data.preocupacao} onChange={update('preocupacao')} className={`${inputClass(!!errors.preocupacao)} resize-y`} aria-invalid={!!errors.preocupacao} aria-describedby={errors.preocupacao ? fieldErrorId('preocupacao') : undefined} /></Field>

      <label className="flex items-start gap-3 pt-3 border-t border-[#252526] cursor-pointer"><input type="checkbox" checked={data.consentimento} onChange={update('consentimento')} className="mt-1 accent-[#F35901] shrink-0" aria-invalid={!!errors.consentimento} /><span className="font-sora text-[#ABADAB] text-[12px] leading-[1.55]">{CHECKLIST_AUTH_TEXT} <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-2">Ler política</a> <span className="text-[#F35901]">*</span></span></label>
      {errors.consentimento && <p role="alert" className="font-sora text-[12px] text-red-400">{errors.consentimento}</p>}
      {formError && <p role="alert" className="font-sora text-[13px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{formError}</p>}
      <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-3 bg-[#F35901] hover:bg-[#d94e00] disabled:opacity-60 disabled:cursor-not-allowed rounded-[14px] px-5 py-4 font-sora text-[13px] font-semibold uppercase tracking-[0.04em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]">{sending ? 'Enviando…' : 'Acessar o checklist'}{!sending && <span aria-hidden>→</span>}</button>
    </form>
  )
}

function Field({ label, id, required = true, error, errorId, hint, children }: { label: string; id: string; required?: boolean; error?: string; errorId: string; hint?: string; children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5"><label htmlFor={id} className="font-sora text-[#ABADAB] text-[12px]">{label} {required && <span className="text-[#F35901]">*</span>}{hint && <span className="text-[#666867]"> · {hint}</span>}</label>{children}{error && <p id={errorId} role="alert" className="font-sora text-[11px] text-red-400">{error}</p>}</div>
}

function inputClass(hasError: boolean) {
  return `w-full bg-[#080909] border ${hasError ? 'border-red-400' : 'border-[#303132]'} focus:border-[#F35901] focus:outline-none rounded-[10px] px-3.5 py-3 font-sora text-white text-[13px] placeholder:text-[#666867] transition-colors`
}
