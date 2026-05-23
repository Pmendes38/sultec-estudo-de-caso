'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

type Project = {
  id: string
  title: string
  category: string
  location: string
  year: string
  description: string
  thumbnail: string
  images: string[]
  status: 'catalogando' | 'completo'
}

const projects: Project[] = [
  {
    id: 'encubatorio-soledade',
    title: 'Encubatório Soledade',
    category: 'Obra Industrial',
    location: 'Soledade',
    year: '2026',
    description: 'Construção e infraestrutura de grande complexo industrial com estrutura metálica de longo vão, incluindo toda a infraestrutura elétrica e de redes embarcada na obra.',
    thumbnail: '/sultec/cases/encubatorio-soledade/001.jpg',
    images: Array.from({ length: 8 }, (_, i) =>
      `/sultec/cases/encubatorio-soledade/${String(i + 1).padStart(3, '0')}.jpg`
    ),
    status: 'catalogando',
  },
  {
    id: 'cabeamento-industrial',
    title: 'Cabeamento Estruturado Industrial',
    category: 'Cabeamento Estruturado',
    location: 'A confirmar',
    year: '2026',
    description: 'Projeto completo de cabeamento estruturado em ambiente industrial de grande porte — distribuição de fibra óptica, organização de racks, bandejas e identificação de pontos.',
    thumbnail: '/sultec/cases/cabeamento-industrial/001.jpg',
    images: Array.from({ length: 20 }, (_, i) =>
      `/sultec/cases/cabeamento-industrial/${String(i + 1).padStart(3, '0')}.jpg`
    ),
    status: 'catalogando',
  },
  {
    id: 'infraestrutura-redes',
    title: 'Infraestrutura de Redes & TI',
    category: 'Infraestrutura de TI',
    location: 'Múltiplos clientes',
    year: '2025–2026',
    description: 'Conjunto de projetos de infraestrutura de redes: instalação de racks, emendas de fibra óptica, bandejas organizadas e mapeamento de cobertura Wi-Fi para ambientes corporativos.',
    thumbnail: '/sultec/cases/infraestrutura-redes/003.jpg',
    images: Array.from({ length: 8 }, (_, i) =>
      `/sultec/cases/infraestrutura-redes/${String(i + 1).padStart(3, '0')}.jpg`
    ),
    status: 'catalogando',
  },
]

