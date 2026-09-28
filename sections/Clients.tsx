'use client'

import { useState } from 'react'
import Image from 'next/image'

const clients = [
  { name: 'JBS', logo: '/sultec/clientes/jbs.png' },
  { name: 'Sicoob', logo: '/sultec/clientes/sicoob.png' },
  { name: 'Cresol', logo: '/sultec/clientes/cresol.svg' },
  { name: 'Aurora', logo: '/sultec/clientes/aurora.png' },
  { name: 'HRO', logo: '/sultec/clientes/hro.png' },
  { name: 'DRV Máquinas', logo: '/sultec/clientes/drv.png' },
  { name: 'Uno', logo: '/sultec/clientes/uno.png' },
  { name: 'Pesacat', logo: '/sultec/clientes/pesacat.png' },
  { name: 'Tozzo', logo: '/sultec/clientes/tozzo.png' },
  { name: 'Uceff', logo: '/sultec/clientes/uceff.png' },
]

const testimonials = [
  { quote: 'A Sultec é nossa parceira estratégica em diversos projetos. Excelência, comprometimento e entrega de verdade.', author: 'Carlos Mendes', role: 'Gerente de TI – Industria' },
  { quote: 'Excelência técnica, prazo cumprido e suporte que faz a diferença. Recomendo a Sultec sem reservas.', author: 'Mariana Rocha', role: 'Diretora de Operações' },
  { quote: 'Fundamental para nossa expansão de infraestrutura. Equipe altamente qualificada e parceira.', author: 'Roberto Lima', role: 'CTO' },
  { quote: 'Transformaram nossos data centers com qualidade impecável. Padrão de mercado.', author: 'Ana Souza', role: 'Gerente de Tecnologia' },
]

export function Clients() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="diferenciais" className="defer-render relative z-10 bg-[#070808] pt-20 lg:pt-24 pb-0">
      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-[540px_1fr] gap-12 xl:gap-16 items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">Clientes e Parceiros</p>
              <h2 className="font-roboto font-normal text-white uppercase" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 48px)', lineHeight: '1.042', letterSpacing: '-0.05em' }}>
                <span className="block lg:whitespace-nowrap">Empresas Que Confiam</span>
                <span className="block lg:whitespace-nowrap">Na Sultec.</span>
              </h2>
            </div>

            <div className="bg-[#0d0e10] border border-[#1c1d1e] rounded-[14px] p-7 flex flex-col gap-5 max-w-[420px]">
              <span className="text-[#F35901] text-[42px] leading-[0.5] font-roboto font-bold">&ldquo;</span>
              <p className="font-sora text-[#ABADAB] text-[15px] leading-[1.55] tracking-[-0.02em] min-h-[100px]">{t.quote}</p>
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
                <div className="flex gap-0.5" role="group" aria-label="Selecionar depoimento">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Depoimento ${i + 1}`}
                      aria-pressed={i === active}
                      className="h-11 w-11 flex items-center justify-center"
                    >
                      <span className={`block h-2 rounded-full transition-all ${i === active ? 'w-6 bg-[#F35901]' : 'w-2 bg-white/25'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden mt-8 lg:mt-0"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div className="flex w-max animate-marquee gap-12 lg:gap-16 items-center">
              {[...clients, ...clients].map((client, i) => (
                <div key={`${client.name}-${i}`} className="relative h-24 lg:h-28 w-[180px] lg:w-[220px] flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                  <Image src={client.logo} alt={client.name} fill sizes="(max-width: 1023px) 180px, 220px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-10 h-[24px]" aria-hidden="true">
          <svg className="absolute inset-x-0 top-0 w-full h-[24px] pointer-events-none" viewBox="0 0 1500 24" preserveAspectRatio="none">
            <path d="M0 20 L380 20 L500 6 L1500 6" stroke="#F35901" strokeWidth="2.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  )
}
