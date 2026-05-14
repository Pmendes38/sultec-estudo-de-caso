'use client'

import Image from 'next/image'

export function CTA() {
  return (
    <section
      id="contato"
      className="relative bg-[#070808] pt-0 pb-20 lg:pb-28 overflow-visible"
    >
      {/* Main CTA body — relative container for overlays */}
      <div className="relative min-h-[480px] lg:min-h-[540px]">

        {/* LEFT: Orange radial glow — fills left half */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-[55%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 75% at 30% 50%, rgba(243,89,1,0.60) 0%, rgba(182,67,1,0.30) 28%, rgba(122,45,1,0.12) 55%, transparent 78%)',
          }}
        />

        {/* PATTERN LINES — circuit lines confined to the glow area only */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-[55%] pointer-events-none z-10"
          style={{
            maskImage:
              'radial-gradient(ellipse 55% 65% at 30% 50%, black 25%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 55% 65% at 30% 50%, black 25%, transparent 75%)',
          }}
        >
          <Image
            src="/sultec/patterns/pattern-lines.png"
            alt=""
            fill
            className="object-contain object-left opacity-95"
            priority={false}
          />
        </div>

        {/* TOP RIGHT: small orange dot grid — only in corner, away from glow */}
        <div
          className="absolute right-0 top-0 w-[280px] lg:w-[340px] h-[120px] lg:h-[160px] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #F35901 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
            opacity: 0.75,
            maskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
          }}
        />

        {/* S asset — large, top aligned with the orange divider (just above
            CTA), right edge stops before the heading starts */}
        <div className="absolute -top-[160px] lg:-top-[180px] left-1/2 lg:left-[10%] -translate-x-1/2 lg:translate-x-0 w-[400px] lg:w-[520px] h-[460px] lg:h-[600px] pointer-events-none z-20">
          <Image
            src="/sultec/patterns/asset-logo-sultec.png"
            alt=""
            fill
            className="object-contain"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-14 pt-16 lg:pt-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 min-h-[360px]">

            {/* Spacer for the bigger S on the left */}
            <div className="hidden lg:block lg:w-[24%] flex-shrink-0" />

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
