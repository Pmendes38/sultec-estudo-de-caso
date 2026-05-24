'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, viewportOnce } from '@/lib/animations'

const milestones = [
  { value: 'R$ 1,3 mi', label: 'em obra entregue no primeiro grande projeto' },
  { value: '3 meses', label: 'de execução, dentro do prazo combinado' },
  { value: '100%', label: 'do crescimento vem por indicação direta' },
]

export function SobreHistoria() {
  return (
    <section className="bg-dark-900 border-b border-[#F35901]/30 py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase"
            >
              Nossa história
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
              Pouco tempo de mercado, <span className="text-[#F35901]">muita tração.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sora text-muted text-[16px] leading-[1.65]">
              A Sultec nasceu em Chapecó/SC há pouco mais de um ano e meio com uma proposta
              clara: entregar infraestrutura de redes sem improviso, sem retrabalho e com
              prazo previsível. O primeiro grande projeto — uma obra industrial de
              <span className="text-white"> R$ 1,3 milhão</span> — foi concluído em apenas
              três meses, dentro do escopo, sem aditivos.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sora text-muted text-[16px] leading-[1.65]">
              Desde então, todo o crescimento da operação aconteceu por
              <span className="text-white"> indicação direta</span> de clientes — o sinal
              mais honesto de que a entrega técnica está alinhada com a expectativa
              comercial.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {milestones.map((m) => (
              <div
                key={m.value}
                className="bg-dark-700 border border-[#1c1d1e] rounded-2xl p-6 lg:p-8"
              >
                <p className="font-roboto font-bold text-[#F35901] text-[40px] lg:text-[48px] leading-none tracking-[-0.04em]">
                  {m.value}
                </p>
                <p className="font-sora text-muted text-[14px] leading-[1.5] mt-3">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
