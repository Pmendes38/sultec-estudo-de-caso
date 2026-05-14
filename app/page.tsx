import {
  Hero,
  About,
  Services,
  Portfolio,
  CTA,
  Clients,
} from '@/sections'

export default function Home() {
  return (
    <main className="bg-[#070808] text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <CTA />
    </main>
  )
}
