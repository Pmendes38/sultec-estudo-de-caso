/**
 * Testes da campanha Checklist Homologação.
 * Executar: npm test
 * Usa mock do Resend — não constitui envio real.
 */

import assert from 'node:assert/strict'
import { describe, it, afterEach } from 'node:test'
import {
  CARGO_OPTIONS,
  EBOOK_AUTH_VERSION,
  EBOOK_CAMPAIGN_ID,
  SITUACAO_OPTIONS,
  formatPhoneBR,
  isValidEmail,
  validateEbookLead,
} from './ebook-homologacao'
import {
  buildLeadEmailHtml,
  buildLeadEmailSubject,
  buildLeadEmailText,
  formatFromAddress,
  getLeadMailConfig,
  sanitizeHeaderValue,
  sendLeadEmailViaResend,
} from './ebook-email'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

function baseLead(overrides: Record<string, unknown> = {}) {
  return {
    nome: 'João da Silva',
    email: 'joao@empresa.com.br',
    empresa: 'Empresa Exemplo',
    cargo: 'Engenharia',
    situacao: 'Estamos comparando propostas',
    autorizacaoMaterial: true,
    autorizacaoComercial: false,
    website: '',
    utm_source: 'linkedin',
    utm_medium: 'organic_social',
    utm_campaign: 'ebook_homologacao_fornecedores',
    utm_content: 'arte_01',
    utm_term: 'cabeamento',
    fbclid: 'fb.abc',
    paginaOrigem:
      'https://sultectecnologia.com.br/materiais/checklist-homologacao?utm_source=linkedin&utm_medium=organic_social&utm_campaign=ebook_homologacao_fornecedores&utm_content=arte_01',
    referrer: 'https://www.linkedin.com/',
    eventId: 'evt_test_1',
    submissionId: 'sub_test_1',
    ...overrides,
  }
}

describe('validação de leads', () => {
  it('aceita payload válido', () => {
    const result = validateEbookLead(baseLead())
    assert.equal(result.ok, true)
    if (result.ok) {
      assert.equal(result.data.campanha, EBOOK_CAMPAIGN_ID)
      assert.equal(result.data.versaoAutorizacao, EBOOK_AUTH_VERSION)
      assert.equal(result.data.autorizacaoComercial, false)
    }
  })

  it('rejeita campos obrigatórios ausentes', () => {
    const result = validateEbookLead({})
    assert.equal(result.ok, false)
    if (!result.ok) {
      assert.ok(result.errors.nome)
      assert.ok(result.errors.email)
      assert.ok(result.errors.empresa)
      assert.ok(result.errors.cargo)
      assert.ok(result.errors.situacao)
      assert.ok(result.errors.autorizacaoMaterial)
    }
  })

  it('rejeita e-mail inválido', () => {
    const result = validateEbookLead(baseLead({ email: 'invalido' }))
    assert.equal(result.ok, false)
    if (!result.ok) assert.ok(result.errors.email)
  })

  it('sanitiza CR/LF em campos de texto', () => {
    const result = validateEbookLead(
      baseLead({ nome: 'João\r\nBcc: evil@x.com', utm_source: 'linkedin\ninject' }),
    )
    assert.equal(result.ok, true)
    if (result.ok) {
      assert.equal(result.data.nome.includes('\n'), false)
      assert.equal(result.data.utm_source?.includes('\n'), false)
    }
  })

  it('aceita telefone vazio', () => {
    const result = validateEbookLead(baseLead({ telefone: '' }))
    assert.equal(result.ok, true)
    if (result.ok) assert.equal(result.data.telefone, undefined)
  })

  it('registra consentimento comercial Sim e Não', () => {
    const sim = validateEbookLead(baseLead({ autorizacaoComercial: true }))
    const nao = validateEbookLead(baseLead({ autorizacaoComercial: false }))
    assert.equal(sim.ok && sim.data.autorizacaoComercial, true)
    assert.equal(nao.ok && nao.data.autorizacaoComercial, false)
  })

  it('isValidEmail e formatPhoneBR', () => {
    assert.equal(isValidEmail('a@b.com'), true)
    assert.equal(isValidEmail('x'), false)
    assert.ok(formatPhoneBR('49999999999').includes('49'))
  })

  it('opções de cargo e situação estão definidas', () => {
    assert.ok(CARGO_OPTIONS.length >= 5)
    assert.ok(SITUACAO_OPTIONS.length >= 5)
  })
})

