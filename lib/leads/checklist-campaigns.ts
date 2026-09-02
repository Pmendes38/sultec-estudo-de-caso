export const CHECKLIST_AUTH_TEXT =
  'Autorizo a Sultec a utilizar os dados informados para disponibilizar o material e entrar em contato sobre esta solicitação, conforme sua Política de Privacidade.'

export const CHECKLIST_AUTH_VERSION = 'v1_2026-09'
export const CHECKLIST_UPLOAD_MAX_BYTES = 4 * 1024 * 1024

export const STATE_OPTIONS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
] as const

export const EXPANSION_TYPES = [
  'Ampliação de área',
  'Nova unidade',
  'Nova linha de produção',
  'Aumento da equipe',
  'Instalação de equipamentos',
  'Ampliação de CFTV',
  'Ampliação de Wi-Fi',
  'Outro',
] as const

export const INVESTMENT_RANGES = [
  'Ainda não definido',
  'Até R$ 20 mil',
  'De R$ 20 mil a R$ 50 mil',
  'De R$ 50 mil a R$ 100 mil',
  'De R$ 100 mil a R$ 250 mil',
  'Acima de R$ 250 mil',
] as const

export const PROJECT_TYPES = [
  'Cabeamento estruturado',
  'Certificação de rede',
  'Infraestrutura de Wi-Fi',
  'Fibra óptica',
  'CFTV',
  'Data Center ou sala técnica',
  'Projeto integrado com mais de uma solução',
  'Outro',
] as const

export const CONTRACT_STAGES = [
  'Levantamento da necessidade',
  'Preparação do escopo',
  'Solicitação de propostas',
  'Comparação de orçamentos',
  'Negociação com fornecedores',
  'Projeto aprovado',
  'Contratação imediata',
] as const

export type ChecklistCampaign = 'checklist_expansao_rede' | 'checklist_custos_ocultos'
export type FieldErrors = Partial<Record<string, string>>

export const CAMPAIGNS: Record<ChecklistCampaign, {
  path: string
  title: string
  formTitle: string
  formSupport: string
  subject: string
  materialLabel: string
  contentName: string
  successMessage: string
  downloadLabel: string
  downloadFilename: string
  privateFilename: string
  whatsappUrl: string
  eventPrefix: 'expansao' | 'custos'
}> = {
  checklist_expansao_rede: {
    path: '/checklist-expansao-rede',
    title: 'Checklist de Expansão de Rede',
    formTitle: 'Acesse o Checklist de Expansão',
    formSupport: 'Preencha seus dados para acessar imediatamente o Checklist de Expansão de Rede.',
    subject: '[Novo lead] Checklist de Expansão de Rede',
    materialLabel: 'CHECKLIST GRATUITO DE EXPANSÃO DE REDE',
    contentName: 'Checklist de Expansão de Rede',
    successMessage:
      'Use o material para identificar pontos que podem limitar ou atrasar a expansão da sua empresa. Se quiser analisar os alertas encontrados com a Sultec, agende uma conversa com nossa equipe.',
    downloadLabel: 'BAIXAR CHECKLIST DE EXPANSÃO',
    downloadFilename: 'Sultec_Checklist_Expansao_Rede.pdf',
    privateFilename: 'Sultec_Checklist_Expansao_Rede.pdf',
    whatsappUrl:
      'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20acessei%20o%20Checklist%20de%20Expans%C3%A3o%20de%20Rede%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Sultec.',
    eventPrefix: 'expansao',
  },
  checklist_custos_ocultos: {
    path: '/checklist-custos-ocultos',
    title: 'Checklist de Custos Ocultos',
    formTitle: 'Revise seu projeto antes de assinar',
    formSupport: 'Preencha seus dados para acessar o Checklist de Custos Ocultos e revisar seu projeto antes da assinatura.',
    subject: '[Novo lead] Checklist de Custos Ocultos',
    materialLabel: 'CHECKLIST GRATUITO PARA REVISÃO DE PROJETOS',
    contentName: 'Checklist de Custos Ocultos',
    successMessage:
      'Use o material para identificar lacunas antes de comparar propostas ou assinar o contrato. Se quiser revisar os pontos encontrados com a Sultec, agende uma conversa com nossa equipe.',
    downloadLabel: 'BAIXAR CHECKLIST DE CUSTOS OCULTOS',
    downloadFilename: 'Sultec_Checklist_Custos_Ocultos.pdf',
    privateFilename: 'Sultec_Checklist_Custos_Ocultos.pdf',
    whatsappUrl:
      'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20acessei%20o%20Checklist%20de%20Custos%20Ocultos%20e%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Sultec.',
    eventPrefix: 'custos',
  },
}

