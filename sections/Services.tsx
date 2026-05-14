'use client'

import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Soluções Tecnológicas',
    desc: 'Tecnologia de ponta aplicada para impulsionar resultados.',
    img: '/sultec/cards/solucoes-tecnologicas.jpg',
  },
  {
    id: 2,
    title: 'Serviços Técnicos',
    desc: 'Execução técnica com qualidade, segurança e conformidade.',
    img: '/sultec/cards/servicos-tecnicos.jpg',
  },
  {
    id: 3,
    title: 'Projetos Corporativos',
    desc: 'Projetos personalizados para empresas de todos os portes.',
    img: '/sultec/cards/projetos-corporativos.jpg',
  },
  {
    id: 4,
    title: 'Infraestrutura',
    desc: 'Soluções robustas em rede, cabeamento e instalações.',
    img: '/sultec/cards/infraestrutura.jpg',
  },
  {
    id: 5,
    title: 'Manutenção',
    desc: 'Planos de manutenção preventiva e corretiva especializados.',
    img: '/sultec/cards/manutencao.jpg',
  },
  {
    id: 6,
    title: 'Suporte Especializado',
    desc: 'Atendimento ágil com equipe técnica altamente qualificada.',
    img: '/sultec/cards/suporte-especializado.jpg',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="group relative rounded-[10px] overflow-hidden border-[3px] border-[#252526] aspect-[727/431] cursor-pointer hover:border-[#F35901]/60 transition-all duration-300">
      <Image
        src={service.img}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Bottom gradient bar — black at the bottom fading up */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[136px]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.7) 70%, transparent 100%)' }}
      />

      {/* Text content + button */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <h3 className="font-sora font-semibold text-white text-[18px] leading-[1.2] tracking-[-0.02em]">
            {service.title}
          </h3>
          <p className="font-sora text-[#ABADAB] text-[13px] leading-[1.4] tracking-[-0.01em]">
            {service.desc}
          </p>
        </div>

        {/* + Button */}
        <div className="flex-shrink-0 w-[52px] h-[52px] border-[3px] border-[#F35901] rounded-[5px] flex items-center justify-center group-hover:bg-[#F35901]/20 transition-colors">
          <span className="text-white text-[28px] font-light leading-none -mt-1">+</span>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="servicos" className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-14">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Nossos Serviços
          </p>
          {/* Titulo 3: Roboto Regular 48/50 LS -5% */}
          <h2
            className="font-roboto font-normal text-white uppercase"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
              lineHeight: '1.042',
              letterSpacing: '-0.05em',
              maxWidth: '600px',
            }}
          >
            Soluções Completas<br />Para Cada Necessidade
          </h2>
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

      </div>
    </section>
  )
}