describe('montagem de e-mail', () => {
  it('assunto correto', () => {
    const result = validateEbookLead(baseLead())
    assert.equal(result.ok, true)
    if (!result.ok) return
    assert.equal(
      buildLeadEmailSubject(result.data),
      '[Novo lead | E-book] Empresa Exemplo — João da Silva',
    )
  })

  it('texto e HTML com UTMs, FBCLID e autorizações', () => {
    const result = validateEbookLead(baseLead({ autorizacaoComercial: true, telefone: '(49) 99999-1111' }))
    assert.equal(result.ok, true)
    if (!result.ok) return
    const text = buildLeadEmailText(result.data)
    const html = buildLeadEmailHtml(result.data)
    assert.match(text, /Aceitou receber contatos comerciais: Sim/)
    assert.match(text, /UTM source: linkedin/)
    assert.match(text, /FBCLID: fb\.abc/)
    assert.match(text, /Telefone ou WhatsApp: \(49\) 99999-1111/)
    assert.match(html, /Autorizado/)
    assert.match(html, /&lt;|&gt;|João|Empresa Exemplo/)
    assert.equal(html.includes('<script>'), false)
  })

  it('omite telefone vazio e marca Não informado', () => {
    const result = validateEbookLead(baseLead({ telefone: '', utm_term: undefined }))
    assert.equal(result.ok, true)
    if (!result.ok) return
    // limpa utm_term
    const data = { ...result.data, utm_term: undefined }
    const text = buildLeadEmailText(data)
    assert.equal(text.includes('Telefone ou WhatsApp'), false)
    assert.match(text, /UTM term: Não informado/)
  })

  it('sanitizeHeaderValue remove quebras', () => {
    assert.equal(sanitizeHeaderValue('a\rb\nc').includes('\n'), false)
  })

  it('remetente montado a partir de nome + e-mail', () => {
    assert.equal(
      formatFromAddress({
        apiKey: 'x',
        to: 'comercial@sultectecnologia.com.br',
        fromEmail: 'formularios@sultectecnologia.com.br',
        fromName: 'Sultec Tecnologia',
      }),
      'Sultec Tecnologia <formularios@sultectecnologia.com.br>',
    )
  })
})

describe('configuração Resend', () => {
  const prev = { ...process.env }

  afterEach(() => {
    for (const key of Object.keys(process.env)) {
      if (!(key in prev)) delete process.env[key]
    }
    Object.assign(process.env, prev)
  })

  it('retorna null sem variáveis', () => {
    delete process.env.RESEND_API_KEY
    delete process.env.LEADS_RECIPIENT_EMAIL
    delete process.env.LEADS_FROM_EMAIL
    delete process.env.LEADS_FROM_NAME
    assert.equal(getLeadMailConfig({}), null)
  })

  it('exige FROM_NAME e e-mails válidos', () => {
    assert.deepEqual(
      getLeadMailConfig({
        RESEND_API_KEY: 're_test',
        LEADS_RECIPIENT_EMAIL: 'comercial@sultectecnologia.com.br',
        LEADS_FROM_EMAIL: 'formularios@sultectecnologia.com.br',
        LEADS_FROM_NAME: 'Sultec Tecnologia',
      }),
      {
        apiKey: 're_test',
        to: 'comercial@sultectecnologia.com.br',
        fromEmail: 'formularios@sultectecnologia.com.br',
        fromName: 'Sultec Tecnologia',
      },
    )
    assert.equal(
      getLeadMailConfig({
        RESEND_API_KEY: 're_test',
        LEADS_RECIPIENT_EMAIL: 'comercial@sultectecnologia.com.br',
        LEADS_FROM_EMAIL: 'Nome <formularios@sultectecnologia.com.br>',
        LEADS_FROM_NAME: 'Sultec Tecnologia',
      }),
      null,
    )
  })
})

