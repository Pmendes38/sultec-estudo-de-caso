'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, viewportOnce } from '@/lib/animations'

export function SobreLideranca() {
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
            Liderança
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
            Quem responde pela <span className="text-[#F35901]">entrega.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-14 items-center">

          {/* Photo placeholder */}
          <motion.div
            className="relative w-full aspect-[3/4] max-w-[420px] mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-dark-700 border border-[#1c1d1e]"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            // TODO: substituir por foto real do Naiguel
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-roboto font-bold text-[#F35901]/40 text-[120px] leading-none">NS</p>
                <p className="font-sora text-muted text-[12px] mt-3 uppercase tracking-[0.1em]">
                  Foto em breve
                </p>
              </div>
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(243,89,1,0.10) 0%, transparent 60%)',
              }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-roboto font-bold text-white text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.04em]">
                Naiguel Sabini
              </h3>
              <p className="font-sora text-[#F35901] text-[16px] mt-2 tracking-[-0.02em]">
                Sócio-fundador e Diretor
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="font-sora text-muted text-[16px] leading-[1.65]">
              Naiguel lidera a operação comercial da Sultec desde o primeiro dia. É quem
              senta com o cliente no levantamento técnico, defende o escopo no contrato e
              garante que o que foi vendido chegue executado em campo, sem ruído entre
              comercial e técnico.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sora text-muted text-[16px] leading-[1.65]">
              Acompanha pessoalmente as obras de maior complexidade e trata cada nova
              demanda com a mesma proximidade. É assim que a confiança se constrói na
              execução e se transforma em relações duradouras, novas demandas e indicações.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
