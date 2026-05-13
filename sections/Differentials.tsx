'use client'

import { Container } from '@/components/ui'

const differentials = [
  { label: 'Qualidade', icon: '✓' },
  { label: 'Tecnologia', icon: '⚙' },
  { label: 'Equipe Especializada', icon: '👥' },
  { label: 'Agilidade', icon: '⚡' },
  { label: 'Excelência', icon: '⭐' },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-dark-900">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-sora font-bold text-sm uppercase tracking-wide">
            Nossos Diferenciais
          </p>
          <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase mt-4">
            O Que Nos Torna Referência No Mercado.
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          {differentials.map((diff, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-3xl text-white mb-4">
                {diff.icon}
              </div>
              <p className="text-white font-sora font-bold text-center text-sm md:text-base">
                {diff.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
