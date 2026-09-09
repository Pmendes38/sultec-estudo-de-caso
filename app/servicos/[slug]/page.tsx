import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import {
  SERVICO_SEO,
  breadcrumbJsonLd,
  buildPageMetadata,
  serviceJsonLd,
} from '@/lib/seo'
import { servicos, getServicoBySlug } from '../_data/servicos'

const WHATSAPP_URL = 'https://wa.me/5500000000000'

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const servico = getServicoBySlug(params.slug)
  if (!servico) return { title: 'Solução' }

  const seo = SERVICO_SEO[servico.slug]
  if (seo) {
    return buildPageMetadata({
      title: seo.title,
      description: seo.description,
      path: `/servicos/${servico.slug}`,
      keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
    })
  }

  return buildPageMetadata({
    title: `${servico.title} — Sultec`,
    description: servico.summary,
    path: `/servicos/${servico.slug}`,
  })
}

export default function ServicoPage({ params }: { params: { slug: string } }) {
  const servico = getServicoBySlug(params.slug)
  if (!servico) notFound()

  const seo = SERVICO_SEO[servico.slug]
  const h1 = seo?.h1 || servico.title
  const relatedSlugs = seo?.related || []
  const relacionadas = relatedSlugs
    .map((slug) => getServicoBySlug(slug))
    .filter(Boolean) as typeof servicos
  const outras =
    relacionadas.length > 0
      ? relacionadas
      : servicos.filter((s) => s.slug !== servico.slug).slice(0, 6)

  return (
    <div className="bg-[#070808] text-white min-h-screen">
      <JsonLd
        data={serviceJsonLd({
          name: h1,
          description: seo?.description || servico.summary,
          path: `/servicos/${servico.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Soluções', path: '/servicos' },
          { name: servico.title, path: `/servicos/${servico.slug}` },
        ])}
      />

      <section className="pt-[120px] lg:pt-[150px] pb-12 border-b border-[#F35901]/20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)' }}
        />
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span className="text-[#333]">/</span>
            <Link href="/servicos" className="hover:text-white transition-colors">
              Soluções
            </Link>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">{servico.title}</span>
          </nav>

          <p className="font-sora text-[#F35901] text-[14px] tracking-[0.05em] uppercase mb-4">
            {servico.eyebrow}
          </p>
          <h1
            className="font-roboto font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 56px)', lineHeight: '1.04', letterSpacing: '-0.04em' }}
          >
            {h1}
          </h1>
          <p className="font-sora text-[#ABADAB] text-[17px] lg:text-[19px] leading-[1.6] mt-5 max-w-[720px]">
            {servico.summary}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14 grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.16em]">
                Escopo do serviço
              </h2>
              <p className="font-sora text-white/90 text-[16px] lg:text-[17px] leading-[1.75]">
                {servico.intro}
              </p>
              {servico.detalhe && (
                <p className="font-sora text-white/80 text-[15px] lg:text-[16px] leading-[1.7]">
                  {servico.detalhe}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.16em]">
                O que inclui
              </h2>
              <ul className="flex flex-col gap-3">
                {servico.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F35901]/15 border border-[#F35901]/40">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 6.2L4.8 8.5L9.5 3.5"
                          stroke="#F35901"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sora text-white/85 text-[15px] leading-[1.55]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/certificacao"
                className="font-sora text-[13px] text-[#ABADAB] hover:text-[#F35901] underline underline-offset-2"
              >
                Ver certificação Fluke
              </Link>
              <Link
                href="/cases"
                className="font-sora text-[13px] text-[#ABADAB] hover:text-[#F35901] underline underline-offset-2"
              >
                Ver cases
              </Link>
              <Link
                href="/contato"
                className="font-sora text-[13px] text-[#ABADAB] hover:text-[#F35901] underline underline-offset-2"
              >
                Solicitar orçamento
              </Link>
              <Link
                href="/materiais/checklist-homologacao"
                className="font-sora text-[13px] text-[#ABADAB] hover:text-[#F35901] underline underline-offset-2"
              >
                Checklist de homologação
              </Link>
            </div>

            <div className="rounded-[16px] border border-[#F35901]/30 bg-gradient-to-br from-[#0d0e10] to-[#0a0b0b] p-7 lg:p-9">
              <h2 className="font-roboto font-bold text-white text-[22px] lg:text-[26px] tracking-[-0.02em]">
                Precisa de um projeto com escopo fechado?
              </h2>
              <p className="font-sora text-[#ABADAB] text-[15px] leading-[1.6] mt-3 max-w-[520px]">
                Fale com a equipe técnica da Sultec pelo WhatsApp e receba uma proposta com escopo,
                prazo e materiais definidos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] rounded-[14px] px-8 py-[16px] hover:bg-[#d14d01] transition-colors"
              >
                Solicitar orçamento
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-3 lg:border-l lg:border-[#1c1d1e] lg:pl-8">
            <h2 className="font-sora text-[#898A89] text-[12px] uppercase tracking-[0.16em] mb-1">
              Soluções relacionadas
            </h2>
            {outras.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group flex items-center justify-between gap-3 font-sora text-[14px] text-white/80 hover:text-[#F35901] transition-colors py-2 border-b border-[#161719]"
              >
                {s.title}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  aria-hidden
                >
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
            <Link
              href="/servicos"
              className="mt-3 font-sora text-[13px] text-[#898A89] hover:text-white transition-colors"
            >
              ← Ver todas as soluções
            </Link>
          </aside>
        </div>
      </section>
    </div>
  )
}
