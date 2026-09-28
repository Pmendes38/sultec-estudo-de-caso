import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  buildWhatsappClickRecord,
  buildWhatsappUrl,
  getWhatsappHighlight,
  isLikelyAutomatedRequest,
  WHATSAPP_CLICK_EVENT,
  WHATSAPP_HIGHLIGHTS,
  WHATSAPP_NUMBER,
} from './whatsapp-tracking'
import {
  buildWhatsappNotificationText,
  deliverWhatsappClick,
  getWhatsappEmailConfig,
  getWhatsappWebhookConfig,
  sendWhatsappClickEmail,
  sendWhatsappClickToWebhook,
} from './whatsapp-delivery'

const baseParams = new URLSearchParams({
  utm_source: 'linkedin',
  utm_medium: 'organic_social',
  utm_campaign: 'destaques',
  utm_content: 'fluke_dsx',
})

function record() {
  return buildWhatsappClickRecord(baseParams, {
    eventId: 'evt-123',
    clickedAt: new Date('2026-09-28T15:00:00.000Z'),
  })
}

describe('configuração dos destaques do WhatsApp', () => {
  it('mantém exatamente os seis conteúdos suportados', () => {
    assert.deepEqual(Object.keys(WHATSAPP_HIGHLIGHTS), [
      'fluke_dsx',
      'infraestrutura_completa',
      'operacoes_criticas',
      'data_center',
      'redes_fibra',
      'cases',
    ])
  })

  it('gera URL segura com número e mensagem específicos', () => {
    const highlight = getWhatsappHighlight('redes_fibra')
    const url = new URL(buildWhatsappUrl(highlight.message))

    assert.equal(url.hostname, 'wa.me')
    assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`)
    assert.equal(url.searchParams.get('text'), highlight.message)
  })

  it('usa mensagem genérica para conteúdo desconhecido', () => {
    assert.equal(
      getWhatsappHighlight('nao-existe').label,
      'Conteúdo não identificado',
    )
  })
})

describe('registro do clique', () => {
  it('registra o evento como clique, nunca como mensagem enviada', () => {
    const result = record()

    assert.equal(result.event, WHATSAPP_CLICK_EVENT)
    assert.equal(result.event, 'Clique para iniciar conversa')
    assert.equal(result.utm_source, 'linkedin')
    assert.equal(result.utm_medium, 'organic_social')
    assert.equal(result.utm_campaign, 'destaques')
    assert.equal(result.utm_content, 'fluke_dsx')
    assert.equal(result.content_label, 'Certificação Fluke DSX')
    assert.equal(result.clicked_at, '2026-09-28T15:00:00.000Z')
  })

  it('remove caracteres de controle dos parâmetros', () => {
    const params = new URLSearchParams(baseParams)
    params.set('utm_campaign', 'destaques\r\nBcc: teste')

    assert.equal(
      buildWhatsappClickRecord(params, { eventId: 'evt' }).utm_campaign,
      'destaques Bcc: teste',
    )
  })

  it('reconhece crawlers e ferramentas de monitoramento', () => {
    assert.equal(isLikelyAutomatedRequest('LinkedInBot/1.0'), true)
    assert.equal(isLikelyAutomatedRequest('curl/8.0'), true)
    assert.equal(isLikelyAutomatedRequest('Mozilla/5.0 LinkedInApp'), false)
  })
})

describe('entrega server-to-server', () => {
  const env = {
    WHATSAPP_TRACKING_WEBHOOK_URL: 'https://hooks.example.com/sultec',
    WHATSAPP_TRACKING_WEBHOOK_TOKEN: 'secret-token',
    WHATSAPP_TRACKING_NOTIFICATION_EMAIL: 'agencia@example.com',
    RESEND_API_KEY: 're_test_key',
    LEADS_FROM_EMAIL: 'formularios@sultectecnologia.com.br',
    LEADS_FROM_NAME: 'Sultec Tecnologia',
  }

  it('exige HTTPS e token para o webhook', () => {
    assert.deepEqual(getWhatsappWebhookConfig(env), {
      url: env.WHATSAPP_TRACKING_WEBHOOK_URL,
      token: env.WHATSAPP_TRACKING_WEBHOOK_TOKEN,
    })
    assert.equal(
      getWhatsappWebhookConfig({
        ...env,
        WHATSAPP_TRACKING_WEBHOOK_URL: 'http://hooks.example.com',
      }),
      null,
    )
    assert.equal(
      getWhatsappWebhookConfig({
        ...env,
        WHATSAPP_TRACKING_WEBHOOK_TOKEN: 'token\r\ninjetado',
      }),
      null,
    )
  })

  it('valida a configuração de e-mail da agência', () => {
    assert.equal(getWhatsappEmailConfig(env)?.to, 'agencia@example.com')
    assert.equal(
      getWhatsappEmailConfig({
        ...env,
        WHATSAPP_TRACKING_NOTIFICATION_EMAIL: 'invalido',
      }),
      null,
    )
  })

  it('envia o registro ao webhook com token apenas no cabeçalho', async () => {
    let body = ''
    const mockFetch: typeof fetch = async (_input, init) => {
      const headers = init?.headers as Record<string, string>
      assert.equal(headers.Authorization, 'Bearer secret-token')
      body = String(init?.body)
      return new Response(null, { status: 204 })
    }

    await sendWhatsappClickToWebhook(record(), mockFetch, env)
    assert.equal(JSON.parse(body).event, 'Clique para iniciar conversa')
    assert.equal(body.includes('secret-token'), false)
  })

  it('envia notificação via Resend sem afirmar mensagem enviada', async () => {
    let body = ''
    const mockFetch: typeof fetch = async (input, init) => {
      assert.equal(String(input), 'https://api.resend.com/emails')
      body = String(init?.body)
      return new Response('{}', { status: 200 })
    }

    await sendWhatsappClickEmail(record(), mockFetch, env)

    const payload = JSON.parse(body)
    assert.deepEqual(payload.to, ['agencia@example.com'])
    assert.match(payload.text, /Clique para iniciar conversa/)
    assert.match(payload.text, /não confirma que a mensagem foi enviada/)
  })

  it('executa webhook e e-mail em paralelo e reporta sucesso', async () => {
    const calls: string[] = []
    const mockFetch: typeof fetch = async (input) => {
      calls.push(String(input))
      return new Response('{}', { status: 200 })
    }

    const result = await deliverWhatsappClick(record(), mockFetch, env)

    assert.deepEqual(result, { webhook: 'sent', email: 'sent' })
    assert.equal(calls.length, 2)
  })

  it('mantém texto explícito sobre a natureza do evento', () => {
    const text = buildWhatsappNotificationText(record())
    assert.match(text, /apenas o clique para iniciar uma conversa/)
    assert.doesNotMatch(text, /Mensagem enviada: Sim/)
  })
})
