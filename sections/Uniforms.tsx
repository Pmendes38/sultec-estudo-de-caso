"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Container, Card, CardContent } from '@/components/ui'
import { uniforms } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const Uniforms: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="uniformes"
      className="py-28 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <motion.span
              className="text-orange-500 font-semibold uppercase tracking-widest text-sm"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Uniformes Corporativos
            </motion.span>

            <motion.h2
              className="text-5xl lg:text-6xl font-black mt-4 mb-8 leading-tight text-white"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Identidade visual <span className="text-orange-500">profissional</span> para equipes técnicas.
            </motion.h2>

            <motion.p
              className="text-white/70 leading-relaxed text-lg mb-10 font-light"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Uniformes desenvolvidos com foco em conforto, apresentação profissional e fortalecimento da identidade corporativa da Sultec.
            </motion.p>

            {/* Uniform Items */}
            <motion.div
              className="space-y-4"
              {...scrollAnimation.staggerContainer}
            >
              {uniforms.map((uniform, index) => (
                <motion.div
                  key={uniform.id}
                  {...scrollAnimation.staggerItem}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:from-orange-500/30 transition-all mt-1">
                    <CheckCircle size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{uniform.name}</h3>
                    <p className="text-white/60 text-sm font-light">{uniform.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-3xl" />

            {/* Image Card */}
            <Card variant="premium" className="relative overflow-hidden">
              <motion.img
                src="https://placehold.co/900x900/111111/ffffff?text=UNIFORMES+SULTEC"
                alt="Uniformes Corporativos Sultec"
                className="w-full h-auto object-cover rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-dark-900/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4"
                >
                  <p className="text-white/90 font-semibold text-sm">
                    ✨ Catálogo Premium
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
