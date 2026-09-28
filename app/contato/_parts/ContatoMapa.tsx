'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?hl=pt-BR&q=Avenida%20Ant%C3%B4nio%20Sachett%2C%20151%20D%2C%20Desbravador%2C%20Chapec%C3%B3%20-%20SC%2C%2089811-396&z=16&output=embed'

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
        >
          <iframe
            src={MAP_EMBED_URL}
            title="Mapa da Sultec em Chapecó"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
