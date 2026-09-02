'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, heroContainer, heroItem } from '@/lib/animations'

export function SobreHero() {
  return (
    <section className="relative bg-dark-900 border-b border-[#F35901]/30 pt-[140px] lg:pt-[180px] pb-20 lg:pb-28 overflow-hidden">
      {/* Decorative orange glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <motion.div
          className="flex flex-col gap-6 max-w-[920px]"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={heroItem}
            className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase"
          >
            Sobre nós
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-roboto-condensed font-bold uppercase text-white"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 72px)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
            }}
          >
            <span className="block">Quem é a</span>
            <span className="block text-[#F35901]">Sultec</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-sora text-white text-[22px] lg:text-[28px] leading-[1.25] tracking-[-0.03em] max-w-[720px]"
          >
            Estrutura que conecta. Fluxo que não falha.
          </motion.p>

          <motion.p
            variants={heroItem}
            className="font-sora text-muted text-[15px] lg:text-[16px] leading-[1.6] max-w-[680px]"
          >
            Somos uma empresa de cabeamento estruturado e infraestrutura de redes B2B sediada
            em Chapecó/SC. Atendemos indústrias, bancos, cooperativas e operações que não
            podem parar. Projeto, material e execução em uma única entrega certificada.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
