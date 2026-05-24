'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '@/lib/animations'

export function SobreCTA() {
  return (
    <section className="bg-dark-900 py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <motion.div
          className="relative bg-gradient-to-br from-[#0a0b0c] via-[#0d0e10] to-[#0a0b0c] border border-[#F35901]/30 rounded-[32px] lg:rounded-[48px] p-10 lg:p-16 overflow-hidden text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(243,89,1,0.10) 0%, transparent 65%)',
            }}
          />

          <motion.p
            variants={fadeUp}
            className="relative font-sora text-[#F35901] text-[14px] tracking-[0.05em] uppercase mb-4"
          >
            Próximo passo
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="relative font-roboto font-bold text-white max-w-[760px] mx-auto"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 44px)',
              lineHeight: '1.1',
              letterSpacing: '-0.04em',
            }}
          >
            Quer conversar com nosso time?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative font-sora text-muted text-[16px] leading-[1.6] mt-5 max-w-[560px] mx-auto"
          >
            Agendamos uma visita técnica sem custo, levantamos o escopo e devolvemos
            uma proposta com prazo, material e execução já fechados.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-9 inline-block">
            <motion.div whileHover={buttonHover} whileTap={buttonTap}>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 font-sora text-white text-[15px] bg-[#F35901] hover:bg-orange-600 rounded-[14px] px-8 py-[16px] transition-colors"
              >
                Solicitar visita técnica
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