describe('envio Resend (mock)', () => {
  it('envia com destinatário, Reply-To e assunto corretos quando Resend aceita', async () => {
    const validated = validateEbookLead(baseLead({ autorizacaoComercial: false }))
    assert.equal(validated.ok, true)
    if (!validated.ok) return

    let capturedBody: Record<string, unknown> | null = null
    let authHeader = ''
    const mockFetch: typeof fetch = async (_url, init) => {
      capturedBody = JSON.parse(String(init?.body))
      const headers = init?.headers as Record<string, string>
      authHeader = headers?.Authorization || ''
      return new Response(JSON.stringify({ id: 'mock' }), { status: 200 })
    }

    await sendLeadEmailViaResend(validated.data, mockFetch, {
      RESEND_API_KEY: 're_test_key',
      LEADS_RECIPIENT_EMAIL: 'comercial@sultectecnologia.com.br',
      LEADS_FROM_EMAIL: 'formularios@sultectecnologia.com.br',
      LEADS_FROM_NAME: 'Sultec Tecnologia',
    })

    assert.ok(capturedBody)
    assert.deepEqual(capturedBody!.to, ['comercial@sultectecnologia.com.br'])
    assert.equal(capturedBody!.reply_to, 'joao@empresa.com.br')
    assert.equal(capturedBody!.from, 'Sultec Tecnologia <formularios@sultectecnologia.com.br>')
    assert.equal(capturedBody!.subject, '[Novo lead | E-book] Empresa Exemplo — João da Silva')
    assert.ok(String(capturedBody!.text).includes('UTM source: linkedin'))
    assert.ok(String(capturedBody!.html).includes('NOVO LEAD'))
    assert.ok(authHeader.includes('re_test_key'))
  })

  it('falha quando Resend recusa', async () => {
    const validated = validateEbookLead(baseLead())
    assert.equal(validated.ok, true)
    if (!validated.ok) return

    const mockFetch: typeof fetch = async () =>
      new Response('error', { status: 500 })

    await assert.rejects(
      () =>
        sendLeadEmailViaResend(validated.data, mockFetch, {
          RESEND_API_KEY: 're_test_key',
          LEADS_RECIPIENT_EMAIL: 'comercial@sultectecnologia.com.br',
          LEADS_FROM_EMAIL: 'formularios@sultectecnologia.com.br',
          LEADS_FROM_NAME: 'Sultec Tecnologia',
        }),
      /resend_failed/,
    )
  })

  it('falha com email_not_configured', async () => {
    const validated = validateEbookLead(baseLead())
    assert.equal(validated.ok, true)
    if (!validated.ok) return
    await assert.rejects(
      () => sendLeadEmailViaResend(validated.data, fetch, {}),
      /email_not_configured/,
    )
  })
})

describe('artefatos do projeto', () => {
  it('env.example sem webhook/notify/onboarding', () => {
    const envExample = readFileSync(join(process.cwd(), '.env.example'), 'utf8')
    assert.equal(envExample.includes('LEADS_WEBHOOK'), false)
    assert.equal(envExample.includes('LEADS_NOTIFY'), false)
    assert.equal(envExample.includes('onboarding@resend.dev'), false)
    assert.ok(envExample.includes('RESEND_API_KEY'))
    assert.ok(envExample.includes('LEADS_RECIPIENT_EMAIL'))
  })

  it('next.config limita header ao PDF da campanha', () => {
    const cfg = readFileSync(join(process.cwd(), 'next.config.js'), 'utf8')
    assert.ok(cfg.includes('checklist-homologacao-fornecedores-cabeamento-sultec.pdf'))
    assert.equal(cfg.includes("source: '/materiais/:path*.pdf'"), false)
  })

  it('página de acesso declara noindex', () => {
    const page = readFileSync(
      join(process.cwd(), 'app/materiais/checklist-homologacao/acesso/page.tsx'),
      'utf8',
    )
    assert.ok(page.includes('index: false'))
    assert.ok(page.includes('follow: false'))
  })

  it('PDF da campanha existe em public', () => {
    const pdf = readFileSync(
      join(
        process.cwd(),
        'public/materiais/checklist-homologacao-fornecedores-cabeamento-sultec.pdf',
      ),
    )
    assert.ok(pdf.byteLength > 1000)
  })

  it('código-fonte sem variáveis antigas de webhook', () => {
    const files = [
      'app/api/leads/ebook-homologacao/route.ts',
      'lib/leads/ebook-email.ts',
      'app/materiais/checklist-homologacao/_parts/CaptureForm.tsx',
    ]
    for (const file of files) {
      const src = readFileSync(join(process.cwd(), file), 'utf8')
      assert.equal(src.includes('LEADS_WEBHOOK_URL'), false)
      assert.equal(src.includes('LEADS_NOTIFY_EMAIL'), false)
      assert.equal(src.includes('onboarding@resend.dev'), false)
    }
  })

  it('frontend exige emailAccepted e não chama fbq diretamente', () => {
    const form = readFileSync(
      join(process.cwd(), 'app/materiais/checklist-homologacao/_parts/CaptureForm.tsx'),
      'utf8',
    )
    assert.ok(form.includes('emailAccepted'))
    const pixel = readFileSync(join(process.cwd(), 'lib/meta-pixel.ts'), 'utf8')
    assert.equal(pixel.includes("fbq("), false)
    assert.ok(pixel.includes('dataLayer'))
  })
})
