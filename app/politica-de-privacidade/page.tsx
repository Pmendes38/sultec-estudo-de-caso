import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Sultec',
  description:
    'Informações sobre coleta, uso e proteção de dados pessoais no site e nas campanhas da Sultec Soluções Tecnológicas.',
}

const POLICY_VERSION = 'v1_2026-07'
const POLICY_DATE = '22 de julho de 2026'

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-[#070808] text-white min-h-screen">
      <section className="pt-[120px] lg:pt-[150px] pb-16 lg:pb-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">Política de Privacidade</span>
          </div>

          <p className="font-sora text-[12px] uppercase tracking-[0.12em] text-[#F35901] mb-4">
            Sultec Soluções Tecnológicas
          </p>
          <h1 className="font-roboto font-bold text-white text-[32px] lg:text-[40px] tracking-[-0.04em] leading-[1.15]">
            Política de Privacidade
          </h1>
          <p className="font-sora text-muted text-[14px] mt-3">
            Versão {POLICY_VERSION} · Atualizada em {POLICY_DATE}
          </p>

          <div className="mt-10 space-y-8 font-sora text-[#ABADAB] text-[15px] leading-[1.7]">
            <Section title="1. Quem somos">
              <p>
                Esta política descreve como a <strong className="text-white">Sultec</strong> (nome
                comercial: Sultec Soluções Tecnológicas) trata dados pessoais no site institucional
                e em campanhas de materiais técnicos, como o Checklist de Homologação de Fornecedores.
              </p>
              <p className="mt-3">
                Contato comercial já publicado no site:{' '}
                <a
                  href="mailto:contato@example.com"
                  className="text-white underline underline-offset-2 hover:text-[#F35901]"
                >
                  contato@example.com
                </a>
                .
              </p>
              <p className="mt-3">
                Endereço operacional publicado no site: Avenida Antônio Sachett, N° 151 D —
                Desbravador, Chapecó/SC, CEP 89811-396.
              </p>
              {/* TODO_DADO_JURIDICO: razão social completa, CNPJ e eventual encarregado (DPO) não constam no repositório. */}
              <p className="mt-3 text-[#898A89] text-[13px] border border-[#1c1d1e] rounded-xl px-4 py-3">
                Pendência jurídica: razão social completa, CNPJ e identificação do encarregado de
                dados (quando houver) devem ser inseridos pela Sultec antes de considerar esta
                política definitiva para produção.
              </p>
            </Section>

            <Section title="2. Dados que coletamos">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Dados de formulários (ex.: nome, e-mail profissional, empresa, cargo, telefone
                  opcional, situação do projeto e autorizações).
                </li>
                <li>
                  Dados de origem da campanha (UTMs, fbclid, página de captura, página de origem e
                  referrer), quando disponíveis.
                </li>
                <li>
                  Dados técnicos de navegação e preferência de cookies, conforme as categorias
                  autorizadas.
                </li>
              </ul>
            </Section>

            <Section title="3. Finalidades do tratamento">
              <ul className="list-disc pl-5 space-y-2">
                <li>Disponibilizar o material técnico solicitado (ex.: e-book / checklist).</li>
                <li>
                  Registrar a solicitação e enviar o contato à equipe comercial da Sultec por
                  e-mail.
                </li>
                <li>
                  Contato comercial sobre projetos, serviços e conteúdos <strong className="text-white">somente</strong> quando
                  houver autorização explícita e opcional do titular.
                </li>
                <li>Medição de campanhas e analytics, quando houver consentimento correspondente.</li>
                <li>Segurança, prevenção a abusos e melhoria do site.</li>
              </ul>
            </Section>

            <Section title="4. Base e autorizações">
              <p>
                O acesso a materiais mediante formulário depende da autorização para tratamento dos
                dados necessários à entrega. A autorização para comunicações comerciais é opcional e
                independente: recusá-la não impede o acesso ao material solicitado.
              </p>
            </Section>

            <Section title="5. Ferramentas e compartilhamento operacional">
              <p>
                Para operar o site e as campanhas, dados podem ser processados por prestadores
                técnicos, em especial:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Hospedagem e edge: Vercel.</li>
                <li>Envio de e-mails transacionais de leads: Resend.</li>
                <li>
                  Medição e tags (quando autorizadas): Google Tag Manager e ferramentas configuradas
                  no contêiner (ex.: Meta Pixel).
                </li>
              </ul>
              <p className="mt-3">
                Esses fornecedores atuam como operadores/processadores sob instruções da Sultec, nos
                limites necessários à prestação do serviço.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>Classificamos cookies e tecnologias semelhantes em:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>
                  <strong className="text-white">Necessários</strong> — funcionamento do site e
                  registro da preferência de consentimento.
                </li>
                <li>
                  <strong className="text-white">Analytics</strong> — medição de uso, somente com
                  autorização.
                </li>
                <li>
                  <strong className="text-white">Marketing</strong> — campanhas e publicidade,
                  somente com autorização.
                </li>
              </ul>
              <p className="mt-3">
                Você pode alterar suas preferências a qualquer momento pelo link “Cookies” no
                rodapé.
              </p>
            </Section>

            <Section title="7. Retenção">
              {/* TODO_DADO_JURIDICO: prazo específico de retenção não definido no projeto. */}
              <p>
                Mantemos os dados pelo tempo necessário para cumprir a finalidade informada
                (entrega do material, atendimento comercial autorizado e obrigações legais
                aplicáveis). Prazos específicos de retenção devem ser definidos formalmente pela
                Sultec.
              </p>
            </Section>

            <Section title="8. Direitos do titular">
              <p>
                Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
                anonimização, portabilidade, eliminação de dados desnecessários, informação sobre
                compartilhamentos e revogação de consentimento, quando aplicável.
              </p>
              <p className="mt-3">
                Canal para solicitações:{' '}
                <a
                  href="mailto:contato@example.com"
                  className="text-white underline underline-offset-2 hover:text-[#F35901]"
                >
                  contato@example.com
                </a>
                {' '}
                (assunto sugerido: “LGPD — solicitação de titular”).
              </p>
            </Section>

            <Section title="9. Atualizações">
              <p>
                Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A
                versão e a data acima indicam a revisão vigente neste site.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-roboto font-bold text-white text-[20px] tracking-[-0.02em] mb-3">
        {title}
      </h2>
      {children}
    </section>
  )
}
