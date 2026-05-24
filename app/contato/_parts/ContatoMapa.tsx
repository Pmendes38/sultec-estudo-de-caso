'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

export function ContatoMapa() {
  return (
    <section className="bg-dark-900 py-20 lg:py-28">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <motion.div
          className="flex flex-col gap-3 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Onde estamos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-roboto font-bold text-white"
            style={{
              fontSize: 'clamp(1.5rem, 2.8vw, 36px)',
              lineHeight: '1.1',
              letterSpacing: '-0.04em',
            }}
          >
            Chapecó/SC — pronto para visita técnica.
          </motion.h2>
        </motion.div>

        <motion.div
          className="relative aspect-[16/9] bg-dark-700 border border-[#1c1d1e] rounded-2xl overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          // TODO: substituir por iframe real do Google Maps com a localização da Sultec
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="w-14 h-14 rounded-full bg-[#F35901]/10 text-[#F35901] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <p className="font-sora text-white text-[15px] tracking-[-0.02em]">
              R. Tomé de Sousa, 113 — Bela Vista, Chapecó/SC
            </p>
            <p className="font-sora text-muted text-[12px] uppercase tracking-[0.1em]">
              Mapa em breve
            </p>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
