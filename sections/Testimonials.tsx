"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Container, Card, CardContent } from '@/components/ui'
import { testimonials } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const Testimonials: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      className="py-28 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          {...scrollAnimation.fadeUp}
        >
          <motion.span
            className="text-orange-500 font-semibold uppercase tracking-widest text-sm"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Credibilidade
          </motion.span>

          <motion.h2
            className="text-5xl lg:text-6xl font-black mt-4 mb-6 text-white"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            O que <span className="text-orange-500">empresas parceiras</span> dizem sobre nós.
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg leading-relaxed font-light"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Confiança, qualidade e profissionalismo que transformam operações.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          {...scrollAnimation.staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              {...scrollAnimation.staggerItem}
              whileHover={{ y: -8 }}
            >
              <Card
                variant="dark"
                className="h-full hover:border-orange-500/40 transition-all duration-300 group"
              >
                <CardContent className="p-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 text-orange-500 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star size={18} fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.p
                    className="text-white/80 leading-relaxed mb-8 font-light flex-1 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    className="border-t border-white/10 pt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <span className="text-orange-500/80 text-sm font-semibold">
                      {testimonial.role}
                    </span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-20 grid lg:grid-cols-4 gap-6 text-center"
          {...scrollAnimation.staggerContainer}
        >
          <motion.div
            {...scrollAnimation.staggerItem}
            className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-3xl font-black text-orange-500">+120</div>
            <div className="text-white/60 text-sm mt-2">Projetos Realizados</div>
          </motion.div>

          <motion.div
            {...scrollAnimation.staggerItem}
            className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-3xl font-black text-orange-500">98%</div>
            <div className="text-white/60 text-sm mt-2">Taxa de Satisfação</div>
          </motion.div>

          <motion.div
            {...scrollAnimation.staggerItem}
            className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-3xl font-black text-orange-500">10+</div>
            <div className="text-white/60 text-sm mt-2">Anos de Experiência</div>
          </motion.div>

          <motion.div
            {...scrollAnimation.staggerItem}
            className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-md"
          >
            <div className="text-3xl font-black text-orange-500">50+</div>
            <div className="text-white/60 text-sm mt-2">Profissionais Especializados</div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
