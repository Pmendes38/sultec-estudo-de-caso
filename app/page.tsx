import type { Metadata } from 'next'
import {
  Hero,
  About,
  Services,
  Portfolio,
  FlukeCertification,
  CTA,
  Clients,
  Atuacao,
} from '@/sections'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.home)

export default function Home() {
  return (
    <div className="bg-[#070808] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FlukeCertification />
      <Clients />
      <Atuacao />
      <CTA />
    </div>
  )
}
