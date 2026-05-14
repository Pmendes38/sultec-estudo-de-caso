'use client'

import { useState } from 'react'
import Image from 'next/image'

const clients = [
  { name: 'JBS', logo: '/sultec/clientes/jbs.png' },
  { name: 'Sicoob', logo: '/sultec/clientes/sicoob.png' },
  { name: 'Aurora', logo: '/sultec/clientes/aurora.png' },
  { name: 'HRO', logo: '/sultec/clientes/hro.png' },
  { name: 'DRV Máquinas', logo: '/sultec/clientes/drv.png' },
  { name: 'Uno', logo: '/sultec/clientes/uno.png' },
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
      className="relative bg-[#070808] pt-20 lg:pt-24 overflow-hidden"
    >
      <div className="relative max-w-[1500px] mx-auto px-8 lg:px-14">

        {/* TOP CONTENT — heading/testimonial + logos */}
        <div className="grid lg:grid-cols-[460px_1fr] gap-12 xl:gap-20 items-start">

          {/* Left: Heading + Testimonial card */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
                Clientes e Parceiros
              </p>
              <h2
                className="font-roboto-condensed font-bold text-white uppercase leading-[1.0]"
                style={{
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Empresas Que Confiam<br />Na Sultec.
              </h2>
            </div>

            {/* Testimonial card */}
            <div className="bg-[#0d0e10] border border-[#1c1d1e] rounded-[14px] p-7 flex flex-col gap-5 max-w-[420px]">
              <span className="text-[#F35901] text-[42px] leading-[0.5] font-roboto font-bold">
                &ldquo;
              </span>

              <p className="font-sora text-[#ABADAB] text-[15px] leading-[1.55] tracking-[-0.02em] min-h-[100px]">
                {t.quote}
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#252526] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="text-white text-sm font-semibold font-sora">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sora text-white text-[14px] font-normal leading-tight">
                      {t.author}
                    </p>
                    <p className="font-sora text-[#ABADAB] text-[12px] mt-0.5">{t.role}</p>
                  </div>
                </div>

                {/* Pagination dots */}
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Depoimento ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === active
                          ? 'w-6 bg-[#F35901]'
                          : 'w-2 bg-white/25 hover:bg-white/45'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logos grid */}
          <div className="flex flex-col justify-start pt-4 lg:pt-12">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="relative w-full max-w-[140px] h-14 lg:h-16 opacity-95 hover:opacity-100 transition-opacity"
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
          </div>
        </div>

        {/* TRANSITION AREA — diagonal line + S asset */}
        <div className="relative mt-14 lg:mt-20 h-[180px] lg:h-[220px]">

          {/* Orange diagonal step-line — goes left-bottom to right-top */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1500 220"
            preserveAspectRatio="none"
          >
            {/* Left horizontal segment (lower) */}
            <line x1="0" y1="120" x2="380" y2="120" stroke="#F35901" strokeWidth="2.5" />
            {/* Diagonal (rises right) */}
            <line x1="380" y1="120" x2="540" y2="40" stroke="#F35901" strokeWidth="2.5" />
            {/* Right horizontal segment (upper) */}
            <line x1="540" y1="40" x2="1500" y2="40" stroke="#F35901" strokeWidth="2.5" />
          </svg>

          {/* S asset — bottom-left, large, partly extending below */}
          <div
            className="absolute -bottom-2 -left-4 lg:-left-2 w-[260px] lg:w-[340px] h-[280px] lg:h-[360px] pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <Image
              src="/sultec/patterns/asset-logo-sultec.png"
              alt=""
              fill
              className="object-contain object-bottom-left"
              priority={false}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
