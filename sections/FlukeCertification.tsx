'use client'

import { motion } from 'framer-motion'
import {
  fadeUp,
  staggerContainer,
  slideLeft,
  buttonHover,
  buttonTap,
  viewportOnce,
} from '@/lib/animations'

const benefits = [
  'Laudos digitais ponto a ponto, com rastreabilidade total da estrutura entregue',
  'Conformidade com ANSI/TIA-568, ISO/IEC 11801 e ABNT NBR 14565',
  'Garantia de fabricante preservada em toda a instalação certificada',
  'Padrão técnico exigido por operações de médio e grande porte',
]

const tags = ['TIA-568', 'ISO 11801', 'ABNT 14565']

const testResults = [
  { label: 'WIRE MAP', status: 'PASS' },
  { label: 'LENGTH', status: 'PASS' },
  { label: 'INSERTION LOSS', status: 'PASS' },
  { label: 'NEXT', status: 'PASS' },
  { label: 'RETURN LOSS', status: 'PASS' },
  { label: 'PS NEXT', status: 'PASS' },
]

export function FlukeCertification() {
  return (
    <section
      id="fluke"
      className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        {/* Outer rounded card */}
        <div
          className="relative overflow-hidden rounded-[40px] lg:rounded-[60px] border border-[#1c1d1e]"
          style={{
            backgroundImage: "url('/images/fluke-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Readability gradient — dark on the left, transparent on the right where the device sits */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(7,8,8,0.96) 0%, rgba(7,8,8,0.88) 35%, rgba(7,8,8,0.55) 60%, rgba(7,8,8,0.10) 85%, rgba(7,8,8,0) 100%)',
            }}
          />

          {/* Subtle orange glow */}
          <div
            className="absolute -left-40 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)',
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center p-8 lg:p-14 min-h-[640px]">
            {/* LEFT — content */}
            <motion.div
              className="flex flex-col gap-7 max-w-xl"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p
                variants={fadeUp}
                className="font-sora text-[#F35901] text-[14px] tracking-[0.2em] uppercase"
              >
                Fluke Networks · Certificação Técnica
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-roboto font-bold text-white uppercase"
                style={{
                  fontSize: 'clamp(1.9rem, 3.6vw, 52px)',
                  lineHeight: '1.02',
                  letterSpacing: '-0.05em',
                  willChange: 'transform, opacity',
                }}
              >
                <span className="block">Certificação Fluke Networks.</span>
                <span className="block">
                  O padrão que grandes operações{' '}
                  <span className="text-[#F35901]">exigem.</span>
                </span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-[#F35901]/60"
              />

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-4 font-sora text-[#ABADAB] leading-[1.6] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.0625rem)' }}
              >
                <p>
                  A certificação Fluke Networks é o padrão internacional para
                  cabeamento estruturado em ambientes corporativos, industriais
                  e missão crítica. Cada ponto entregue pela Sultec é testado
                  e documentado pelo Fluke DSX-8000, um dos certificadores
                  mais avançados do mercado e disponível em poucas empresas
                  da região Sul.
                </p>
                <p>
                  Para o gestor de TI, isso significa rastreabilidade técnica
                  completa. Para a empresa, significa conformidade com normas
                  internacionais, garantia de fabricante preservada em toda
                  a malha e uma rede projetada para escalar sem retrabalho.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.ul
                className="flex flex-col gap-3"
                variants={staggerContainer}
              >
                {benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F35901]/15 border border-[#F35901]/40">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 6.2L4.8 8.5L9.5 3.5"
                          stroke="#F35901"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sora text-white/85 text-[15px] leading-[1.5] tracking-[-0.01em]">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Tags */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-2"
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] font-sora text-white/80 text-[12px] uppercase tracking-[0.12em]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.a
                href="#contato"
                variants={fadeUp}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="self-start inline-flex items-center gap-3 font-sora text-white text-[15px] border-[3px] border-[#F35901] rounded-[14px] px-7 py-[14px] hover:bg-[#F35901]/10 transition-colors"
              >
                Solicitar projeto certificado
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  whileHover={{ x: 3 }}
                >
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* RIGHT — floating PASS badge + results card overlaying the device image */}
            <motion.div
              className="relative hidden lg:block min-h-[520px]"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* PASS badge — top right */}
              <div className="absolute top-2 right-0">
                <div
                  className="flex items-center gap-2 px-5 py-3 rounded-[12px] bg-emerald-500"
                  style={{
                    boxShadow: '0 0 30px rgba(16,185,129,0.45)',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 9.2L7.5 12.5L14 5.5"
                      stroke="white"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-sora text-white font-bold text-[15px] tracking-wider">
                    PASS
                  </span>
                </div>
              </div>

              {/* Test results card — bottom right */}
              <div className="absolute bottom-0 right-0 w-full max-w-md overflow-hidden rounded-[20px] bg-[#0a0b0c]/85 backdrop-blur-xl border border-[#262727] shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                  <p className="font-sora text-[#F35901] text-[11px] uppercase tracking-[0.18em]">
                    Fluke Networks · DSX-8000
                  </p>
                  <p className="font-sora text-[#ABADAB] text-[11px] uppercase tracking-wider">
                    TIA Cat 6A Channel
                  </p>
                </div>

                <ul className="divide-y divide-white/5">
                  {testResults.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center justify-between px-5 py-3"
                    >
                      <span className="font-sora text-white/85 text-[13px] uppercase tracking-wider">
                        {row.label}
                      </span>
                      <span className="flex items-center gap-2 font-sora text-emerald-400 font-bold text-[13px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {row.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
