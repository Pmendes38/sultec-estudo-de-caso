"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Container, Card, CardContent, Button } from '@/components/ui'
import { projects } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const Portfolio: React.FC = () => {
  const scrollAnimation = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['Todos', ...new Set(projects.map((p) => p.category))]

  const filteredProjects = selectedCategory && selectedCategory !== 'Todos'
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <section
      id="projetos"
      className="py-28 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
          {...scrollAnimation.fadeUp}
        >
          <div className="flex-1">
            <motion.span
              className="text-orange-500 font-semibold uppercase tracking-widest text-sm"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projetos
            </motion.span>

            <motion.h2
              className="text-5xl lg:text-6xl font-black mt-4 max-w-2xl text-white"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Projetos executados com qualidade e padrão profissional.
            </motion.h2>
          </div>

          <motion.div
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-xl">
              Ver mais projetos
              <ChevronRight size={20} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          {...scrollAnimation.fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                (selectedCategory === null && category === 'Todos') ||
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-glow-orange'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          layout
          {...scrollAnimation.staggerContainer}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:border-orange-500/40 transition-all">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-orange-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="pt-8">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed text-sm mb-6 font-light">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all group-hover:text-orange-400">
                    Saiba mais
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
