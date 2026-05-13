'use client'

import { Container, Card } from '@/components/ui'

export function About() {
  const stats = [
    { value: '+12', label: 'Anos' },
    { value: '+350', label: 'Projetos' },
    { value: '+180', label: 'Clientes' },
    { value: '+25', label: 'Estados' },
  ]

  return (
    <section id="sobre" className="py-20 bg-dark-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="h-96 bg-dark-800 border border-dark-600 rounded-lg flex items-center justify-center">
            <p className="text-white/50 font-sora">Imagem/Vídeo</p>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-sora font-bold text-sm uppercase tracking-wide">
                Sobre a Sultec
              </p>
              <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase mt-4 leading-tight">
                Inovação e Compromisso em Cada Solução.
              </h2>
            </div>

            <p className="text-white/70 font-sora text-lg leading-relaxed">
              A Sultec entrega soluções técnicas e tecnológicas com alto padrão de qualidade, unindo inovação, eficiência operacional e credibilidade para empresas que exigem profissionalismo.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <p className="text-orange-500 font-sora font-bold text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-white/70 font-sora text-sm mt-2">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

