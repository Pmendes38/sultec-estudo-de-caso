'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'
import { cases, galeriaTecnica } from './_data/cases'
import { Lightbox } from './_parts/Lightbox'

type Tab = 'cases' | 'galeria'

// ─── Case card ────────────────────────────────────────────────────────────────

function CaseCard({ project }: { project: typeof cases[number] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-[12px] overflow-hidden border-[2px] border-[#1c1d1e] hover:border-[#F35901]/50 transition-colors duration-300 bg-[#0a0b0b]"
      style={{ willChange: 'transform' }}
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Placeholder p/ cases cuja galeria ainda virá
          <div className="absolute inset-0 bg-[#0d0e10] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)',
              }}
            />
            <span className="font-roboto font-bold text-[#F35901]/30 text-[64px] leading-none">
              {project.client === 'Vibra Agroindustrial S/A' ? 'VIBRA' : 'SULTEC'}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="font-sora text-[11px] uppercase tracking-wider bg-[#F35901] text-white px-2.5 py-1 rounded-[6px] leading-none">
            {project.category}
          </span>
          {project.galleryPending && (
            <span className="font-sora text-[11px] uppercase tracking-wider bg-black/70 border border-white/15 text-white/60 px-2.5 py-1 rounded-[6px] leading-none whitespace-nowrap">
              Fotos em breve
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-roboto font-normal text-white text-[20px] uppercase leading-tight tracking-[-0.03em] mb-1.5">
            {project.title}
          </h3>
          <p className="font-sora text-[#898A89] text-[13px]">
            {project.location} · {project.year}
          </p>
        </div>
        <p className="font-sora text-[#666867] text-[13px] leading-relaxed line-clamp-3 flex-1">
          {project.summary}
        </p>
        <Link
          href={`/cases/${project.slug}`}
          className="flex items-center gap-1.5 font-sora text-[#F35901] text-[13px] group-hover:gap-2.5 transition-all duration-300 pt-3 border-t border-[#1c1d1e]"
        >
          <span>Ver descrição completa</span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#F35901" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

// ─── Vibra recurrence storytelling block ──────────────────────────────────────

function VibraRecorrencia() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mt-16 overflow-hidden rounded-[20px] border border-[#F35901]/30 bg-gradient-to-br from-[#0d0e10] via-[#0b0c0d] to-[#0a0b0b] p-8 lg:p-12"
    >
      <div
        className="absolute -right-32 -top-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.12) 0%, transparent 60%)' }}
      />
      <div className="relative max-w-[820px]">
        <p className="font-sora text-[#F35901] text-[13px] uppercase tracking-[0.18em] mb-4">
          Confiança que se renova
        </p>
        <p
          className="font-roboto font-normal text-white"
          style={{ fontSize: 'clamp(1.25rem, 2.2vw, 28px)', lineHeight: '1.4', letterSpacing: '-0.02em' }}
        >
          Da primeira obra à recontratação: a Sultec executou a infraestrutura do
          Incubatório de Soledade em 2024 e, em 2026, foi novamente contratada pela
          Vibra Agroindustrial para um novo projeto, ainda maior.{' '}
          <span className="text-[#F35901]">Confiança que se renova a cada entrega.</span>
        </p>
      </div>
    </motion.div>
  )
}

// ─── Galeria Técnica ──────────────────────────────────────────────────────────

function GaleriaTecnica({ onOpen }: { onOpen: (index: number) => void }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.p variants={fadeUp} className="font-sora text-[#666867] text-[15px] leading-relaxed max-w-[700px] mb-10">
        Qualidade de execução em campo — racks, cabeamento, organização e acabamento.
        Imagens técnicas de diferentes cases, sem identificação de cliente.
      </motion.p>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {galeriaTecnica.map((img, i) => (
          <motion.button
            key={img}
            variants={fadeUp}
            onClick={() => onOpen(i)}
            className={`group relative mb-4 block w-full overflow-hidden rounded-[10px] border-2 border-[#1c1d1e] hover:border-[#F35901]/50 transition-colors break-inside-avoid ${
              i === 0 ? 'ring-1 ring-[#F35901]/40' : ''
            }`}
          >
            <Image
              src={img}
              alt={`Galeria técnica — foto ${i + 1}`}
              width={500}
              height={500}
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {i === 0 && (
              <span className="absolute top-2 left-2 font-sora text-[10px] uppercase tracking-wider bg-[#F35901] text-white px-2 py-0.5 rounded-[5px] leading-none">
                Capa
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CasesPage() {
  const [tab, setTab] = useState<Tab>('cases')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="bg-[#070808] text-white min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 border-b border-[#F35901]/20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)',
          }}
        />

        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          <div className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">Cases</span>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[14px] tracking-[-0.04em] uppercase mb-3">
              Cases & Galeria Técnica
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-roboto font-normal text-white uppercase mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 68px)', lineHeight: '1.02', letterSpacing: '-0.05em' }}
            >
              <span className="block">Cases que</span>
              <span className="block">refletem nossa</span>
              <span className="block text-[#F35901]">excelência</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-sora text-[#898A89] text-[16px] leading-relaxed max-w-[560px]">
              Cases reais de infraestrutura, redes e segurança eletrônica — cada projeto
              com planejamento técnico, materiais de alto padrão e execução certificada.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
          {/* Subguias */}
          <div className="flex flex-wrap gap-2 mb-12">
            {([
              { id: 'cases', label: 'Cases', count: cases.length },
              { id: 'galeria', label: 'Galeria Técnica', count: galeriaTecnica.length },
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`font-sora text-[14px] px-5 py-2.5 rounded-[10px] border-2 transition-all duration-200 ${
                  tab === t.id
                    ? 'bg-[#F35901] border-[#F35901] text-white'
                    : 'border-[#252526] text-[#898A89] hover:border-[#F35901]/40 hover:text-white'
                }`}
              >
                {t.label}
                <span className={`ml-2 text-[12px] ${tab === t.id ? 'opacity-80' : 'opacity-50'}`}>
                  ({t.count})
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === 'cases' ? (
              <motion.div
                key="cases"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  {cases.map((project) => (
                    <CaseCard key={project.slug} project={project} />
                  ))}
                </motion.div>

                <VibraRecorrencia />
              </motion.div>
            ) : (
              <motion.div
                key="galeria"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <GaleriaTecnica onOpen={setLightboxIndex} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-[#1c1d1e]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sora text-[#F35901] text-[13px] uppercase tracking-[-0.02em] mb-2">
              Tem um projeto?
            </p>
            <h3
              className="font-roboto font-normal text-white uppercase"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 42px)', letterSpacing: '-0.04em', lineHeight: '1.05' }}
            >
              Vamos construir juntos
            </h3>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] rounded-[14px] px-8 py-[16px] hover:bg-[#d94e00] transition-colors flex-shrink-0"
          >
            Solicitar orçamento
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Lightbox (Galeria Técnica) ────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galeriaTecnica}
            title="Galeria Técnica"
            category="Execução em campo"
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
