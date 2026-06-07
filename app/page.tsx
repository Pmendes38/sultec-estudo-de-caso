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

export default function Home() {
  return (
    <main className="bg-[#070808] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FlukeCertification />
      <Clients />
      <Atuacao />
      <CTA />
    </main>
  )
}
