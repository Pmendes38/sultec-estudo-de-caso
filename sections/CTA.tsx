'use client'

import Image from 'next/image'

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070808] pb-20 lg:pb-28"
    >
      {/* Top notched strip — slightly lighter dark grey with diagonal cut on the left */}
      <div
        className="relative h-[60px] lg:h-[80px] bg-[#0d0e10]"
        style={{
          clipPath:
            'polygon(0 0, 28% 0, 33% 100%, 100% 100%, 100% 0, 0 0)',
        }}
      />

      {/* Main CTA body */}
      <div className="relative">

        {/* LEFT: Pattern image (circuit + stars) */}
        <div className="absolute inset-y-0 left-0 w-1/2 lg:w-[55%] pointer-events-none">
          <Image
            src="/sultec/patterns/pattern-1.png"
            alt=""
            fill
            className="object-cover object-left"
            quality={90}
          />
        </div>

        {/* LEFT: Orange radial glow on top of pattern */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 lg:w-[55%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(243,89,1,0.55) 0%, rgba(182,67,1,0.25) 30%, rgba(122,45,1,0.10) 55%, transparent 78%)',
          }}
        />

        {/* TOP RIGHT: Orange dot grid pattern */}
        <div
          className="absolute right-0 top-0 w-[280px] lg:w-[340px] h-[140px] lg:h-[180px] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #F35901 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
            opacity: 0.7,
            maskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-14 pt-16 lg:pt-20 pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">

            {/* Spacer (left half) — content starts at center */}
            <div className="hidden lg:block lg:w-[18%]" />

            {/* Center: Heading + subtitle */}
            <div className="flex flex-col gap-5 max-w-[560px] flex-1">
              <h2
                className="font-roboto-condensed font-bold text-white uppercase leading-[1.1]"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                Vamos Conversar Sobre<br />
                <span className="text-[#F35901]">O Seu Projeto?</span>
              </h2>
              <p
                className="font-sora font-normal text-white leading-[1.5]"
                style={{
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '480px',
                }}
              >
                Nossa equipe está pronta para entender sua necessidade<br className="hidden lg:block" />
                {' '}e apresentar a melhor solução.
              </p>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex flex-col gap-4 w-full lg:w-[400px] lg:flex-shrink-0">
              <a
                href="tel:+5511999999999"
                className="flex items-center justify-between gap-3 bg-[#F35901] rounded-[10px] px-7 py-5 font-sora text-white text-[18px] font-normal hover:bg-[#d14d01] transition-colors"
              >
                Solicitar orçamento
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-transparent border-[3px] border-[#F35901] rounded-[10px] px-7 py-[18px] font-sora text-white text-[18px] font-normal hover:bg-[#F35901]/10 transition-colors"
              >
                Falar via WhatsApp
                <Image
                  src="/sultec/icons/whatsapp.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
