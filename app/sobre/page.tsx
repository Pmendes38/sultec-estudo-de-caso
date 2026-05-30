import type { Metadata } from 'next'
import { SobreHero } from './_parts/SobreHero'
import { SobreHistoria } from './_parts/SobreHistoria'
import { SobreMVV } from './_parts/SobreMVV'
import { SobreDiferenciais } from './_parts/SobreDiferenciais'
import { SobreMarcas } from './_parts/SobreMarcas'
import { SobreLideranca } from './_parts/SobreLideranca'
import { SobreCTA } from './_parts/SobreCTA'

export const metadata: Metadata = {
  title: 'Sobre — Sultec Soluções Tecnológicas',
  description:
    'Quem é a Sultec: empresa de Chapecó/SC especializada em cabeamento estruturado e infraestrutura de redes B2B, com precisão técnica, prazos cumpridos e entrega completa.',
}

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
