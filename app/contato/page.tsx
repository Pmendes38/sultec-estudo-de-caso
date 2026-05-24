import type { Metadata } from 'next'
import { ContatoHero } from './_parts/ContatoHero'
import { ContatoFormInfo } from './_parts/ContatoFormInfo'
import { ContatoMapa } from './_parts/ContatoMapa'

export const metadata: Metadata = {
  title: 'Contato — Sultec Soluções Tecnológicas',
  description:
    'Fale com a Sultec: WhatsApp direto, e-mail, endereço em Chapecó/SC e formulário para solicitar visita técnica e orçamento.',
}

export default function ContatoPage() {
  return (
    <>
      <ContatoHero />
      <ContatoFormInfo />
      <ContatoMapa />
    </>
  )
}
