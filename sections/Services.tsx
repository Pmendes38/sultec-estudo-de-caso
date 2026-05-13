'use client'

import { Container, Card, Button } from '@/components/ui'

const services = [
  {
    id: 1,
    title: 'Soluções Tecnológicas',
    description: 'Implementação de tecnologias inovadoras para otimizar processos.',
  },
  {
    id: 2,
    title: 'Serviços Técnicos',
    description: 'Suporte técnico especializado e manutenção preventiva.',
  },
  {
    id: 3,
    title: 'Projetos Corporativos',
    description: 'Desenvolvimento de projetos customizados para sua empresa.',
  },
  {
    id: 4,
    title: 'Infraestrutura',
    description: 'Planejamento e implementação de infraestrutura robusta.',
  },
  {
    id: 5,
    title: 'Manutenção',
    description: 'Manutenção contínua e otimização de sistemas.',
  },
  {
    id: 6,
    title: 'Suporte Especializado',
    description: 'Suporte 24/7 com especialistas qualificados.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-dark-900">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-sora font-bold text-sm uppercase tracking-wide">
            Nossos Serviços
          </p>
          <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase mt-4">
            Soluções Completas Para Cada Necessidade.
          </h2>
        </div>

        {/* Services Grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{service.id}</span>
                  </div>
                  <h3 className="text-white font-sora font-bold text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-sora text-sm">
                    {service.description}
                  </p>
                </div>
                <a href="#" className="text-orange-500 font-sora font-bold text-sm hover:text-orange-600 mt-4 inline-block">
                  Saiba mais →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
