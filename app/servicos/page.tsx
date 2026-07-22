import type { Metadata } from 'next'
import { Clients } from '@/sections'
import { ServicosHero } from './_parts/ServicosHero'
import { ServicosGrid } from './_parts/ServicosGrid'
import { ServicosProcesso } from './_parts/ServicosProcesso'
import { ServicosCTA } from './_parts/ServicosCTA'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.servicos)

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