export type ChecklistLeadRecord = {
  campanha: ChecklistCampaign
  nome: string
  email: string
  telefone: string
  empresa: string
  cargo: string
  cidade: string
  estado: string
  investimento: string
  preocupacao: string
  eventId: string
  submissionId: string
  paginaOrigem?: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  enviadoEm: string
  tipoExpansao?: string
  dataInicio?: string
  tipoProjeto?: string
  etapaContratacao?: string
  prazoContratacao?: string
  uploadNome?: string
  uploadTamanho?: number
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_RE.test(value)
}

export function formatPhoneBR(raw: string): string {
  const cleaned = raw.replace(/[^\d+]/g, '')
  if (cleaned.startsWith('+') && !cleaned.startsWith('+55')) return cleaned.slice(0, 16)
  let digits = cleaned.replace(/\D/g, '')
  if (digits.startsWith('55') && digits.length > 11) digits = digits.slice(2)
  digits = digits.slice(0, 11)
  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function clean(value: unknown, max = 240): string {
  if (typeof value !== 'string') return ''
  return value.replace(/[\r\n\0]/g, ' ').trim().slice(0, max)
}

function isOneOf(value: string, options: readonly string[]): boolean {
  return options.includes(value)
}

function isValidDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`))
}

function digits(value: string): number {
  return value.replace(/\D/g, '').length
}

export function validateChecklistLead(
  input: Record<string, unknown>,
): { ok: true; data: ChecklistLeadRecord } | { ok: false; errors: FieldErrors; message: string } {
  const campanha = clean(input.campanha, 60) as ChecklistCampaign
  const errors: FieldErrors = {}
  const isExpansion = campanha === 'checklist_expansao_rede'
  const isCosts = campanha === 'checklist_custos_ocultos'

  if (!isExpansion && !isCosts) errors.campanha = 'Campanha inválida.'

  const nome = clean(input.nome, 120)
  const email = clean(input.email, 254).toLowerCase()
  const telefone = clean(input.telefone, 40)
  const empresa = clean(input.empresa, 160)
  const cargo = clean(input.cargo, 100)
  const cidade = clean(input.cidade, 100)
  const estado = clean(input.estado, 2).toUpperCase()
  const investimento = clean(input.investimento, 80)
  const preocupacao = clean(input.preocupacao, 1000)
  const eventId = clean(input.eventId, 100)
  const submissionId = clean(input.submissionId, 100)

  if (nome.length < 2 || !nome.includes(' ')) errors.nome = 'Informe seu nome e sobrenome.'
  if (!isValidEmail(email)) errors.email = 'Informe um e-mail válido.'
  if (digits(telefone) < 10 || digits(telefone) > 15) errors.telefone = 'Informe um telefone válido.'
  if (!empresa) errors.empresa = 'Informe o nome da empresa.'
  if (!cargo) errors.cargo = 'Informe seu cargo.'
  if (!cidade) errors.cidade = 'Informe sua cidade.'
  if (!isOneOf(estado, STATE_OPTIONS)) errors.estado = 'Selecione seu estado.'
  if (!isOneOf(investimento, INVESTMENT_RANGES)) errors.investimento = 'Selecione uma faixa de investimento.'
  if (!preocupacao) errors.preocupacao = 'Informe sua principal preocupação ou dúvida.'
  if (isExpansion) {
    const tipoExpansao = clean(input.tipoExpansao, 100)
    const dataInicio = clean(input.dataInicio, 10)
    if (!isOneOf(tipoExpansao, EXPANSION_TYPES)) errors.tipoExpansao = 'Selecione o tipo de expansão.'
    if (!isValidDate(dataInicio)) errors.dataInicio = 'Informe a data prevista para o início.'
  }
  if (isCosts) {
    const tipoProjeto = clean(input.tipoProjeto, 120)
    const etapaContratacao = clean(input.etapaContratacao, 100)
    const prazoContratacao = clean(input.prazoContratacao, 160)
    if (!isOneOf(tipoProjeto, PROJECT_TYPES)) errors.tipoProjeto = 'Selecione o tipo de projeto.'
    if (!isOneOf(etapaContratacao, CONTRACT_STAGES)) errors.etapaContratacao = 'Selecione a etapa atual.'
    if (!prazoContratacao) errors.prazoContratacao = 'Informe o prazo previsto para contratação.'
  }
  if (input.consentimento !== true) errors.consentimento = 'É necessário aceitar o consentimento.'
  if (!eventId) errors.eventId = 'Identificador de evento ausente.'
  if (!submissionId) errors.submissionId = 'Identificador de envio ausente.'

  if (Object.keys(errors).length) {
    return { ok: false, errors, message: 'Verifique os campos destacados e tente novamente.' }
  }

  return {
    ok: true,
    data: {
      campanha,
      nome,
      email,
      telefone,
      empresa,
      cargo,
      cidade,
      estado,
      investimento,
      preocupacao,
      eventId,
      submissionId,
      paginaOrigem: clean(input.paginaOrigem, 500) || undefined,
      referrer: clean(input.referrer, 500) || undefined,
      utm_source: clean(input.utm_source, 120) || undefined,
      utm_medium: clean(input.utm_medium, 120) || undefined,
      utm_campaign: clean(input.utm_campaign, 160) || undefined,
      utm_content: clean(input.utm_content, 160) || undefined,
      utm_term: clean(input.utm_term, 160) || undefined,
      enviadoEm: new Date().toISOString(),
      ...(isExpansion
        ? { tipoExpansao: clean(input.tipoExpansao, 100), dataInicio: clean(input.dataInicio, 10) }
        : {
            tipoProjeto: clean(input.tipoProjeto, 120),
            etapaContratacao: clean(input.etapaContratacao, 100),
            prazoContratacao: clean(input.prazoContratacao, 160),
          }),
    },
  }
}

export function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n\0]/g, ' ').replace(/\s+/g, ' ').trim()
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildChecklistLeadEmailText(
  lead: ChecklistLeadRecord,
  attachment?: { name: string; size: number },
): string {
  const campaign = CAMPAIGNS[lead.campanha]
  const lines = [
    `NOVO LEAD — ${campaign.title.toUpperCase()}`,
    '',
    'DADOS DO CONTATO',
    '',
    `Nome: ${lead.nome}`,
    `E-mail corporativo: ${lead.email}`,
    `Telefone/WhatsApp: ${lead.telefone}`,
    `Empresa: ${lead.empresa}`,
    `Cargo: ${lead.cargo}`,
    `Cidade/UF: ${lead.cidade}/${lead.estado}`,
    '',
    'CONTEXTO DA CAMPANHA',
    '',
    `Faixa de investimento: ${lead.investimento}`,
    `Principal preocupação/dúvida: ${lead.preocupacao}`,
  ]
  if (lead.campanha === 'checklist_expansao_rede') {
    lines.push(`Tipo de expansão: ${lead.tipoExpansao}`, `Início da nova operação: ${lead.dataInicio}`)
  } else {
    lines.push(
      `Tipo de projeto: ${lead.tipoProjeto}`,
      `Etapa atual: ${lead.etapaContratacao}`,
      `Prazo de contratação: ${lead.prazoContratacao}`,
      `Arquivo anexado: ${attachment ? `${attachment.name} (${attachment.size} bytes)` : 'Não enviado'}`,
    )
  }
  lines.push(
    '',
    'ORIGEM',
    '',
    `Campanha: ${lead.campanha}`,
    `Página: ${campaign.path}`,
    `Página de origem: ${lead.paginaOrigem || 'Não informado'}`,
    `Referrer: ${lead.referrer || 'Não informado'}`,
    `UTM source: ${lead.utm_source || 'Não informado'}`,
    `UTM medium: ${lead.utm_medium || 'Não informado'}`,
    `UTM campaign: ${lead.utm_campaign || 'Não informado'}`,
    `UTM content: ${lead.utm_content || 'Não informado'}`,
    `UTM term: ${lead.utm_term || 'Não informado'}`,
    '',
    `Consentimento: Autorizado (${CHECKLIST_AUTH_VERSION})`,
    `Recebido em: ${lead.enviadoEm}`,
  )
  return lines.join('\n')
}

function emailRow(label: string, value: string): string {
  return `<tr><td style="padding:5px 0;color:#666;font-size:13px;width:190px;vertical-align:top">${escapeHtml(label)}</td><td style="padding:5px 0;color:#111;font-size:14px;vertical-align:top">${escapeHtml(value)}</td></tr>`
}

export function buildChecklistLeadEmailHtml(
  lead: ChecklistLeadRecord,
  attachment?: { name: string; size: number },
): string {
  const campaign = CAMPAIGNS[lead.campanha]
  const context = lead.campanha === 'checklist_expansao_rede'
    ? [
        emailRow('Tipo de expansão', lead.tipoExpansao || ''),
        emailRow('Início da nova operação', lead.dataInicio || ''),
      ]
    : [
        emailRow('Tipo de projeto', lead.tipoProjeto || ''),
        emailRow('Etapa atual', lead.etapaContratacao || ''),
        emailRow('Prazo de contratação', lead.prazoContratacao || ''),
        emailRow('Arquivo anexado', attachment ? `${attachment.name} (${attachment.size} bytes)` : 'Não enviado'),
      ]
  return `<!doctype html><html lang="pt-BR"><body style="margin:0;padding:24px;background:#f4f4f4;font-family:Arial,sans-serif"><table role="presentation" width="100%" style="max-width:680px;margin:auto;background:#fff;border:1px solid #e5e5e5"><tr><td style="padding:22px 26px;background:#0b0b0b;color:#fff"><div style="color:#f35901;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Sultec · novo lead</div><h1 style="font-size:20px;margin:8px 0 0">${escapeHtml(campaign.title)}</h1></td></tr><tr><td style="padding:26px"><h2 style="font-size:14px;color:#111">DADOS DO CONTATO</h2><table role="presentation" width="100%">${emailRow('Nome', lead.nome)}${emailRow('E-mail corporativo', lead.email)}${emailRow('Telefone/WhatsApp', lead.telefone)}${emailRow('Empresa', lead.empresa)}${emailRow('Cargo', lead.cargo)}${emailRow('Cidade/UF', `${lead.cidade}/${lead.estado}`)}</table><h2 style="font-size:14px;color:#111;margin-top:24px">CONTEXTO DA CAMPANHA</h2><table role="presentation" width="100%">${emailRow('Faixa de investimento', lead.investimento)}${emailRow('Principal preocupação/dúvida', lead.preocupacao)}${context.join('')}</table><h2 style="font-size:14px;color:#111;margin-top:24px">ORIGEM</h2><table role="presentation" width="100%">${emailRow('Campanha', lead.campanha)}${emailRow('Página', campaign.path)}${emailRow('Página de origem', lead.paginaOrigem || 'Não informado')}${emailRow('Referrer', lead.referrer || 'Não informado')}${emailRow('UTM source', lead.utm_source || 'Não informado')}${emailRow('UTM medium', lead.utm_medium || 'Não informado')}${emailRow('UTM campaign', lead.utm_campaign || 'Não informado')}${emailRow('UTM content', lead.utm_content || 'Não informado')}${emailRow('UTM term', lead.utm_term || 'Não informado')}</table><p style="margin-top:24px;font-size:13px;color:#555">Consentimento autorizado · ${CHECKLIST_AUTH_VERSION} · ${escapeHtml(lead.enviadoEm)}</p></td></tr></table></body></html>`
}

export function getCampaign(value: string): ChecklistCampaign | null {
  return value in CAMPAIGNS ? (value as ChecklistCampaign) : null
}
