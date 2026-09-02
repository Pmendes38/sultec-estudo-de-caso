'use client'

import Image from 'next/image'
import { CAMPAIGNS, type ChecklistCampaign } from '@/lib/leads/checklist-campaigns'
import { ChecklistCaptureForm } from './ChecklistCaptureForm'

const CONTENT: Record<ChecklistCampaign, {
  eyebrow: string
  title: string
  subtitle: string
  benefit: string
  image: string
  imageAlt: string
  points: string[]
  proof: string
}> = {
  checklist_expansao_rede: {
    eyebrow: 'CHECKLIST GRATUITO DE EXPANSÃO DE REDE',
    title: 'Sua expansão cabe na rede atual?',
    subtitle: 'Antes de ampliar áreas, instalar novos equipamentos, aumentar a equipe ou abrir uma nova unidade, verifique se a infraestrutura atual consegue suportar o crescimento sem gerar lentidão, interrupções e retrabalho.',
    benefit: 'Receba uma triagem objetiva com 15 pontos para avaliar a capacidade da infraestrutura antes do início da expansão.',
    image: '/sultec/cards/infraestrutura-de-rede.jpg',
    imageAlt: 'Infraestrutura de rede com racks e cabeamento organizado',
    points: [
      'Demanda prevista para a expansão',
      'Capacidade física e caminhos para novos cabos',
      'Racks, pontos de distribuição e backbone',
      'Uplinks, capacidade PoE e cobertura de Wi-Fi',
      'Continuidade da operação, testes e documentação',
    ],
    proof: 'Uma expansão segura começa com visibilidade sobre a infraestrutura existente. A Sultec reúne planejamento, material e execução técnica para ajudar sua operação a crescer com previsibilidade.',
  },
  checklist_custos_ocultos: {
    eyebrow: 'CHECKLIST GRATUITO PARA REVISÃO DE PROJETOS',
    title: 'Identifique os custos ocultos do seu próximo projeto',
    subtitle: 'Antes de aprovar uma proposta de infraestrutura, descubra quais itens indefinidos podem reaparecer como aditivos, atrasos, retrabalho ou despesas não previstas.',
    benefit: 'Receba um checklist com 16 pontos para revisar escopo, materiais, responsabilidades, testes e critérios de entrega antes da contratação.',
    image: '/images/fluke-bg.jpg',
    imageAlt: 'Equipamento técnico usado na análise e certificação de infraestrutura',
    points: [
      'Itens incluídos e excluídos do orçamento',
      'Materiais, quantidades e infraestrutura de passagem',
      'Acessórios, terminações, organização e PoE',
      'Testes, certificação, identificação e documentação',
      'Garantia, pendências, mobilizações e aditivos',
    ],
    proof: 'Uma proposta comparável precisa deixar responsabilidades e critérios de entrega claros. A Sultec ajuda empresas a transformar escopo técnico em execução acompanhada e previsível.',
  },
}

export function ChecklistLanding({ campaign }: { campaign: ChecklistCampaign }) {
  const content = CONTENT[campaign]
  const config = CAMPAIGNS[campaign]
  return (
    <div className="bg-[#070808] text-white min-h-screen">
      <section className="pt-[120px] lg:pt-[150px] pb-16 lg:pb-20 relative overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none opacity-80" style={{ background: 'linear-gradient(135deg, rgba(243,89,1,0.14), transparent 58%)', clipPath: 'polygon(38% 0, 100% 0, 100% 70%)' }} />
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(390px,460px)] gap-10 lg:gap-16 items-start">
            <div className="min-w-0">
              <p className="font-sora text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#F35901] mb-5">{content.eyebrow}</p>
              <h1 className="font-roboto font-bold text-white text-[36px] sm:text-[48px] lg:text-[62px] leading-[1.02] tracking-[-0.055em] max-w-[700px]">{content.title}</h1>
              <p className="font-sora text-white/85 text-[16px] lg:text-[18px] leading-[1.6] mt-6 max-w-[680px]">{content.subtitle}</p>
              <div className="mt-7 border-l-2 border-[#F35901] bg-[#101111] px-5 py-4 max-w-[650px]"><p className="font-sora text-white text-[14px] leading-[1.6]">{content.benefit}</p></div>
              <div className="relative aspect-[16/8] mt-8 overflow-hidden rounded-2xl border border-[#252526] bg-[#101111]">
                <Image src={content.image} alt={content.imageAlt} fill priority className="object-cover opacity-75" sizes="(max-width: 1024px) 100vw, 700px" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070808]/80 via-[#070808]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4"><span className="font-sora text-[10px] uppercase tracking-[0.16em] text-white/75">Sultec · análise técnica</span><span aria-hidden className="text-[#F35901] text-2xl">↗</span></div>
              </div>
            </div>
            <ChecklistCaptureForm campaign={campaign} />
          </div>
        </div>
      </section>

      <section className="border-t border-[#1c1d1e] py-16 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
          <div><p className="font-sora text-[#F35901] text-[12px] uppercase tracking-[0.16em] mb-3">O que você vai revisar</p><h2 className="font-roboto font-bold text-white text-[30px] lg:text-[42px] leading-[1.05] tracking-[-0.045em]">Clareza antes da decisão.</h2></div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">{content.points.map((point, index) => <li key={point} className="flex items-start gap-3"><span className="font-roboto text-[#F35901] text-[18px] leading-none mt-0.5">0{index + 1}</span><span className="font-sora text-[#ABADAB] text-[14px] leading-[1.55]">{point}</span></li>)}</ul>
        </div>
      </section>

      <section className="border-t border-[#1c1d1e] py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-14 text-center"><p className="font-sora text-[#F35901] text-[12px] uppercase tracking-[0.16em] mb-4">Credibilidade Sultec</p><p className="font-roboto text-white text-[24px] sm:text-[30px] leading-[1.25] tracking-[-0.03em]">{content.proof}</p><p className="font-sora text-[#666867] text-[12px] mt-6">Você receberá somente o checklist desta campanha. Seus dados serão usados conforme a Política de Privacidade.</p></div>
      </section>
    </div>
  )
}
