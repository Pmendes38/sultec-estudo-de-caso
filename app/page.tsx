import {
  Hero,
  About,
  Services,
  Portfolio,
  Differentials,
  Clients,
  CTA,
} from '@/sections'

export default function Home() {
  return (
    <main className="bg-dark-900 text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Differentials />
      <Clients />
      <CTA />
    </main>
  )
}
