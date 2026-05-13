'use client'

import { useState } from 'react'
import { Container, Card, Button } from '@/components/ui'

const projects = [
  {
    id: 1,
    title: 'Projeto Corporativo A',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Projeto Corporativo B',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Projeto Corporativo C',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
]

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <section id="portfolio" className="py-20 bg-dark-900">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <div>
            <p className="text-orange-500 font-sora font-bold text-sm uppercase tracking-wide">
              Portfólio
            </p>
            <h2 className="text-white font-sora font-extrabold text-3xl md:text-4xl uppercase mt-4">
              Projetos Que Refletem Nossa Excelência.
            </h2>
          </div>
          <Button variant="outline">Ver todos os projetos →</Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all rounded-lg flex items-end p-6">
                <div className="absolute top-6 right-6 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  +
                </div>
              </div>
              <h3 className="text-white font-sora font-bold mt-4">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentPage(dot)}
              className={`w-2 h-2 rounded-full transition-all ${
                dot === currentPage
                  ? 'bg-orange-500 w-8'
                  : 'bg-dark-600 hover:bg-dark-500'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
