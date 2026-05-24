'use client'

import { motion } from 'framer-motion'
import { heroContainer, heroItem } from '@/lib/animations'

export function ServicosHero() {
  return (
    <section className="relative bg-dark-900 border-b border-[#F35901]/30 pt-[140px] lg:pt-[180px] pb-20 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
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
            O que entregamos
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
            <span className="block">Uma única empresa.</span>
            <span className="block text-[#F35901]">Toda a infraestrutura.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="font-sora text-muted text-[16px] lg:text-[18px] leading-[1.6] max-w-[680px]"
          >
            Projeto, material e execução sob uma única responsabilidade — do levantamento
            técnico à entrega certificada com laudo Fluke DSX. Sem terceirizar a obra,
            sem repassar o problema.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
