import type { Metadata } from 'next'
import { EbookAccess } from './_parts/EbookAccess'

export const metadata: Metadata = {
  title: 'Material liberado — Checklist de Homologação | Sultec',
  description:
    'Acesse e baixe o Checklist de Homologação Técnica de Fornecedores de Cabeamento Estruturado da Sultec.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ChecklistAcessoPage() {
  return (
    <div className="bg-[#070808] text-white min-h-screen pt-[120px] lg:pt-[150px]">
      <EbookAccess />
    </div>
  )
}
