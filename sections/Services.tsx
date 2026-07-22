'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const services = [
  {
    id: 1,
    slug: 'solucoes-tecnologicas',
    title: 'Soluções Tecnológicas',
    desc: 'Conectividade empresarial, Wi-Fi corporativo e integração de infraestrutura de TI.',
    img: '/sultec/cards/solucoes-tecnologicas.jpg',
  },
  {
    id: 2,
    slug: 'servicos-tecnicos',
    title: 'Serviços Técnicos',
    desc: 'Instalação de cabeamento estruturado, fibra óptica e identificação de pontos.',
    img: '/sultec/cards/servicos-tecnicos.jpg',
  },
  {
    id: 3,
    slug: 'projetos-corporativos',
    title: 'Projetos Corporativos',
    desc: 'Projeto de rede corporativa com escopo fechado para indústrias e empresas.',
    img: '/sultec/cards/projetos-corporativos.jpg',
  },
  {
    id: 4,
    slug: 'infraestrutura',
    title: 'Infraestrutura',
    desc: 'Infraestrutura de TI: cabeamento, racks, elétrica e CFTV corporativo.',
    img: '/sultec/cards/infraestrutura.jpg',
  },
  {
    id: 5,
    slug: 'manutencao',
    title: 'Manutenção',
    desc: 'Manutenção preventiva e corretiva de infraestrutura de rede.',
    img: '/sultec/cards/manutencao.jpg',
  },
  {
    id: 6,
    slug: 'suporte',
    title: 'Suporte Especializado',
    desc: 'Suporte técnico para infraestrutura de TI com SLA definido.',
    img: '/sultec/cards/suporte-especializado.jpg',
  },
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[10px] overflow-hidden border-[3px] border-[#252526] aspect-[727/431] cursor-pointer hover:border-[#F35901]/60 transition-colors duration-300"
      style={{ willChange: 'transform' }}
    >
      <Image
        src={service.img}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Bottom gradient bar */}
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

        {/* + Button — micro rotation on group hover */}
        <motion.div
          className="flex-shrink-0 w-[52px] h-[52px] border-[3px] border-[#F35901] rounded-[5px] flex items-center justify-center group-hover:bg-[#F35901]/20 transition-colors"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white text-[28px] font-light leading-none -mt-1">+</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="servicos" className="bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header — fade up on scroll */}
        <motion.div
          className="flex flex-col gap-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Nossas Soluções
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-roboto font-normal text-white uppercase"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
              lineHeight: '1.042',
              letterSpacing: '-0.05em',
              willChange: 'transform, opacity',
            }}
          >
            <span className="block lg:whitespace-nowrap">Soluções Completas</span>
            <span className="block lg:whitespace-nowrap">Para Cada Necessidade</span>
          </motion.h2>
        </motion.div>

        {/* Grid 3x2 — staggered card reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((s) => (
            <Link key={s.id} href={`/servicos/${s.slug}`} className="block">
              <ServiceCard service={s} />
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
