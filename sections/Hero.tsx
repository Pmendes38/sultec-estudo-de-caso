'use client'

import { Container, Button } from '@/components/ui'

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1486718448742-165732cd63d5?w=1500&h=900&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-900/70" />

      {/* Stats Bar */}
      <div className="absolute top-24 left-0 right-0 border-y border-dark-600">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 py-6 gap-4">
            <div className="text-center">
              <p className="text-orange-500 font-bold text-lg">+12</p>
              <p className="text-white/70 text-xs md:text-sm font-sora">
                ANOS DE MERCADO
              </p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-bold text-lg">+350</p>
              <p className="text-white/70 text-xs md:text-sm font-sora">
                PROJETOS
              </p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-bold text-lg">NACIONAL</p>
              <p className="text-white/70 text-xs md:text-sm font-sora">
                ATENDIMENTO
              </p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-bold text-lg">✓</p>
              <p className="text-white/70 text-xs md:text-sm font-sora">
                EQUIPE ESPECIALIZADA
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 py-24">
          <h1 className="font-sora font-extrabold text-white text-4xl md:text-6xl lg:text-7xl uppercase leading-tight max-w-4xl">
            Tecnologia, Estrutura e
          </h1>
          <h2 className="font-sora font-extrabold text-orange-500 text-4xl md:text-6xl lg:text-7xl uppercase leading-tight max-w-4xl">
            Excelência Operacional.
          </h2>
          <p className="font-sora text-white/80 text-lg md:text-xl max-w-2xl">
            Soluções inovadoras que transformam sua estrutura em resultados
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button className="px-8 py-4">Falar com especialista →</Button>
            <Button variant="outline" className="px-8 py-4">
              Ver soluções →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
