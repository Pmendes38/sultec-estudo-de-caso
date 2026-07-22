import type { Metadata } from 'next'
import { ContatoHero } from './_parts/ContatoHero'
import { ContatoFormInfo } from './_parts/ContatoFormInfo'
import { ContatoMapa } from './_parts/ContatoMapa'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.contato)

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Início', path: '/' },
          { name: 'Contato', path: '/contato' },
        ])}
      />
      <ContatoHero />
      <ContatoFormInfo />
      <ContatoMapa />
    </>
  )
}
