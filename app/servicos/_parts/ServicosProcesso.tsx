'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

type Step = { n: string; title: string; body: string }

const steps: Step[] = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Visita técnica sem custo, levantamento de necessidade e mapeamento da infraestrutura existente.',
  },
  {
    n: '02',
    title: 'Projeto',
    body: 'Proposta detalhada com escopo, materiais, prazo e investimento — tudo na mesa antes de assinar.',
  },
  {
    n: '03',
    title: 'Execução',
    body: 'Obra conduzida pela nossa equipe, com acompanhamento em campo e zero terceirização do que importa.',
  },
  {
    n: '04',
    title: 'Entrega certificada',
    body: 'Testes Fluke DSX em cada ponto, laudo técnico assinado e documentação completa entregue ao cliente.',
  },
]

export function ServicosProcesso() {
  return (
    <section className="bg-dark-900 border-b border-[#F35901]/30 py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        <motion.div
          className="flex flex-col gap-3 mb-14 lg:mb-20 max-w-[760px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Como trabalhamos
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
            Quatro etapas. <span className="text-[#F35901]">Zero surpresa.</span>
          </motion.h2>
        </motion.div>

        <motion.ol
          className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-[#F35901]/0 via-[#F35901]/40 to-[#F35901]/0"
          />

          {steps.map((step) => (
            <motion.li key={step.n} variants={fadeUp} className="relative flex flex-col gap-4">
              <div className="relative w-14 h-14 rounded-full bg-dark-700 border border-[#F35901] text-[#F35901] flex items-center justify-center font-sora font-semibold text-[15px] tracking-[-0.02em] z-10">
                {step.n}
              </div>
              <h3 className="font-sora font-semibold text-white text-[18px] leading-[1.2] tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="font-sora text-muted text-[14px] leading-[1.6]">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>

      </div>
    </section>
  )
}
