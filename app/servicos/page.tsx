import type { Metadata } from 'next'
import { Clients } from '@/sections'
import { ServicosHero } from './_parts/ServicosHero'
import { ServicosGrid } from './_parts/ServicosGrid'
import { ServicosProcesso } from './_parts/ServicosProcesso'
import { ServicosCTA } from './_parts/ServicosCTA'

export const metadata: Metadata = {
  title: 'Serviços — Sultec Soluções Tecnológicas',
  description:
    'Cabeamento estruturado, data center, certificação Fluke DSX, projetos corporativos, manutenção preventiva e suporte 24h. Tudo sob uma única responsabilidade.',
}

export default function ServicosPage() {
  return (
    <>
      <ServicosHero />
      <ServicosGrid />
      <ServicosProcesso />
      <Clients />
      <ServicosCTA />
    </>
  )
}
