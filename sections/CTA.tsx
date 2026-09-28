import Image from 'next/image'

export function CTA() {
  return (
    <section id="contato" className="relative z-0 bg-[#070808] pt-0 pb-12 lg:pb-0 lg:-mt-[90px] overflow-hidden">
      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 lg:-translate-x-[150px]">
        <div aria-hidden className="absolute right-0 top-0 w-[280px] lg:w-[340px] h-[120px] lg:h-[160px] pointer-events-none hidden lg:block" style={{ backgroundImage: 'radial-gradient(circle, #F35901 1.5px, transparent 1.5px)', backgroundSize: '20px 20px', opacity: 0.7, maskImage: 'linear-gradient(to bottom left, black 30%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom left, black 30%, transparent 80%)' }} />

        <div className="relative z-20 pt-4 lg:pt-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div aria-hidden className="hidden lg:flex lg:w-[44%] flex-shrink-0 relative items-center justify-center pointer-events-none lg:h-[520px] xl:h-[600px] 2xl:h-[680px]" style={{ background: 'radial-gradient(ellipse at center, rgba(255, 140, 50, 0.40) 0%, rgba(243, 89, 1, 0.20) 20%, rgba(243, 89, 1, 0.07) 40%, rgba(243, 89, 1, 0.02) 60%, transparent 75%)' }}>
              <div className="absolute z-[5] lg:w-[640px] lg:h-[540px] xl:w-[740px] xl:h-[620px] 2xl:w-[840px] 2xl:h-[700px]">
                <Image src="/sultec/patterns/pattern-lines.png" alt="" fill sizes="840px" className="object-contain mix-blend-screen opacity-90" />
              </div>
              <div className="relative z-10 lg:w-[380px] lg:h-[440px] xl:w-[460px] xl:h-[520px] 2xl:w-[540px] 2xl:h-[620px]">
                <Image src="/sultec/patterns/asset-logo-sultec.png" alt="" fill sizes="540px" className="object-contain" />
              </div>
            </div>

            <div className="flex flex-col 3xl:flex-row 3xl:items-center 3xl:justify-between gap-8 3xl:gap-12 flex-1">
              <div className="flex flex-col gap-5 w-full 3xl:max-w-[600px] flex-1 text-left">
                <h2 className="font-roboto-condensed font-normal text-white uppercase" style={{ fontSize: 'clamp(1.75rem, 4vw, 44px)', lineHeight: '1.18', letterSpacing: '0.02em' }}>
                  <span className="block 3xl:whitespace-nowrap">Vamos Conversar Sobre</span>
                  <span className="block 3xl:whitespace-nowrap text-[#F35901]">O Seu Projeto?</span>
                </h2>
                <p className="font-sora font-normal text-white leading-[1.5]" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.1rem)', letterSpacing: '-0.04em', maxWidth: '520px' }}>
                  Nossa equipe está pronta para entender sua necessidade e apresentar a melhor solução.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-[380px] 3xl:w-[380px] 3xl:flex-shrink-0">
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between gap-3 bg-[#C84700] rounded-[10px] px-6 py-4 font-sora text-white text-[16px] 3xl:text-[18px] font-normal hover:bg-[#A83D01] transition-colors">
                  <span className="flex-1 text-left">Solicitar orçamento</span>
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 ml-2" aria-hidden="true"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between gap-3 bg-transparent border-[3px] border-[#F35901] rounded-[10px] px-6 py-[14px] font-sora text-white text-[16px] 3xl:text-[18px] font-normal hover:bg-[#F35901]/10 transition-colors">
                  <span className="flex-1 text-left">Falar via WhatsApp</span>
                  <Image src="/sultec/icons/whatsapp.svg" alt="" width={24} height={24} className="flex-shrink-0 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
