'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroContainer, heroItem, buttonHover, buttonTap } from '@/lib/animations'

const stats = [
  { icon: '/sultec/icons/projetos.svg', value: '+500', label: 'PROJETOS' },
  { icon: '/sultec/icons/local.svg', value: 'ATENDIMENTO', label: 'NACIONAL' },
  { icon: '/sultec/icons/pessoas.svg', value: 'EQUIPE', label: 'ESPECIALIZADA' },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Subtle parallax: bg scrolls slightly slower than the page
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative w-full overflow-hidden bg-[#070808] border-b border-[#F35901]/30"
      style={{ paddingTop: '100px' }}
    >
      {/* Background image — parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, willChange: 'transform' }}>
        <Image
          src="/sultec/bg-home2.jpg"
          alt=""
          fill
          priority
          quality={92}
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070808] from-30% via-[#070808]/85 via-55% to-transparent to-90%" />
      </motion.div>

      {/* Content with stagger entrance */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-24">
        <motion.div
          className="flex flex-col gap-7 max-w-[920px]"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Heading — Titulo 1 */}
          <motion.h1
            variants={heroItem}
            className="font-roboto-condensed font-bold uppercase text-white"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 72px)',
              lineHeight: '1.14',
              letterSpacing: '0',
              willChange: 'transform, opacity',
            }}
          >
            <span className="block">Tecnologia, estrutura e</span>
            <span className="block text-[#F35901]">excelência operacional.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="font-sora font-normal text-white leading-[1.5] mt-1"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              letterSpacing: '-0.05em',
              maxWidth: '560px',
              willChange: 'transform, opacity',
            }}
          >
            Soluções tecnológicas e serviços especializados para empresas que exigem qualidade, segurança e alto desempenho.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={heroItem} className="flex flex-wrap gap-5 mt-3">
            <motion.a
              href="#contato"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="inline-flex items-center gap-3 font-sora text-white text-[16px] font-normal bg-[#F35901] rounded-[10px] px-9 py-[18px] hover:bg-[#d14d01] transition-colors"
            >
              Falar com especialista
              <motion.svg width="16" height="16" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }}>
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="inline-flex items-center gap-3 font-sora text-white text-[16px] font-normal border-[3px] border-[#F35901] rounded-[10px] px-9 py-[16px] hover:bg-[#F35901]/10 transition-colors"
            >
              Ver soluções
              <motion.svg width="16" height="16" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }}>
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </motion.a>
          </motion.div>

          {/* Stats bar */}
          <motion.div variants={heroItem} className="mt-12 pt-8 border-t border-white/15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 + i * 0.08 }}
                  className={`flex items-center gap-4 ${
                    i < stats.length - 1 ? 'sm:border-r sm:border-white/15 sm:pr-5' : ''
                  }`}
                >
                  <div className="w-[42px] h-[42px] flex-shrink-0 relative">
                    <Image src={stat.icon} alt="" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">
                      {stat.value}
                    </p>
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
