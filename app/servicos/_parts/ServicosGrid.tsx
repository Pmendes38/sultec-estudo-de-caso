'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

type Service = { id: string; title: string; body: string; icon: JSX.Element }

const ICON = {
  className: 'w-7 h-7',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const services: Service[] = [
  {
    id: 'cabeamento-estruturado',
    title: 'Cabeamento Estruturado',
    body: 'Projeto e execução de redes lógicas e elétricas com certificação Fluke DSX e padrão de cabeamento para ambientes críticos.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
        <circle cx="7" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'data-center',
    title: 'Data Center',
    body: 'Montagem, organização e documentação de salas técnicas — racks, climatização, energia, identificação e mapeamento completos.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="13" x2="20" y2="13" />
        <circle cx="7" cy="5.5" r="0.6" fill="currentColor" />
        <circle cx="7" cy="10.5" r="0.6" fill="currentColor" />
        <circle cx="7" cy="15.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'certificacao',
    title: 'Certificação de Rede',
    body: 'Laudos técnicos auditáveis com Fluke DSX, documentação completa por ponto e relatório entregue ao final da obra.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    id: 'projetos-corporativos',
    title: 'Projetos Corporativos',
    body: 'Planejamento de infraestrutura sob medida para indústrias, bancos, cooperativas e operações que não podem parar.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    id: 'manutencao',
    title: 'Manutenção Preventiva',
    body: 'Contratos de manutenção para infraestrutura instalada — inspeções periódicas, ajustes finos e prevenção de falhas.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.4 2.4-2-2 2.4-2.4z" />
      </svg>
    ),
  },
  {
    id: 'suporte',
    title: 'Suporte 24h',
    body: 'Atendimento técnico com SLA definido — zero chamados sem resposta, plantão para operações de missão crítica.',
    icon: (
      <svg viewBox="0 0 24 24" {...ICON}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export function ServicosGrid() {
  return (
    <section className="bg-dark-900 border-b border-[#F35901]/30 py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((s) => (
            <Link key={s.id} href={`/servicos/${s.id}`} className="block h-full">
              <ServiceCard service={s} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-dark-700 border border-[#1c1d1e] hover:border-[#F35901]/60 rounded-2xl p-7 lg:p-8 transition-colors duration-300 flex flex-col gap-5 h-full"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#F35901]/10 text-[#F35901] flex items-center justify-center group-hover:bg-[#F35901]/15 transition-colors">
        {service.icon}
      </div>
      <h3 className="font-sora font-semibold text-white text-[20px] leading-[1.2] tracking-[-0.02em]">
        {service.title}
      </h3>
      <p className="font-sora text-muted text-[15px] leading-[1.6] flex-1">
        {service.body}
      </p>
    </motion.article>
  )
}
