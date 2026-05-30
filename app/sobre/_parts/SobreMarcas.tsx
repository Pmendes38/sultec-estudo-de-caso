'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

// Marcas e tecnologias trabalhadas pela Sultec.
// Inclui as marcas pedidas (Intelbras, Aruba, Ubiquiti) somadas às que já
// constavam no projeto/proposta (Fluke, Furukawa, FS).
// TODO: substituir os nomes por logos oficiais quando os assets forem fornecidos
// (mesmo padrão visual do carrossel de clientes em /public/sultec/clientes/).
const marcas: { name: string; area: string }[] = [
  { name: 'Intelbras', area: 'CFTV · Redes · Comunicação' },
  { name: 'Aruba', area: 'Switches · Wi-Fi corporativo' },
  { name: 'Ubiquiti', area: 'Wireless · Infraestrutura' },
  { name: 'Furukawa', area: 'Cabeamento · Fibra óptica' },
  { name: 'Fluke', area: 'Certificação técnica' },
  { name: 'FS', area: 'Infraestrutura óptica' },
]

export function SobreMarcas() {
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
            Fornecedores e parceiros
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
            Marcas e tecnologias <span className="text-[#F35901]">utilizadas.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sora text-muted text-[16px] leading-[1.65] mt-1">
            Trabalhamos com fabricantes líderes de mercado para garantir desempenho,
            compatibilidade e garantia de fábrica em cada projeto entregue.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {marcas.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              className="group bg-dark-700 border border-[#1c1d1e] hover:border-[#F35901]/60 rounded-2xl px-5 py-7 flex flex-col items-center justify-center text-center gap-2 transition-colors duration-300"
            >
              <span className="font-roboto font-bold text-white text-[20px] tracking-[-0.03em] group-hover:text-[#F35901] transition-colors">
                {m.name}
              </span>
              <span className="font-sora text-muted text-[11px] leading-[1.4] uppercase tracking-[0.04em]">
                {m.area}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
