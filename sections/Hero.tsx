'use client'

import Image from 'next/image'

const stats = [
  { icon: '/sultec/icons/seguranca.svg', value: '+12 ANOS', label: 'DE MERCADO' },
  { icon: '/sultec/icons/projetos.svg', value: '+350', label: 'PROJETOS' },
  { icon: '/sultec/icons/local.svg', value: 'ATENDIMENTO', label: 'NACIONAL' },
  { icon: '/sultec/icons/pessoas.svg', value: 'EQUIPE', label: 'ESPECIALIZADA' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#070808] border-b border-[#F35901]/30"
      style={{ paddingTop: '100px' }}
    >
      {/* Background image - takes the full hero, fades to dark on the left */}
      <div className="absolute inset-0">
        <Image
          src="/sultec/bg-home2.jpg"
          alt=""
          fill
          priority
          quality={92}
          className="object-cover object-right"
        />
        {/* Left-side gradient — strong dark to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070808] from-30% via-[#070808]/85 via-55% to-transparent to-90%" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-8 lg:px-14 py-20 lg:py-24">
        <div className="flex flex-col gap-7 max-w-[760px]">

          {/* Heading */}
          <h1
            className="font-roboto-condensed font-bold uppercase leading-[0.95] text-white"
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Tecnologia, estrutura e<br />
            <span className="text-[#F35901]">Excelência Operacional.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-sora font-semibold text-white leading-[1.4] mt-1"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              letterSpacing: '-0.05em',
              maxWidth: '560px',
            }}
          >
            Soluções tecnológicas e serviços especializados para empresas que exigem qualidade, segurança e alto desempenho.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 font-sora text-white text-[16px] font-normal bg-[#F35901] rounded-[10px] px-9 py-[18px] hover:bg-[#d14d01] transition-colors"
            >
              Falar com especialista
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 font-sora text-white text-[16px] font-normal border-[3px] border-[#F35901] rounded-[10px] px-9 py-[16px] hover:bg-[#F35901]/10 transition-colors"
            >
              Ver soluções
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-12 pt-8 border-t border-white/15">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 ${
                    i < stats.length - 1 ? 'lg:border-r lg:border-white/15 lg:pr-5' : ''
                  }`}
                >
                  <div className="w-[42px] h-[42px] flex-shrink-0 relative">
                    <Image src={stat.icon} alt="" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">
                      {stat.value}
                    </p>
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
