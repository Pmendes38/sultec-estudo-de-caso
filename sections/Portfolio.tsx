import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Cabeamento estruturado',
    desc: 'Instalação e certificação de redes para indústrias e grandes operações.',
    img: '/sultec/cards/cabeamento-estruturado.jpg',
  },
  {
    title: 'Infraestrutura de rede',
    desc: 'Projetos completos de conectividade com materiais de alto padrão e execução certificada.',
    img: '/sultec/cards/infraestrutura-de-rede.jpg',
  },
  {
    title: 'Data Centers',
    desc: 'Montagem e estruturação de ambientes críticos com segurança e precisão técnica.',
    img: '/sultec/cards/data-centers.jpg',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative rounded-[10px] overflow-hidden border-[3px] border-[#252526] aspect-[727/431] cursor-pointer hover:border-[#F35901]/60 transition-colors duration-300">
      <Image
        src={project.img}
        alt={project.title}
        fill
        sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1280px) 50vw, 33vw"
        quality={72}
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[136px]"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.7) 70%, transparent 100%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <h3 className="font-sora font-semibold text-white text-[18px] leading-[1.2] tracking-[-0.02em]">{project.title}</h3>
          <p className="font-sora text-[#ABADAB] text-[13px] leading-[1.4] tracking-[-0.01em]">{project.desc}</p>
        </div>
        <div className="flex-shrink-0 w-[52px] h-[52px] border-[3px] border-[#F35901] rounded-[5px] flex items-center justify-center group-hover:bg-[#F35901]/20 transition-colors">
          <span className="text-white text-[28px] font-light leading-none -mt-1">+</span>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="defer-render bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">Portfólio</p>
            <h2
              className="font-roboto font-normal text-white uppercase"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 48px)', lineHeight: '1.042', letterSpacing: '-0.05em' }}
            >
              <span className="block lg:whitespace-nowrap">Cases Que Refletem</span>
              <span className="block lg:whitespace-nowrap">Nossa Excelência</span>
            </h2>
          </div>
          <a
            href="/cases"
            className="self-start lg:self-auto inline-flex min-h-12 items-center gap-3 font-sora text-white text-[15px] border-[3px] border-[#F35901] rounded-[14px] px-7 py-[14px] hover:bg-[#F35901]/10 transition-colors"
          >
            Ver todos os cases
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link key={p.title} href="/cases" className="block">
              <ProjectCard project={p} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
