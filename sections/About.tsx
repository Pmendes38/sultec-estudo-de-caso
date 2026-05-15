'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  fadeUp,
  staggerContainer,
  slideLeft,
  buttonHover,
  buttonTap,
  viewportOnce,
} from '@/lib/animations'

const features = [
  {
    icon: '/sultec/icons/quality.svg',
    title: 'Soluções\ncompletas',
    desc: 'Do projeto à implantação e manutenção, cuidamos de tudo.',
  },
  {
    icon: '/sultec/icons/crosshairs.svg',
    title: 'Precisão em\ncada detalhe',
    desc: 'Padrões rigorosos e tecnologia de ponta em cada entrega.',
  },
  {
    icon: '/sultec/icons/growth.svg',
    title: 'Performance\nque conecta',
    desc: 'Infraestrutura preparada para o presente e o futuro do seu negócio.',
  },
]

const statsBar = [
  { icon: '/sultec/icons/clientes.svg', value: '+15 anos', label: 'de experiência' },
  { icon: '/sultec/icons/buildings.svg', value: '+500 projetos', label: 'entregues' },
  { icon: '/sultec/icons/brasil.svg', value: 'Atuação nacional', label: 'em todo o Brasil' },
  { icon: '/sultec/icons/quality.svg', value: 'Qualidade', label: 'e certificações (Fluke)' },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  // Decorative glow drifts subtly with scroll
  const glowY = useTransform(scrollYProgress, [0, 1], ['-10%', '15%'])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Outer rounded card */}
        <div className="relative bg-gradient-to-br from-[#0a0b0c] via-[#0d0e10] to-[#0a0b0c] border border-[#1c1d1e] rounded-[40px] lg:rounded-[60px] p-8 lg:p-14 overflow-hidden">

          {/* Subtle decorative orange glow — parallax */}
          <motion.div
            className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)',
              y: glowY,
              willChange: 'transform',
            }}
          />

          {/* Main grid: text left, video right */}
          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start mb-12">

            {/* LEFT — slides in from the left on scroll */}
            <motion.div
              className="flex flex-col gap-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Heading — Titulo 2: Roboto Bold ~64/60 LS -7% (reduced for video balance) */}
              <motion.h2
                variants={fadeUp}
                className="font-roboto font-bold text-white"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 64px)',
                  lineHeight: '0.95',
                  letterSpacing: '-0.07em',
                  willChange: 'transform, opacity',
                }}
              >
                <span className="block lg:whitespace-nowrap">Conectividade que</span>
                <span className="block lg:whitespace-nowrap">
                  <span className="text-[#F35901]">move</span> o seu negócio.
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="font-sora text-[#ABADAB] leading-[1.55]"
                style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', letterSpacing: '-0.02em', maxWidth: '480px' }}
              >
                Conheça nossos projetos, nossa expertise técnica e o padrão de qualidade que entrega segurança, performance e eficiência para empresas em todo o Brasil.
              </motion.p>

              {/* Button */}
              <motion.a
                href="#sobre"
                variants={fadeUp}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="self-start inline-flex items-center gap-3 font-sora text-white text-[15px] border-[3px] border-[#F35901] rounded-[14px] px-7 py-[14px] hover:bg-[#F35901]/10 transition-colors"
              >
                Saiba mais sobre a Sultec
                <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }}>
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.a>

              {/* 3 Features */}
              <motion.div
                className="grid grid-cols-3 gap-6 mt-4 pt-6 border-t border-white/5"
                variants={staggerContainer}
              >
                {features.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex flex-col gap-3">
                    <div className="w-10 h-10 relative flex-shrink-0">
                      <Image src={f.icon} alt="" fill className="object-contain" />
                    </div>
                    <p className="font-sora text-white text-[15px] font-normal leading-[1.25] whitespace-pre-line tracking-[-0.02em]">
                      {f.title}
                    </p>
                    <p className="font-sora text-[#ABADAB] text-[13px] leading-[1.5] tracking-[-0.01em]">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT — Video player mockup */}
            <motion.div
              className="relative"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="relative bg-[#1a1b1d] border-[3px] border-[#F35901] rounded-[30px] lg:rounded-[50px] overflow-hidden aspect-video shadow-[0_0_60px_rgba(243,89,1,0.15)]">

                {/* Soft white wash inside to mimic the Figma look */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/20" />

                {/* Center play */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
                  <p className="font-sora text-white/70 text-2xl tracking-[0.05em]">VIDEO AQUI</p>
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(243,89,1,0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="w-16 h-16 bg-[#F35901] rounded-full flex items-center justify-center hover:bg-[#d14d01] shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-6 py-3 flex items-center gap-3">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="font-sora text-white text-xs">0:00 / 1:35</span>
                  <div className="flex-1 h-[3px] bg-white/20 rounded-full">
                    <div className="w-0 h-full bg-[#F35901] rounded-full" />
                  </div>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            className="relative bg-[#141416] border border-[#262727] rounded-[24px] lg:rounded-[40px] px-6 lg:px-10 py-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportOnce}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {statsBar.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`flex items-center gap-4 ${
                    i < statsBar.length - 1 ? 'lg:border-r lg:border-white/15 lg:pr-6' : ''
                  }`}
                >
                  <div className="w-11 h-11 flex-shrink-0 relative">
                    <Image src={s.icon} alt="" fill className="object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sora text-white text-[15px] font-normal leading-tight tracking-[-0.02em]">
                      {s.value}
                    </p>
                    <p className="font-sora text-[#ABADAB] text-[13px] tracking-[-0.01em] leading-snug">
                      {s.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
