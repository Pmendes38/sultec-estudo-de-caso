'use client'

import { useState } from 'react'
import Image from 'next/image'

type Certification = {
  id: string
  eyebrow: string
  titleLineOne: string
  titleLineTwo: string
  titleAccent: string
  description: string
  benefits: string[]
  tags: string[]
}

const certifications: Certification[] = [
  {
    id: 'fluke',
    eyebrow: 'Fluke Networks · Certificação Técnica',
    titleLineOne: 'Certificação Fluke Networks.',
    titleLineTwo: 'O padrão que grandes operações',
    titleAccent: 'exigem.',
    description: 'A certificação Fluke Networks é o padrão internacional para cabeamento estruturado em ambientes corporativos, industriais e missão crítica. Cada ponto entregue pela Sultec é testado e documentado pelo Fluke DSX-8000, um dos certificadores mais avançados do mercado e disponível em poucas empresas da região Sul.',
    benefits: [
      'Laudos digitais ponto a ponto, com rastreabilidade total da estrutura entregue',
      'Conformidade com ANSI/TIA-568, ISO/IEC 11801 e ABNT NBR 14565',
      'Garantia de fabricante preservada em toda a instalação certificada',
      'Padrão técnico exigido por operações de médio e grande porte',
    ],
    tags: ['TIA-568', 'ISO 11801', 'ABNT 14565'],
  },
  {
    id: 'furukawa',
    eyebrow: 'Furukawa · Soluções Certificadas',
    titleLineOne: 'Parceria Furukawa.',
    titleLineTwo: 'Soluções certificadas em',
    titleAccent: 'fibra óptica.',
    description: 'Implantação de soluções Furukawa Laserway e cabeamento óptico de alto desempenho, com garantia estendida de fabricante e suporte técnico especializado. Projetos dimensionados para alta densidade, baixa latência e expansão sustentada.',
    benefits: [
      'Garantia estendida Furukawa em toda a malha de fibra óptica',
      'Soluções Laserway para operações com alta densidade de pontos',
      'Projeto e instalação por equipe certificada pelo fabricante',
      'Documentação técnica completa e suporte pós-entrega',
    ],
    tags: ['LASERWAY', 'GPON', 'OS2 / OM4'],
  },
  {
    id: 'fs',
    eyebrow: 'FS · Infraestrutura Óptica',
    titleLineOne: 'Soluções FS.',
    titleLineTwo: 'Conectividade óptica de',
    titleAccent: 'alto desempenho.',
    description: 'Trabalhamos com soluções FS para infraestrutura óptica e de conectividade — fibra, transceivers e componentes de rede com alta disponibilidade e excelente relação custo-benefício, dimensionados para projetos de qualquer porte.',
    benefits: [
      'Portfólio óptico completo: fibra, transceivers e acessórios de rede',
      'Alta disponibilidade e custo-benefício para projetos de qualquer porte',
    ],
    tags: ['FIBRA', 'CONECTIVIDADE', 'FS'],
  },
]

export function FlukeCertification() {
  const [activeId, setActiveId] = useState(certifications[0].id)
  const active = certifications.find((c) => c.id === activeId) ?? certifications[0]

  return (
    <section id="fluke" className="defer-render bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="relative overflow-hidden rounded-[40px] lg:rounded-[60px] border border-[#1c1d1e]">
          <Image src="/images/fluke-bg.jpg" alt="" fill sizes="(max-width: 768px) calc(100vw - 40px), 1400px" quality={62} className="object-cover object-center" aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(7,8,8,0.96) 0%, rgba(7,8,8,0.88) 35%, rgba(7,8,8,0.55) 60%, rgba(7,8,8,0.10) 85%, rgba(7,8,8,0) 100%)' }} />
          <div className="absolute -left-40 top-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.10) 0%, transparent 60%)' }} />

          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center p-8 lg:p-14 min-h-[640px]">
            <div className="flex flex-col gap-7 max-w-xl">
              <div className="flex items-center gap-1" role="tablist" aria-label="Selecionar certificação ou ferramenta">
                {certifications.map((cert) => {
                  const isActive = cert.id === activeId
                  return (
                    <button
                      key={cert.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={cert.eyebrow}
                      onClick={() => setActiveId(cert.id)}
                      className="group flex h-11 w-11 items-center justify-center focus:outline-none"
                    >
                      <span className={`relative flex h-3 w-3 items-center justify-center rounded-full ${isActive ? 'bg-[#F35901] shadow-[0_0_14px_rgba(243,89,1,0.6)]' : 'bg-white/20 group-hover:bg-white/40'}`}>
                        {isActive && <span className="absolute inset-[-5px] rounded-full border border-[#F35901]/60" />}
                      </span>
                    </button>
                  )
                })}
                <span className="font-sora text-white/50 text-[11px] uppercase tracking-[0.2em] ml-1">
                  {String(certifications.findIndex((c) => c.id === activeId) + 1).padStart(2, '0')} / {String(certifications.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-col gap-7">
                <p className="font-sora text-[#F35901] text-[14px] tracking-[0.2em] uppercase">{active.eyebrow}</p>
                <h2 className="font-roboto font-bold text-white uppercase" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 52px)', lineHeight: '1.02', letterSpacing: '-0.05em' }}>
                  <span className="block">{active.titleLineOne}</span>
                  <span className="block">{active.titleLineTwo} <span className="text-[#F35901]">{active.titleAccent}</span></span>
                </h2>
                <div className="h-px w-24 bg-[#F35901]/60" />
                <p className="font-sora text-[#ABADAB] leading-[1.6] tracking-[-0.01em]" style={{ fontSize: 'clamp(0.95rem, 1.05vw, 1.0625rem)' }}>{active.description}</p>
                <ul className="flex flex-col gap-3">
                  {active.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F35901]/15 border border-[#F35901]/40">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#F35901" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="font-sora text-white/85 text-[15px] leading-[1.5] tracking-[-0.01em]">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => <span key={tag} className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] font-sora text-white/80 text-[12px] uppercase tracking-[0.12em]">{tag}</span>)}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 bg-[#C84700] rounded-[14px] px-7 py-[14px] font-sora text-white text-[15px] hover:bg-[#A83D01] transition-colors">
                  Solicitar projeto certificado
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="/certificacao" className="inline-flex min-h-12 items-center gap-3 border-[3px] border-[#F35901] rounded-[14px] px-7 py-[12px] font-sora text-white text-[15px] hover:bg-[#F35901]/10 transition-colors">Ver mais sobre certificação</a>
              </div>
            </div>

            <div className="relative hidden lg:block min-h-[520px]">
              <div className="absolute top-2 right-0">
                <div className="flex items-center gap-2 px-5 py-3 rounded-[12px] bg-emerald-700" style={{ boxShadow: '0 0 30px rgba(4,120,87,0.45)' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 9.2L7.5 12.5L14 5.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="font-sora text-white font-bold text-[15px] tracking-wider">PASS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
