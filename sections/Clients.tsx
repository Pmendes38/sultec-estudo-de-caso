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
    <section id="diferenciais" className="relative bg-[#070808] pt-20 lg:pt-28 pb-32 overflow-hidden">

      {/* Decorative S asset — bottom left */}
      <div className="absolute -bottom-10 left-0 w-[300px] lg:w-[380px] h-[300px] lg:h-[380px] pointer-events-none opacity-90">
        <Image
          src="/sultec/patterns/asset-logo-sultec.png"
          alt=""
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Diagonal orange accent line — going through the section */}
      <div className="absolute bottom-[110px] left-0 right-0 pointer-events-none">
        <svg className="w-full h-12" viewBox="0 0 1440 50" preserveAspectRatio="none">
          <path d="M0 25 L500 25 L580 5 L1440 5" stroke="#F35901" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-14">

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
            <div className="bg-[#0d0e10] border border-[#1c1d1e] rounded-[14px] p-7 flex flex-col gap-5">
              <span className="text-[#F35901] text-[42px] leading-[0.5] font-roboto font-bold">&ldquo;</span>

              <p className="font-sora text-[#ABADAB] text-[15px] leading-[1.55] tracking-[-0.02em] min-h-[100px]">
                {t.quote}
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#252526] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="text-white text-sm font-semibold font-sora">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-sora text-white text-[14px] font-normal leading-tight">{t.author}</p>
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
                        i === active ? 'w-6 bg-[#F35901]' : 'w-2 bg-white/25 hover:bg-white/45'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Logos grid */}
          <div className="flex flex-col justify-start pt-4 lg:pt-12">
            <div className="grid grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="relative w-full h-16 lg:h-20 opacity-90 hover:opacity-100 transition-opacity"
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
      </div>
    </section>
  )
}
