# Campanhas de checklist

As landing pages independentes estão em:

- `/checklist-expansao-rede`
- `/checklist-custos-ocultos`

Ambas enviam os dados para `LEADS_RECIPIENT_EMAIL` por meio do Resend. A campanha de custos aceita um único anexo opcional de até 4 MB, nos formatos PDF, DOCX, XLSX, JPG ou PNG; o arquivo é validado por extensão, MIME e assinatura antes de ser anexado ao e-mail.

## Configuração

Além das variáveis existentes do Resend, configure `CHECKLIST_ACCESS_SECRET` com um segredo aleatório para assinar os cookies de autorização de download. Se estiver vazio, o endpoint usa a chave do Resend como fallback.

Coloque os PDFs finais em `private/checklists/` com estes nomes exatos:

- `Sultec_Checklist_Expansao_Rede.pdf`
- `Sultec_Checklist_Custos_Ocultos.pdf`

Eles não devem ser colocados em `public/`. O envio não é aceito enquanto o material correspondente não estiver configurado.

## Eventos

Os eventos são separados por campanha e só são enviados ao `dataLayer` com consentimento de marketing:

- Expansão: `view_checklist_expansao`, `start_form_expansao`, `submit_form_expansao`, `download_checklist_expansao`, `click_whatsapp_expansao`.
- Custos ocultos: `view_checklist_custos`, `start_form_custos`, `submit_form_custos`, `download_checklist_custos`, `click_whatsapp_custos`.
