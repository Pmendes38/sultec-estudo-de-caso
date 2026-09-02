import type { Metadata } from 'next'
import { ChecklistLanding } from '@/components/checklists/ChecklistLanding'

export const metadata: Metadata = {
  title: 'Identifique os custos ocultos do seu próximo projeto | Sultec',
  description: 'Baixe gratuitamente o Checklist de Custos Ocultos da Sultec e revise escopo, materiais, responsabilidades e critérios de entrega antes de contratar.',
  alternates: { canonical: '/checklist-custos-ocultos' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Identifique os custos ocultos do seu próximo projeto | Sultec',
    description: 'Um checklist com 16 pontos para revisar sua proposta de infraestrutura antes da assinatura.',
    url: '/checklist-custos-ocultos',
    type: 'website',
  },
}

export default function ChecklistCustosOcultosPage() {
  return <ChecklistLanding campaign="checklist_custos_ocultos" />
}
