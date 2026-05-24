'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

type Diff = { title: string; body: string; icon: JSX.Element }

const ICON_PROPS = {
  className: 'w-7 h-7',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const diffs: Diff[] = [
  {
    title: 'Certificador Fluke DSX',
    body: 'Um dos únicos da região. Equipamento de R$ 90 mil que entrega laudos técnicos auditáveis em cada projeto.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON_PROPS}>
        <path d="M3 12h4l3-7 4 14 3-7h4" />
      </svg>
    ),
  },
  {
    title: 'Zero chamados sem resposta',
    body: 'Toda solicitação de cliente é atendida. Sem caixa-preta, sem fila esquecida, sem ticket abandonado.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON_PROPS}>
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: 'Prazo é compromisso',
    body: 'Cumprimento absoluto dos cronogramas combinados em contrato. Sem aditivos surpresa.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Entrega completa',
    body: 'Projeto, material e execução sob um único responsável. Você fala com uma empresa, não com três fornecedores.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON_PROPS}>
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    ),
  },
]

export function SobreDiferenciais() {
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
            Diferenciais técnicos
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
            O que nos torna <span className="text-[#F35901]">a escolha óbvia.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {diffs.map((d) => (
            <motion.div
              key={d.title}
              variants={fadeUp}
              className="bg-dark-700 border border-[#1c1d1e] hover:border-[#F35901]/60 rounded-2xl p-6 lg:p-7 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F35901]/10 text-[#F35901] flex items-center justify-center mb-5">
                {d.icon}
              </div>
              <h3 className="font-sora font-semibold text-white text-[17px] leading-[1.25] tracking-[-0.02em] mb-2.5">
                {d.title}
              </h3>
              <p className="font-sora text-muted text-[14px] leading-[1.55]">
                {d.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
