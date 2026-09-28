import Image from 'next/image'

const features = [
  { icon: '/sultec/icons/quality.svg', title: 'Soluções\ncompletas', desc: 'Do projeto à implantação e manutenção, cuidamos de tudo.' },
  { icon: '/sultec/icons/crosshairs.svg', title: 'Precisão em\ncada detalhe', desc: 'Padrões rigorosos e tecnologia de ponta em cada entrega.' },
  { icon: '/sultec/icons/growth.svg', title: 'Performance\nque conecta', desc: 'Infraestrutura preparada para o presente e o futuro do seu negócio.' },
]

const statsBar = [
  { icon: '/sultec/icons/clientes.svg', value: '+15 anos', label: 'de experiência' },
  { icon: '/sultec/icons/buildings.svg', value: '+500 projetos', label: 'entregues' },
  { icon: '/sultec/icons/brasil.svg', value: 'Atuação nacional', label: 'em todo o Brasil' },
  { icon: '/sultec/icons/quality.svg', value: 'Qualidade', label: 'e certificações (Fluke)' },
]

export function About() {
  return (
    <section id="sobre" className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="relative bg-gradient-to-br from-[#0a0b0c] via-[#0d0e10] to-[#0a0b0c] border border-[#1c1d1e] rounded-[40px] lg:rounded-[60px] p-8 lg:p-14 overflow-hidden">
          <div
            className="absolute -right-40 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)' }}
          />
          <div className="relative flex flex-col gap-10 lg:gap-14 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 lg:items-end">
              <h2
                className="font-roboto font-bold text-white"
                style={{ fontSize: 'clamp(2rem, 4.2vw, 64px)', lineHeight: '0.95', letterSpacing: '-0.07em' }}
              >
                <span className="block lg:whitespace-nowrap">Conectividade que</span>
                <span className="block lg:whitespace-nowrap"><span className="text-[#F35901]">move</span> o seu negócio.</span>
              </h2>
              <div className="flex flex-col gap-6">
                <p className="font-sora text-[#ABADAB] leading-[1.6]" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.1rem)', letterSpacing: '-0.02em', maxWidth: '560px' }}>
                  Conheça nossos projetos, nossa expertise técnica e o padrão de qualidade que entrega segurança, performance e eficiência para empresas em todo o Brasil.
                </p>
                <a href="/sobre" className="self-start inline-flex min-h-12 items-center gap-3 font-sora text-white text-[15px] border-[3px] border-[#F35901] rounded-[14px] px-7 py-[14px] hover:bg-[#F35901]/10 transition-colors">
                  Saiba mais sobre a Sultec
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 pt-8 border-t border-white/5">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col gap-3">
                  <div className="w-10 h-10 relative flex-shrink-0"><Image src={f.icon} alt="" fill sizes="40px" className="object-contain" /></div>
                  <p className="font-sora text-white text-[16px] font-normal leading-[1.25] whitespace-pre-line tracking-[-0.02em]">{f.title}</p>
                  <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.5] tracking-[-0.01em]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative bg-[#141416] border border-[#262727] rounded-[24px] lg:rounded-[40px] px-6 lg:px-10 py-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {statsBar.map((s, i) => (
                <div key={s.value} className={`flex items-center gap-4 ${i < statsBar.length - 1 ? 'lg:border-r lg:border-white/15 lg:pr-6' : ''}`}>
                  <div className="w-11 h-11 flex-shrink-0 relative"><Image src={s.icon} alt="" fill sizes="44px" className="object-contain" /></div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sora text-white text-[15px] font-normal leading-tight tracking-[-0.02em]">{s.value}</p>
                    <p className="font-sora text-[#ABADAB] text-[13px] tracking-[-0.01em] leading-snug">{s.label}</p>
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
