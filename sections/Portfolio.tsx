'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  fadeUp,
  staggerContainer,
  buttonHover,
  buttonTap,
  viewportOnce,
} from '@/lib/animations'

const projects = [
  {
    title: 'Cabeamento estruturado',
    desc: 'Instalação e certificação de redes para indústrias e grandes operações.',
    img: '/sultec/cards/cabeamento-estruturado.jpg',
  },
  {
    title: 'Infraestrutura de rede',
    desc: 'Projetos completos de conectividade com materiais de alto padrão e execução certificada.',
    img: '/sultec/cards/infraestrutura-de-rede.jpg',
  },
  {
    title: 'Data Centers',
    desc: 'Montagem e estruturação de ambientes críticos com segurança e precisão técnica.',
    img: '/sultec/cards/data-centers.jpg',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[10px] overflow-hidden border-[3px] border-[#252526] aspect-[727/431] cursor-pointer hover:border-[#F35901]/60 transition-colors duration-300"
      style={{ willChange: 'transform' }}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[136px]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.7) 70%, transparent 100%)' }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <h3 className="font-sora font-semibold text-white text-[18px] leading-[1.2] tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="font-sora text-[#ABADAB] text-[13px] leading-[1.4] tracking-[-0.01em]">
            {project.desc}
          </p>
        </div>
        <motion.div
          className="flex-shrink-0 w-[52px] h-[52px] border-[3px] border-[#F35901] rounded-[5px] flex items-center justify-center group-hover:bg-[#F35901]/20 transition-colors"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white text-[28px] font-light leading-none -mt-1">+</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const [activeDot, setActiveDot] = useState(0)
  const dotsCount = 4

  return (
    <section id="portfolio" className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header row */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex flex-col gap-3">
            <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
              Portfólio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-roboto font-normal text-white uppercase"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
                lineHeight: '1.042',
                letterSpacing: '-0.05em',
                willChange: 'transform, opacity',
              }}
            >
              <span className="block lg:whitespace-nowrap">Projetos Que Refletem</span>
              <span className="block lg:whitespace-nowrap">Nossa Excelência</span>
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            href="#contato"
            className="self-start lg:self-auto inline-flex items-center gap-3 font-sora text-white text-[15px] border-[3px] border-[#F35901] rounded-[14px] px-7 py-[14px] hover:bg-[#F35901]/10 transition-colors"
          >
            Ver todos os projetos
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }}>
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Projects grid — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              aria-label={`Página ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === activeDot ? 'w-8 bg-[#F35901]' : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
