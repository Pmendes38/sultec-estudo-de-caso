import type { Metadata } from 'next'
import { CaptureForm } from './_parts/CaptureForm'
import { CaptureTracking } from './_parts/CaptureTracking'

export const metadata: Metadata = {
  title: 'Checklist de Homologação de Fornecedores — Sultec',
  description:
    'Avalie escopo, capacidade técnica, certificação, documentação, prazo e suporte antes de contratar. Material gratuito da Sultec.',
  openGraph: {
    title: 'Checklist de Homologação Técnica de Fornecedores de Cabeamento Estruturado',
    description:
      'Avalie escopo, capacidade técnica, certificação, documentação, prazo e suporte antes de contratar.',
    url: 'https://sultec.com.br/materiais/checklist-homologacao',
    siteName: 'Sultec',
    locale: 'pt_BR',
    type: 'website',
  },
}

const HIGHLIGHTS = [
  'Oito critérios para avaliar fornecedores.',
  'Perguntas técnicas para a reunião de homologação.',
  'Sinais de risco em propostas e escopos.',
  'Matriz de avaliação com pontuação.',
  'Quadro para comparar até três propostas.',
] as const

export default function ChecklistHomologacaoPage() {
  return (
    <div className="bg-[#070808] text-white min-h-screen">
      <CaptureTracking />

      <section className="pt-[120px] lg:pt-[150px] pb-16 lg:pb-24 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[420px] h-[420px] pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(243,89,1,0.12) 0%, transparent 55%)',
            clipPath: 'polygon(30% 0, 100% 0, 100% 70%)',
          }}
        />

        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,420px)] gap-10 lg:gap-14 items-start">
            <div>
              <p className="font-sora text-[12px] uppercase tracking-[0.12em] text-[#F35901] mb-4">
                Material técnico · Sultec
              </p>
              <h1 className="font-roboto font-bold text-white text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.12] tracking-[-0.04em] max-w-[620px]">
                Checklist de Homologação Técnica de Fornecedores de Cabeamento Estruturado
              </h1>
              <p className="font-sora text-white/90 text-[16px] lg:text-[18px] leading-[1.55] mt-5 max-w-[560px]">
                Avalie escopo, capacidade técnica, certificação, documentação, prazo e suporte
                antes de contratar.
              </p>
              <p className="font-sora text-muted text-[15px] leading-[1.6] mt-4 max-w-[560px]">
                Preencha seus dados para acessar gratuitamente o material desenvolvido pela Sultec
                para profissionais de TI, Engenharia, Infraestrutura e Compras.
              </p>

              <ul className="mt-8 flex flex-col gap-3 max-w-[560px]">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1.5 w-2 h-2 rotate-45 bg-[#F35901] shrink-0"
                    />
                    <span className="font-sora text-white/85 text-[15px] leading-[1.5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}
