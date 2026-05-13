'use client'

import { Container, Button } from '@/components/ui'

export function CTA() {
  return (
    <section className="py-20 bg-dark-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Graphic */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg h-80 flex items-center justify-center">
            <div className="text-white font-bold text-6xl opacity-20">SULTEC</div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase leading-tight">
              Vamos Conversar Sobre O Seu Projeto?
            </h2>

            <p className="text-white/70 font-sora text-lg leading-relaxed">
              Estamos prontos para ouvir suas necessidades e propor soluções que transformem sua empresa.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-4">Solicitar orçamento →</Button>
              <Button variant="outline" className="px-8 py-4 gap-2">
                <span>💬</span> Falar via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
