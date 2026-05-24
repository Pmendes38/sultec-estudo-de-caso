'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

type Pillar = {
  label: string
  title: string
  body: string
  bullets?: string[]
}

const pillars: Pillar[] = [
  {
    label: 'Missão',
    title: 'Infraestrutura com previsibilidade.',
    body: 'Entregar projetos de cabeamento estruturado e redes com excelência técnica, prazo cumprido e previsibilidade total — projeto, material e execução em uma única responsabilidade.',
  },
  {
    label: 'Visão',
    title: 'Ser referência no Sul do Brasil.',
    body: 'Tornar-se a empresa de referência em cabeamento estruturado e infraestrutura B2B no Sul do Brasil, reconhecida pela combinação rara de rigor técnico e clareza comercial.',
  },
  {
    label: 'Valores',
    title: 'O que não negociamos.',
    body: '',
    bullets: [
      'Precisão técnica',
      'Zero retrabalho',
      'Transparência comercial',
      'Entrega completa',
      'Presença em campo',
    ],
  },
]

export function SobreMVV() {
  return (
    <section className="bg-dark-900 border-b border-[#F35901]/30 py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <motion.div
          className="flex flex-col gap-3 mb-12 lg:mb-16 max-w-[760px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Missão, visão e valores
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-roboto font-bold text-white"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.05em',
            }}
          >
            A bússola da operação.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {pillars.map((p) => (
            <motion.article
              key={p.label}
              variants={fadeUp}
              className="group bg-dark-700 border border-[#1c1d1e] hover:border-[#F35901]/60 rounded-2xl p-8 transition-colors duration-300 flex flex-col gap-5"
            >
              <p className="font-sora text-[#F35901] text-[13px] tracking-[0.05em] uppercase">
                {p.label}
              </p>
              <h3 className="font-roboto font-bold text-white text-[24px] lg:text-[26px] leading-[1.15] tracking-[-0.03em]">
                {p.title}
              </h3>
              {p.body && (
                <p className="font-sora text-muted text-[15px] leading-[1.6]">
                  {p.body}
                </p>
              )}
              {p.bullets && (
                <ul className="flex flex-col gap-2.5 mt-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="font-sora text-white text-[15px] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F35901] mt-2 flex-shrink-0" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
