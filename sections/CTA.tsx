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

        {/* LEFT: Orange radial glow — centered on the S asset (≈30% of section) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-[55%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 75% at 56% 50%, rgba(243,89,1,0.60) 0%, rgba(182,67,1,0.30) 28%, rgba(122,45,1,0.12) 55%, transparent 78%)',
          }}
        />

        {/* PATTERN LINES — circuit lines confined to the glow area only */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 lg:w-[55%] pointer-events-none z-10"
          style={{
            maskImage:
              'radial-gradient(ellipse 55% 65% at 56% 50%, black 25%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 55% 65% at 56% 50%, black 25%, transparent 75%)',
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

        {/* S asset — centered exactly on the orange glow
            (glow center: 56% × 55% ≈ 30.8% horizontal × 50% vertical of section) */}
        <div className="absolute top-1/2 left-1/2 lg:left-[30.8%] -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[620px] h-[560px] lg:h-[700px] pointer-events-none z-20">
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
            <div className="hidden lg:block lg:w-[26%] flex-shrink-0" />

            {/* Center: Heading + subtitle */}
            <div className="flex flex-col gap-5 max-w-[600px] flex-1 lg:pl-[60px]">
              {/* Titulo 6: Roboto Condensed Regular ~44/52 LS 2% (smaller per spec request) */}
              <h2
                className="font-roboto-condensed font-normal text-white uppercase"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 44px)',
                  lineHeight: '1.18',
                  letterSpacing: '0.02em',
                }}
              >
                <span className="block lg:whitespace-nowrap">Vamos Conversar Sobre</span>
                <span className="block lg:whitespace-nowrap text-[#F35901]">O Seu Projeto?</span>
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
