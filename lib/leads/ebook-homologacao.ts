export const EBOOK_CAMPAIGN_ID = 'ebook_homologacao_fornecedores'
export const EBOOK_AUTH_VERSION = 'v1_2026-07'
export const EBOOK_CONTENT_NAME = 'Checklist de Homologação de Fornecedores'
export const EBOOK_CONTENT_CATEGORY = 'E-book técnico'
export const EBOOK_PDF_PATH =
  '/materiais/checklist-homologacao-fornecedores-cabeamento-sultec.pdf'
export const EBOOK_PDF_FILENAME =
  'checklist-homologacao-fornecedores-cabeamento-sultec.pdf'
export const EBOOK_ACCESS_STORAGE_KEY = 'sultec_ebook_homologacao_access'
export const EBOOK_ORIGIN_LABEL = 'E-book: Homologação de Fornecedores'
export const EBOOK_CAPTURE_PATH = '/materiais/checklist-homologacao'

/** Textos exibidos no formulário. Devem corresponder à versão registrada no servidor. */
export const EBOOK_AUTH_TEXT_MATERIAL =
  'Li a Política de Privacidade e autorizo o tratamento dos meus dados para disponibilização do material solicitado.'
export const EBOOK_AUTH_TEXT_COMMERCIAL =
  'Também aceito receber contatos da Sultec sobre projetos, serviços e conteúdos relacionados.'

export const CARGO_OPTIONS = [
  'Tecnologia da Informação',
  'Infraestrutura',
  'Engenharia',
  'Compras ou Suprimentos',
  'Facilities ou Operações',
  'Diretoria ou Gestão',
  'Outra',
] as const

export const SITUACAO_OPTIONS = [
  'Estamos planejando um novo projeto',
  'Estamos procurando fornecedores',
  'Estamos comparando propostas',
  'Temos uma obra em andamento',
  'Precisamos avaliar ou modernizar a infraestrutura existente',
  'Estou apenas buscando informações',
] as const

export type CargoOption = (typeof CARGO_OPTIONS)[number]
export type SituacaoOption = (typeof SITUACAO_OPTIONS)[number]

export type EbookLeadPayload = {
  nome: string
  email: string
  empresa: string
  cargo: string
  situacao: string
  telefone?: string
  autorizacaoMaterial: boolean
  autorizacaoComercial: boolean
  /** Honeypot. Deve permanecer vazio */
  website?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  fbclid?: string
  paginaOrigem?: string
  referrer?: string
  eventId: string
  submissionId: string
}

export type EbookLeadRecord = EbookLeadPayload & {
  campanha: typeof EBOOK_CAMPAIGN_ID
  origem: typeof EBOOK_ORIGIN_LABEL
  versaoAutorizacao: typeof EBOOK_AUTH_VERSION
  enviadoEm: string
}

export type FieldErrors = Partial<Record<keyof EbookLeadPayload, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

function trimStr(value: unknown, max = 200): string {
  if (typeof value !== 'string') return ''
  // Remove CR/LF para evitar injeção em e-mails/logs
  return value.replace(/[\r\n\0]/g, ' ').trim().slice(0, max)
}

function sanitizePhone(value: string): string {
  return value.replace(/[^\d+\s()-]/g, '').trim().slice(0, 30)
}

export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false
  return EMAIL_RE.test(email)
}

/** Formatação BR progressiva; não bloqueia números internacionais (+…). */
export function formatPhoneBR(raw: string): string {
  const cleaned = raw.replace(/[^\d+]/g, '')
  if (cleaned.startsWith('+') && !cleaned.startsWith('+55')) {
    return cleaned.slice(0, 16)
  }

  let digits = cleaned.replace(/\D/g, '')
  if (digits.startsWith('55') && digits.length > 11) {
    digits = digits.slice(2)
  }
  digits = digits.slice(0, 11)

  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function validateEbookLead(
  input: unknown,
): { ok: true; data: EbookLeadRecord } | { ok: false; errors: FieldErrors; message: string } {
  const body = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  const errors: FieldErrors = {}

  const nome = trimStr(body.nome, 120)
  const email = trimStr(body.email, 254).toLowerCase()
  const empresa = trimStr(body.empresa, 160)
  const cargo = trimStr(body.cargo, 80)
  const situacao = trimStr(body.situacao, 160)
  const telefone = sanitizePhone(trimStr(body.telefone, 40))
  const website = trimStr(body.website, 200)
  const eventId = trimStr(body.eventId, 80)
  const submissionId = trimStr(body.submissionId, 80)

  if (!nome || nome.length < 2) errors.nome = 'Informe seu nome completo.'
  if (!email) errors.email = 'Informe seu e-mail profissional.'
  else if (!isValidEmail(email)) errors.email = 'Informe um e-mail válido.'
  if (!empresa) errors.empresa = 'Informe o nome da empresa.'
  if (!cargo || !(CARGO_OPTIONS as readonly string[]).includes(cargo)) {
    errors.cargo = 'Selecione seu cargo ou área de atuação.'
  }
  if (!situacao || !(SITUACAO_OPTIONS as readonly string[]).includes(situacao)) {
    errors.situacao = 'Selecione a situação atual da empresa.'
  }
  if (body.autorizacaoMaterial !== true) {
    errors.autorizacaoMaterial =
      'É necessário autorizar o tratamento dos dados para liberar o material.'
  }
  if (!eventId) errors.eventId = 'Identificador de evento ausente.'
  if (!submissionId) errors.submissionId = 'Identificador de envio ausente.'

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: 'Verifique os campos destacados e tente novamente.',
    }
  }

  // Honeypot preenchido = bot; trata como sucesso silencioso no handler
  const data: EbookLeadRecord = {
    nome,
    email,
    empresa,
    cargo,
    situacao,
    telefone: telefone || undefined,
    autorizacaoMaterial: true,
    autorizacaoComercial: body.autorizacaoComercial === true,
    website: website || undefined,
    utm_source: trimStr(body.utm_source, 120) || undefined,
    utm_medium: trimStr(body.utm_medium, 120) || undefined,
    utm_campaign: trimStr(body.utm_campaign, 160) || undefined,
    utm_content: trimStr(body.utm_content, 160) || undefined,
    utm_term: trimStr(body.utm_term, 160) || undefined,
    fbclid: trimStr(body.fbclid, 200) || undefined,
    paginaOrigem: trimStr(body.paginaOrigem, 500) || undefined,
    referrer: trimStr(body.referrer, 500) || undefined,
    eventId,
    submissionId,
    campanha: EBOOK_CAMPAIGN_ID,
    origem: EBOOK_ORIGIN_LABEL,
    versaoAutorizacao: EBOOK_AUTH_VERSION,
    enviadoEm: new Date().toISOString(),
  }

  return { ok: true, data }
}

export function buildAccessUrl(searchParams?: URLSearchParams | string): string {
  const base = '/materiais/checklist-homologacao/acesso'
  const params =
    typeof searchParams === 'string'
      ? new URLSearchParams(searchParams)
      : searchParams
        ? new URLSearchParams(searchParams)
        : null

  if (!params) return base

  const keep = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid']
  const next = new URLSearchParams()
  for (const key of keep) {
    const value = params.get(key)
    if (value) next.set(key, value)
  }
  const qs = next.toString()
  return qs ? `${base}?${qs}` : base
}
