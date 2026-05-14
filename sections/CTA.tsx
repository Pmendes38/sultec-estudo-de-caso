'use client'

import Image from 'next/image'

export function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30"
    >
      {/* Pattern background — left half */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/sultec/patterns/pattern-1.png"
          alt=""
          fill
          className="object-cover object-left opacity-90"
        />
      </div>

      {/* Orange radial glow — left side */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3/5 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 50%, rgba(243,89,1,0.45) 0%, rgba(182,67,1,0.25) 25%, rgba(122,45,1,0.12) 45%, transparent 70%)',
        }}
      />

      {/* Dot grid — top right corner */}
      <div
        className="absolute right-0 top-0 w-[280px] h-[160px] pointer-events-none opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(243,89,1,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative z-10 max-w-[1500px] mx-auto px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">

          {/* Left: empty space (pattern visible there) */}
          <div className="hidden lg:block lg:w-[20%]" />

          {/* Center: Heading + subtitle */}
          <div className="flex flex-col gap-5 max-w-[560px] flex-1">
            <h2
              className="font-roboto-condensed font-bold text-white uppercase leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', letterSpacing: '-0.01em' }}
            >
              Vamos Conversar Sobre<br />
              <span className="text-[#F35901]">O Seu Projeto?</span>
            </h2>
            <p
              className="font-sora font-normal text-white leading-[1.5]"
              style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)', letterSpacing: '-0.04em', maxWidth: '480px' }}
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
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-transparent border-[3px] border-[#F35901] rounded-[10px] px-7 py-[18px] font-sora text-white text-[18px] font-normal hover:bg-[#F35901]/10 transition-colors"
            >
              Falar via WhatsApp
              <Image src="/sultec/icons/whatsapp.svg" alt="" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
