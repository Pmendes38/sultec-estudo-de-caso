import type { Metadata } from 'next'
import Link from 'next/link'

const WHATSAPP_URL = 'https://wa.me/5500000000000'

export const metadata: Metadata = {
  title: 'Certificação — Sultec Soluções Tecnológicas',
  description:
    'Certificação Fluke Networks (DSX), parceria Furukawa e soluções FS. Cada ponto entregue pela Sultec é testado e documentado, com laudos auditáveis e conformidade às normas.',
}

type Certificacao = {
  id: string
  eyebrow: string
  titulo: string
  descricao: string
  beneficios: string[]
  tags: string[]
}

const certificacoes: Certificacao[] = [
  {
    id: 'fluke',
    eyebrow: 'Fluke Networks · Certificação Técnica',
    titulo: 'Certificação Fluke Networks',
    descricao:
      'A certificação Fluke Networks é o padrão internacional para cabeamento estruturado em ambientes corporativos, industriais e de missão crítica. Cada ponto entregue pela Sultec é testado e documentado pelo Fluke DSX-8000, um dos certificadores mais avançados do mercado e disponível em poucas empresas da região Sul.',
    beneficios: [
      'Laudos digitais ponto a ponto, com rastreabilidade total da estrutura entregue',
      'Conformidade com ANSI/TIA-568, ISO/IEC 11801 e ABNT NBR 14565',
      'Garantia de fabricante preservada em toda a instalação certificada',
      'Padrão técnico exigido por operações de médio e grande porte',
    ],
    tags: ['TIA-568', 'ISO 11801', 'ABNT 14565'],
  },
  {
    id: 'furukawa',
    eyebrow: 'Furukawa · Soluções Certificadas',
    titulo: 'Parceria Furukawa',
    descricao:
      'Implantação de soluções Furukawa Laserway e cabeamento óptico de alto desempenho, com garantia estendida de fabricante e suporte técnico especializado. Projetos dimensionados para alta densidade, baixa latência e expansão sustentada.',
    beneficios: [
      'Garantia estendida Furukawa em toda a malha de fibra óptica',
      'Soluções Laserway para operações com alta densidade de pontos',
      'Projeto e instalação por equipe certificada pelo fabricante',
      'Documentação técnica completa e suporte pós-entrega',
    ],
    tags: ['LASERWAY', 'GPON', 'OS2 / OM4'],
  },
  {
    id: 'fs',
    eyebrow: 'FS · Infraestrutura Óptica',
    titulo: 'Soluções FS',
    descricao:
      'Trabalhamos com soluções FS para infraestrutura óptica e de conectividade — fibra, transceivers e componentes de rede com alta disponibilidade e excelente relação custo-benefício, dimensionados para projetos de qualquer porte.',
    beneficios: [
      'Portfólio óptico completo: fibra, transceivers e acessórios de rede',
      'Alta disponibilidade e custo-benefício para projetos de qualquer porte',
    ],
    tags: ['FIBRA', 'CONECTIVIDADE', 'FS'],
  },
]

export default function CertificacaoPage() {
  return (
    <div className="bg-[#070808] text-white min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] lg:pt-[150px] pb-12 border-b border-[#F35901]/20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)' }}
        />
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          <div className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">Certificação</span>
          </div>

          <p className="font-sora text-[#F35901] text-[14px] tracking-[0.05em] uppercase mb-4">
            Qualidade comprovada
          </p>
          <h1
            className="font-roboto font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 56px)', lineHeight: '1.04', letterSpacing: '-0.04em' }}
          >
            Certificação que grandes operações exigem.
          </h1>
          <p className="font-sora text-[#ABADAB] text-[17px] lg:text-[19px] leading-[1.6] mt-5 max-w-[720px]">
            O Fluke é o nosso principal diferencial: cada ponto entregue é testado, documentado
            e auditável. Somado às parcerias Furukawa e FS, garantimos infraestrutura no padrão
            técnico de quem não pode falhar.
          </p>
        </div>
      </section>

      {/* ── Certificações ─────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col gap-6">
          {certificacoes.map((c) => (
            <article
              key={c.id}
              className="rounded-[18px] border border-[#1c1d1e] bg-[#0a0b0b] p-7 lg:p-10"
            >
              <p className="font-sora text-[#F35901] text-[13px] tracking-[0.16em] uppercase">
                {c.eyebrow}
              </p>
              <h2 className="font-roboto font-bold text-white text-[24px] lg:text-[30px] tracking-[-0.03em] mt-3">
                {c.titulo}
              </h2>
              <div className="h-px w-20 bg-[#F35901]/60 my-5" />
              <p className="font-sora text-[#ABADAB] text-[15px] lg:text-[16px] leading-[1.7] max-w-[760px]">
                {c.descricao}
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                {c.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F35901]/15 border border-[#F35901]/40">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#F35901" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sora text-white/85 text-[15px] leading-[1.5]">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] font-sora text-white/80 text-[12px] uppercase tracking-[0.12em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="rounded-[18px] border border-[#F35901]/30 bg-gradient-to-br from-[#0d0e10] to-[#0a0b0b] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-roboto font-bold text-white text-[24px] lg:text-[30px] tracking-[-0.03em]">
                Quer um projeto certificado?
              </h3>
              <p className="font-sora text-[#ABADAB] text-[15px] leading-[1.6] mt-3 max-w-[560px]">
                Fale com um especialista da Sultec pelo WhatsApp e leve sua infraestrutura ao padrão Fluke.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] rounded-[14px] px-8 py-[16px] hover:bg-[#d14d01] transition-colors flex-shrink-0"
            >
              Solicitar projeto certificado
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
