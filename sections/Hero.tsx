'use client'

import { Container } from '@/components/ui'

export function Hero() {
  const stats = [
    { value: '+12', label: 'ANOS DE MERCADO', icon: '⏰' },
    { value: '+350', label: 'PROJETOS', icon: '📋' },
    { value: 'NACIONAL', label: 'ATENDIMENTO', icon: '📍' },
    { value: '✓', label: 'EQUIPE ESPECIALIZADA', icon: '👥' },
  ]

  return (
    <section className="relative w-full min-h-screen pt-32 flex items-center justify-center overflow-hidden">
      {/* Background Image - 100% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486718448742-165732cd63d5?w=1500&h=900&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay - 45% opacity */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col items-start text-left space-y-8 py-24">
          {/* Title - Split into 2 lines */}
          <div className="space-y-2 max-w-4xl">
            <h1
              className="font-sora font-black text-white uppercase leading-[1.05] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              Tecnologia, Estrutura e
            </h1>
            <h2
              className="font-sora font-black text-orange-500 uppercase leading-[1.05] tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              Excelência Operacional.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-sora font-normal text-white/80 text-lg md:text-xl max-w-2xl">
            Soluções inovadoras que transformam sua estrutura em resultados
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Primary Button */}
            <button
              className="bg-orange-500 text-white px-7 py-3.5 rounded text-base font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
              style={{
                borderRadius: '4px',
              }}
            >
              Falar com especialista →
            </button>
            {/* Secondary Button */}
            <button
              className="bg-transparent border border-white/40 text-white px-7 py-3.5 rounded text-base font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
              style={{
                borderRadius: '4px',
              }}
            >
              Ver soluções →
            </button>
          </div>
        </div>
      </Container>

      {/* Stats Bar - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/20 z-20">
        <Container>
          <div className="flex items-stretch justify-start gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex-1 flex flex-col items-start justify-center py-8 ${
                  index !== stats.length - 1
                    ? 'border-r border-white/15'
                    : ''
                }`}
                style={{
                  paddingLeft: index === 0 ? '0' : '32px',
                  paddingRight: '32px',
                }}
              >
                <div className="text-orange-500 text-2xl mb-2">{stat.icon}</div>
                <p className="text-white font-bold text-lg mb-1">{stat.value}</p>
                <p className="text-white/70 font-sora text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
