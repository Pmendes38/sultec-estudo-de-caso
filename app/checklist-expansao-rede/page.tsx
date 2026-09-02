import type { Metadata } from 'next'
import { ChecklistLanding } from '@/components/checklists/ChecklistLanding'

export const metadata: Metadata = {
  title: 'Sua expansão cabe na rede atual? | Sultec',
  description: 'Baixe gratuitamente o Checklist de Expansão de Rede da Sultec e avalie a capacidade da infraestrutura antes de ampliar sua operação.',
  alternates: { canonical: '/checklist-expansao-rede' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sua expansão cabe na rede atual? | Sultec',
    description: 'Uma triagem objetiva com 15 pontos para avaliar sua infraestrutura antes da expansão.',
    url: '/checklist-expansao-rede',
    type: 'website',
  },
}

export default function ChecklistExpansaoRedePage() {
  return <ChecklistLanding campaign="checklist_expansao_rede" />
}
