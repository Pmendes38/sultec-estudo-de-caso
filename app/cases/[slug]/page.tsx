import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'
import { cases, getCaseBySlug } from '../_data/cases'
import { CaseGallery } from './CaseGallery'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getCaseBySlug(params.slug)
  if (!project) return { title: { absolute: 'Case | Sultec' } }
  return buildPageMetadata({
    title: `${project.title} | Case de Infraestrutura — Sultec`,
    description: `${project.summary} Local: ${project.location}. Cliente: ${project.client}.`,
    path: `/cases/${project.slug}`,
    keywords: [
      'projeto de infraestrutura de TI para indústria',
      'cabeamento estruturado para indústrias',
      project.category,
    ],
    ogImage: project.coverImage || undefined,
  })
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.16em]">{title}</h2>
      <p className="font-sora text-[#ABADAB] text-[16px] leading-[1.7]">{children}</p>
    </div>
  )
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const project = getCaseBySlug(params.slug)
  if (!project) notFound()

  return (
    <div className="bg-[#070808] text-white min-h-screen">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Cases', path: '/cases' },
          { name: project.title, path: `/cases/${project.slug}` },
        ])}
      />
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] lg:pt-[140px] pb-10 border-b border-[#F35901]/20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)',
          }}
        />
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="text-[#333]">/</span>
            <Link href="/cases" className="hover:text-white transition-colors">Cases</Link>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">{project.title}</span>
          </nav>

          <span className="font-sora text-[11px] uppercase tracking-wider bg-[#F35901] text-white px-2.5 py-1 rounded-[6px] leading-none">
            {project.category}
          </span>

          <h1
            className="font-roboto font-normal text-white uppercase mt-5 mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 52px)', lineHeight: '1.04', letterSpacing: '-0.05em' }}
          >
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-x-8 gap-y-2 font-sora text-[14px] text-[#898A89]">
            <span><span className="text-white/50">Cliente:</span> {project.client}</span>
            <span><span className="text-white/50">Local:</span> {project.location}</span>
            <span><span className="text-white/50">Ano:</span> {project.year}</span>
          </div>
        </div>
      </section>

      {/* ── Cover ─────────────────────────────────────────────────────────── */}
      {project.coverImage && (
        <section className="py-10 lg:py-12">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-14">
            <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden border-2 border-[#1c1d1e]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <section className={`pb-16 ${project.coverImage ? '' : 'pt-12'}`}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col gap-12">
          {/* Resumo / narrativa */}
          <p className="font-sora text-white/90 text-[18px] lg:text-[20px] leading-[1.6] max-w-[820px]">
            {project.summary}
          </p>

          {/* Escopo */}
          {project.scope.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.16em]">
                Escopo executado
              </h2>
              <ul className="flex flex-col gap-3 max-w-[820px]">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F35901]/15 border border-[#F35901]/40">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#F35901" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sora text-white/85 text-[16px] leading-[1.55]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desafio / Solução / Resultado */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {project.challenge && <Block title="O desafio">{project.challenge}</Block>}
            {project.solution && <Block title="A solução">{project.solution}</Block>}
            {project.result && <Block title="O resultado">{project.result}</Block>}
          </div>

          {project.narrative && (
            <div className="border-l-2 border-[#F35901] pl-6 max-w-[820px]">
              <p className="font-sora text-[#ABADAB] text-[16px] leading-[1.7] italic">
                {project.narrative}
              </p>
            </div>
          )}

          {/* Galeria */}
          <div className="flex flex-col gap-5 pt-2">
            <h2 className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.16em]">
              Galeria do projeto
            </h2>
            {project.galleryPending ? (
              <div className="p-6 rounded-[12px] border border-[#1c1d1e] bg-[#0a0b0b] flex items-start gap-5">
                <div className="w-1 h-full min-h-[48px] bg-[#F35901] rounded-full flex-shrink-0" />
                <p className="font-sora text-[#898A89] text-[14px] leading-relaxed max-w-[700px]">
                  {project.galleryNote ?? 'Galeria de fotos em breve.'}
                </p>
              </div>
            ) : (
              <CaseGallery images={project.gallery} title={project.title} category={project.category} />
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#1c1d1e]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 font-sora text-[#898A89] text-[14px] hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar para projetos
          </Link>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] rounded-[14px] px-8 py-[16px] hover:bg-[#d94e00] transition-colors"
          >
            Solicitar orçamento
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
