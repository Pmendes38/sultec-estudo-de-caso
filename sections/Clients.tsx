'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const clients = [
  { name: 'JBS', logo: '/sultec/clientes/jbs.png' },
  { name: 'Sicoob', logo: '/sultec/clientes/sicoob.png' },
  { name: 'Aurora', logo: '/sultec/clientes/aurora.png' },
  { name: 'HRO', logo: '/sultec/clientes/hro.png' },
  { name: 'DRV Máquinas', logo: '/sultec/clientes/drv.png' },
  { name: 'Uno', logo: '/sultec/clientes/uno.png' },
  { name: 'Pesacat', logo: '/sultec/clientes/pesacat.png' },
  { name: 'Tozzo', logo: '/sultec/clientes/tozzo.png' },
  { name: 'Uceff', logo: '/sultec/clientes/uceff.png' },
]

const testimonials = [
  {
    quote: 'A Sultec é nossa parceira estratégica em diversos projetos. Excelência, comprometimento e entrega de verdade.',
    author: 'Carlos Mendes',
    role: 'Gerente de TI – Industria',
  },
  {
    quote: 'Excelência técnica, prazo cumprido e suporte que faz a diferença. Recomendo a Sultec sem reservas.',
    author: 'Mariana Rocha',
    role: 'Diretora de Operações',
  },
  {
    quote: 'Fundamental para nossa expansão de infraestrutura. Equipe altamente qualificada e parceira.',
    author: 'Roberto Lima',
    role: 'CTO',
  },
  {
    quote: 'Transformaram nossos data centers com qualidade impecável. Padrão de mercado.',
    author: 'Ana Souza',
    role: 'Gerente de Tecnologia',
  },
]

export function Clients() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section
      id="diferenciais"
      className="relative z-10 bg-[#070808] pt-20 lg:pt-24 pb-0"
    >
      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* TOP CONTENT — heading/testimonial + marquee logos on the right */}
        <div className="grid lg:grid-cols-[540px_1fr] gap-12 xl:gap-16 items-center">

          {/* Left: Heading + Testimonial card */}
          <motion.div
            className="flex flex-col gap-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex flex-col gap-3">
              <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
                Clientes e Parceiros
              </motion.p>
              {/* Titulo 5: Roboto Regular 48/50 LS -5% */}
              <motion.h2
                variants={fadeUp}
                className="font-roboto font-normal text-white uppercase"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
                  lineHeight: '1.042',
                  letterSpacing: '-0.05em',
                }}
              >
                <span className="block lg:whitespace-nowrap">Empresas Que Confiam</span>
                <span className="block lg:whitespace-nowrap">Na Sultec.</span>
              </motion.h2>
            </div>

            {/* Testimonial card — animated quote crossfade */}
            <motion.div
              variants={fadeUp}
              className="bg-[#0d0e10] border border-[#1c1d1e] rounded-[14px] p-7 flex flex-col gap-5 max-w-[420px]"
            >
              <span className="text-[#F35901] text-[42px] leading-[0.5] font-roboto font-bold">
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="font-sora text-[#ABADAB] text-[15px] leading-[1.55] tracking-[-0.02em] min-h-[100px]"
                >
                  {t.quote}
                </motion.p>
              </AnimatePresence>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 rounded-full bg-[#252526] flex-shrink-0 overflow-hidden flex items-center justify-center"
                    >
                      <span className="text-white text-sm font-semibold font-sora">
                        {t.author.charAt(0)}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-sora text-white text-[14px] font-normal leading-tight">
                        {t.author}
                      </p>
                      <p className="font-sora text-[#ABADAB] text-[12px] mt-0.5">{t.role}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Depoimento ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active
                          ? 'w-6 bg-[#F35901]'
                          : 'w-2 bg-white/25 hover:bg-white/45'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — auto-scrolling marquee of logos */}
          <motion.div
            className="relative overflow-hidden mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportOnce}
            style={{
              // Edge fade so logos blend into the bg at the sides
              maskImage:
                'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div className="flex w-max animate-marquee gap-12 lg:gap-16 items-center">
              {/* Render logos twice for seamless infinite loop */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="relative h-24 lg:h-28 w-[180px] lg:w-[220px] flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DIVIDER — orange step-line: animated draw effect */}
        <motion.div
          className="relative mt-8 lg:mt-10 h-[24px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={viewportOnce}
        >
          <motion.svg
            className="absolute inset-x-0 top-0 w-full h-[24px] pointer-events-none"
            viewBox="0 0 1500 24"
            preserveAspectRatio="none"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            }}
          >
            {[
              { d: 'M0 20 L380 20' },
              { d: 'M380 20 L500 6' },
              { d: 'M500 6 L1500 6' },
            ].map((seg, i) => (
              <motion.path
                key={i}
                d={seg.d}
                stroke="#F35901"
                strokeWidth="2.5"
                fill="none"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              />
            ))}
          </motion.svg>
        </motion.div>

      </div>
    </section>
  )
}
