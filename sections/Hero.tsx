import Image from 'next/image'

const stats = [
  { icon: '/sultec/icons/projetos.svg', value: '+500', label: 'PROJETOS' },
  { icon: '/sultec/icons/local.svg', value: 'ATENDIMENTO', label: 'NACIONAL' },
  { icon: '/sultec/icons/pessoas.svg', value: 'EQUIPE', label: 'ESPECIALIZADA' },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#070808] border-b border-[#F35901]/30 pt-[100px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/sultec/bg-home2.jpg"
          alt="Ambiente de infraestrutura de redes corporativas — Sultec em Chapecó"
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070808] from-30% via-[#070808]/85 via-55% to-transparent to-90%" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 py-20 lg:py-24">
        <div className="flex flex-col gap-7 max-w-[920px]">
          <h1
            className="font-roboto-condensed font-bold uppercase text-white"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 72px)',
              lineHeight: '1.14',
              letterSpacing: '0',
            }}
          >
            <span className="block">Tecnologia, estrutura e</span>
            <span className="block text-[#F35901]">excelência operacional.</span>
          </h1>

          <p
            className="font-sora font-normal text-white leading-[1.5] mt-1"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              letterSpacing: '-0.05em',
              maxWidth: '560px',
            }}
          >
            Soluções tecnológicas e serviços especializados para empresas que exigem qualidade,
            segurança e alto desempenho.
          </p>

          <div className="flex flex-wrap gap-5 mt-3">
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center gap-3 font-sora text-white text-[16px] font-normal bg-[#C84700] rounded-[10px] px-9 py-[18px] hover:bg-[#A83D01] transition-colors"
            >
              Falar com especialista
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/servicos"
              className="inline-flex min-h-12 items-center gap-3 font-sora text-white text-[16px] font-normal border-[3px] border-[#F35901] rounded-[10px] px-9 py-[16px] hover:bg-[#F35901]/10 transition-colors"
            >
              Ver soluções
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${i < stats.length - 1 ? 'sm:border-r sm:border-white/15 sm:pr-5' : ''}`}
                >
                  <div className="w-[42px] h-[42px] flex-shrink-0 relative">
                    <Image src={stat.icon} alt="" fill sizes="42px" className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">{stat.value}</p>
                    <p className="font-sora font-normal text-white text-[15px] tracking-[-0.04em] uppercase">{stat.label}</p>
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
