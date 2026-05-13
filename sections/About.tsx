"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Container, Button } from '@/components/ui'
import { institutionalData } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const About: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="empresa"
      className="py-28 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

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
              Sobre a Sultec
            </motion.span>

            <motion.h2
              className="text-5xl lg:text-6xl font-black mt-4 mb-8 leading-tight text-white"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uma empresa construída para entregar <span className="text-orange-500">confiança</span> e alto desempenho.
            </motion.h2>

            <motion.p
              className="text-white/70 leading-relaxed text-lg mb-6 font-light"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {institutionalData.aboutText}
            </motion.p>

            {/* Mission and Vision */}
            <motion.div
              className="space-y-6 mb-10"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-orange-500/40 transition-all">
                <h3 className="text-orange-500 font-bold mb-2">Missão</h3>
                <p className="text-white/70 text-sm">{institutionalData.mission}</p>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 backdrop-blur-md hover:border-orange-500/40 transition-all">
                <h3 className="text-orange-500 font-bold mb-2">Visão</h3>
                <p className="text-white/70 text-sm">{institutionalData.vision}</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              {...scrollAnimation.fadeUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {institutionalData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <h3 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 group-hover:from-orange-300 group-hover:to-orange-500 transition-all">
                    {stat.value}
                  </h3>
                  <p className="text-white/60 mt-2 text-sm font-medium">{stat.label}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-3xl" />

            <motion.img
              src="https://placehold.co/800x900/111111/ffffff?text=ESTRUTURA+SULTEC"
              alt="Empresa Sultec"
              className="rounded-3xl border border-white/10 relative z-10 w-full h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
