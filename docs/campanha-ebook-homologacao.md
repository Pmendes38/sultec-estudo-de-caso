# Campanha: Checklist de Homologação Técnica de Fornecedores

Documento de configuração externa. Não contém credenciais.

## Fluxo

1. Visitante acessa `/materiais/checklist-homologacao`
2. Preenche o formulário
3. API valida, sanitiza, aplica honeypot/rate limit/idempotência
4. Servidor envia e-mail via Resend
5. Somente após aceite do Resend a API retorna `emailAccepted: true`
6. Navegador dispara `generate_lead` no `dataLayer` (se marketing autorizado)
7. Redireciona para `/materiais/checklist-homologacao/acesso`
8. Visitante lê/baixa o PDF

Webhook **não** substitui o e-mail nesta versão.

## Resend

1. Criar conta em [resend.com](https://resend.com)
2. Adicionar e verificar o domínio da Sultec (ex.: `sultec.example`)
3. Inserir os registros DNS indicados pelo Resend
4. Aguardar status **Verified**
5. Criar API Key com permissão de envio (manual — não criar por script)
6. **Não** salvar a chave no Git

## Variáveis na Vercel (Production)

```
RESEND_API_KEY=
LEADS_RECIPIENT_EMAIL=contato@example.com
LEADS_FROM_EMAIL=contato@example.com
LEADS_FROM_NAME=Sultec Tecnologia
```

Opcionais (CAPI — não bloqueiam o e-mail):

```
META_PIXEL_ID=
META_CAPI_ACCESS_TOKEN=
```

Após configurar, fazer novo deployment.

Remetente resultante: `Sultec Tecnologia <contato@example.com>`  
Reply-To: e-mail profissional do lead.

## GTM e Meta

O site carrega **um** GTM (`GTM-TSGBLTXP`) somente após consentimento de analytics ou marketing. Não há segundo Pixel no código. Eventos de negócio saem só pelo `dataLayer`.

| Momento | `dataLayer.event` | Parâmetros | Meta (via GTM) | Consentimento |
|---|---|---|---|---|
| Landing | `view_content` | `content_name`, `content_category` | ViewContent | marketing |
| E-mail aceito | `generate_lead` | `content_name`, `content_category`, `event_id` | Lead | marketing |
| Página de acesso | `ebook_access` | `content_name` | Custom EbookAccess | marketing |
| Download PDF | `ebook_download` | `content_name` | Custom EbookDownload | marketing |

### Triggers sugeridos no GTM

- Custom Event = `view_content` → Meta ViewContent
- Custom Event = `generate_lead` → Meta Lead (passar `eventID` = `event_id`)
- Custom Event = `ebook_access` → Meta Custom `EbookAccess`
- Custom Event = `ebook_download` → Meta Custom `EbookDownload`

### Deduplicação

O mesmo `event_id` da submissão é enviado no `dataLayer` e, se CAPI estiver configurada, no servidor.

### Consentimento no GTM

O código impede o carregamento do GTM sem analytics/marketing. Ainda assim, configure **Consent Mode** (ou condições equivalentes) no painel para que tags de marketing só disparem com autorização de marketing. Sem esse ajuste no painel, não é possível garantir 100% só pelo código do site.

### Testes

1. GTM Preview na landing e no fluxo de formulário
2. Meta Test Events — um Lead após 200 da API
3. Network: verificar ausência de `facebook.com/tr` duplicado no mesmo gesto

## Rate limit e idempotência

Implementados em memória do processo Node. Em serverless Vercel **não** são distribuídos nem permanentes após cold start. Proteção básica por instância.

## PDF

URL pública: `/materiais/checklist-homologacao-fornecedores-cabeamento-sultec.pdf`  
Header `X-Robots-Tag: noindex, nofollow` apenas neste arquivo.  
`noindex` **não** autentica o arquivo: quem tiver o link ainda acessa.

## Teste real (após credenciais)

1. Abrir a landing com UTMs de exemplo
2. Aceitar cookies de marketing (para validar eventos)
3. Enviar formulário válido
4. Confirmar e-mail na caixa `LEADS_RECIPIENT_EMAIL`: assunto, remetente, Reply-To, HTML/texto, UTMs, autorizações
5. Confirmar um único e-mail por submissão
6. Confirmar Lead só após resposta 200 com `emailAccepted: true`
7. Simular falha (API key inválida em Preview): sem redirect, sem Lead, mensagem de erro

## Política de Privacidade

Página: `/politica-de-privacidade`  
Contém marcações `TODO_DADO_JURIDICO` para CNPJ, razão social completa e DPO — bloquear produção jurídica até preenchimento pela Sultec.