const CATEGORIES = ['Todos', 'Cabeamento Estruturado', 'Obra Industrial', 'Infraestrutura de TI']

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project
  initialIndex: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(initialIndex)

  const prev = useCallback(
    () => setIdx(i => (i - 1 + project.images.length) % project.images.length),
    [project.images.length]
  )
  const next = useCallback(
    () => setIdx(i => (i + 1) % project.images.length),
    [project.images.length]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/96 flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-4 flex-shrink-0"
        onClick={e => e.stopPropagation()}
      >
        <div>
          <span className="font-sora text-[#F35901] text-[12px] uppercase tracking-wider">
            {project.category}
          </span>
          <p className="font-roboto text-white text-[18px] uppercase tracking-[-0.03em]">
            {project.title}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-sora text-white/40 text-[14px]">
            {idx + 1} / {project.images.length}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#F35901] hover:text-[#F35901] transition-colors"
            aria-label="Fechar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main image */}
      <div
        className="relative flex-1 flex items-center justify-center px-16 min-h-0"
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full"
          >
            <Image
              src={project.images[idx]}
              alt={`${project.title} — foto ${idx + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); prev() }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#F35901] hover:text-[#F35901] transition-colors"
          aria-label="Anterior"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); next() }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#F35901] hover:text-[#F35901] transition-colors"
          aria-label="Próxima"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex-shrink-0 px-5 py-3 flex gap-2 overflow-x-auto scrollbar-hide"
        onClick={e => e.stopPropagation()}
        style={{ scrollbarWidth: 'none' }}
      >
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`relative flex-shrink-0 w-14 h-10 rounded-[6px] overflow-hidden border-2 transition-colors ${
              i === idx ? 'border-[#F35901]' : 'border-white/10 hover:border-white/30'
            }`}
          >
            <Image src={img} alt="" fill sizes="56px" className="object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-[12px] overflow-hidden border-[2px] border-[#1c1d1e] cursor-pointer hover:border-[#F35901]/50 transition-colors duration-300 bg-[#0a0b0b]"
      style={{ willChange: 'transform' }}
      onClick={onOpen}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="font-sora text-[11px] uppercase tracking-wider bg-[#F35901] text-white px-2.5 py-1 rounded-[6px] leading-none">
            {project.category}
          </span>
          {project.status === 'catalogando' && (
            <span className="font-sora text-[11px] uppercase tracking-wider bg-black/70 border border-white/15 text-white/60 px-2.5 py-1 rounded-[6px] leading-none whitespace-nowrap">
              Em catalogação
            </span>
          )}
        </div>

        {/* Image count */}
        <div className="absolute bottom-3 right-3">
          <span className="font-sora text-[12px] text-white/50 bg-black/50 px-2 py-0.5 rounded-md">
            {project.images.length} fotos
          </span>
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
        <p className="font-sora text-[#666867] text-[13px] leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex items-center gap-1.5 font-sora text-[#F35901] text-[13px] group-hover:gap-2.5 transition-all duration-300 pt-1 border-t border-[#1c1d1e]">
          <span>Ver galeria de fotos</span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#F35901" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjetosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null)

  const filtered =
    activeFilter === 'Todos'
      ? projects
      : projects.filter(p => p.category === activeFilter)

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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-sora text-[13px] text-[#898A89] mb-8">
            <a href="/" className="hover:text-white transition-colors">Início</a>
            <span className="text-[#333]">/</span>
            <span className="text-[#F35901]">Projetos</span>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="font-sora text-[#F35901] text-[14px] tracking-[-0.04em] uppercase mb-3"
            >
              Portfólio & Casos
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-roboto font-normal text-white uppercase mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 68px)',
                lineHeight: '1.02',
                letterSpacing: '-0.05em',
              }}
            >
              <span className="block">Projetos que</span>
              <span className="block">refletem nossa</span>
              <span className="block text-[#F35901]">excelência</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sora text-[#898A89] text-[16px] leading-relaxed max-w-[560px]"
            >
              Cada projeto é resultado de planejamento técnico, materiais de alto padrão e
              execução certificada. Estamos catalogando nosso portfólio para apresentar
              cada obra com o detalhe que ela merece.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(cat => {
              const count = cat === 'Todos' ? projects.length : projects.filter(p => p.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-sora text-[14px] px-5 py-2.5 rounded-[10px] border-2 transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[#F35901] border-[#F35901] text-white'
                      : 'border-[#252526] text-[#898A89] hover:border-[#F35901]/40 hover:text-white'
                  }`}
                >
                  {cat}
                  <span className={`ml-2 text-[12px] ${activeFilter === cat ? 'opacity-80' : 'opacity-50'}`}>
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Projects grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setLightbox({ project, index: 0 })}
              />
            ))}
          </motion.div>

          {/* Cataloging notice */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 p-6 rounded-[12px] border border-[#1c1d1e] bg-[#0a0b0b] flex items-start gap-5"
          >
            <div className="w-1 h-full min-h-[60px] bg-[#F35901] rounded-full flex-shrink-0" />
            <div>
              <h4 className="font-sora text-white text-[15px] mb-1.5">Portfólio em expansão</h4>
              <p className="font-sora text-[#666867] text-[14px] leading-relaxed max-w-[700px]">
                Estamos catalogando todos os nossos projetos com informações detalhadas — cliente, escopo,
                prazo e resultados. Em breve cada case terá sua página completa.
                Entre em contato para conhecer nossa capacidade técnica.
              </p>
            </div>
          </motion.div>

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
            href="/#contato"
            className="inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] rounded-[14px] px-8 py-[16px] hover:bg-[#d94e00] transition-colors flex-shrink-0"
          >
            Solicitar orçamento
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            project={lightbox.project}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
