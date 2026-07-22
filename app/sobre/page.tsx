import type { Metadata } from 'next'
import { SobreHero } from './_parts/SobreHero'
import { SobreHistoria } from './_parts/SobreHistoria'
import { SobreMVV } from './_parts/SobreMVV'
import { SobreDiferenciais } from './_parts/SobreDiferenciais'
import { SobreMarcas } from './_parts/SobreMarcas'
import { SobreLideranca } from './_parts/SobreLideranca'
import { SobreCTA } from './_parts/SobreCTA'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.sobre)

export default function SobrePage() {
  return (
    <>
      <SobreHero />
      <SobreHistoria />
      <SobreMVV />
      <SobreDiferenciais />
      <SobreMarcas />
      <SobreLideranca />
      <SobreCTA />
    </>
  )
}
