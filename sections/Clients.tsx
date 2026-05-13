'use client'

import { Container } from '@/components/ui'

export function Clients() {
  const logos = [
    { name: 'Ambev', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=Ambev' },
    { name: 'Nestlé', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=Nestlé' },
    { name: 'Bradesco', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=Bradesco' },
    { name: 'Grupo GPS', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=GPS' },
    { name: 'Vale', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=Vale' },
    { name: 'WEG', url: 'https://via.placeholder.com/150x50/111111/ffffff?text=WEG' },
  ]

  return (
    <section id="clientes" className="py-20 bg-dark-900">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-sora font-bold text-sm uppercase tracking-wide">
            Clientes e Parceiros
          </p>
          <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase mt-4">
            Empresas Que Confiam Na Sultec.
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-dark-800 border border-dark-600 rounded-lg p-6 flex items-center justify-center h-24 hover:border-orange-500/50 transition-all"
            >
              <p className="text-white/70 font-sora font-bold text-center text-sm">
                {logo.name}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto">
          <p className="text-orange-500 text-4xl mb-4">"</p>
          <p className="text-white/80 font-sora text-lg md:text-xl leading-relaxed mb-6">
            A Sultec transformou completamente nossa operação. Com soluções inovadoras e um time especializado, conseguimos aumentar nossa eficiência em 40%.
          </p>
          <p className="text-white font-sora font-bold">João Silva</p>
          <p className="text-white/70 font-sora text-sm">Diretor de Operações, Empresa XYZ</p>
        </div>
      </Container>
    </section>
  )
}
