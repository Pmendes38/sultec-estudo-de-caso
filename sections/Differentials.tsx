"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Zap,
  Users,
  Shield,
  Target,
} from 'lucide-react'
import { Container } from '@/components/ui'
import { differentials } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy size={32} />,
  Zap: <Zap size={32} />,
  Users: <Users size={32} />,
  Shield: <Shield size={32} />,
  Target: <Target size={32} />,
}

export const Differentials: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="diferenciais"
      className="py-28 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

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
            Diferenciais
          </motion.span>

          <motion.h2
            className="text-5xl lg:text-6xl font-black mt-4 mb-6 text-white"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            O que nos torna <span className="text-orange-500">diferentes</span>
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg leading-relaxed font-light"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Soluções inovadoras, equipe especializada e compromisso com excelência operacional em cada projeto.
          </motion.p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          {...scrollAnimation.staggerContainer}
        >
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.id}
              {...scrollAnimation.staggerItem}
              className="group"
            >
              <motion.div
                className="h-full bg-gradient-to-br from-dark-400/50 to-dark-500/30 border border-orange-500/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-md"
                whileHover={{
                  borderColor: 'rgba(255, 106, 0, 0.4)',
                  backgroundColor: 'rgba(18, 18, 18, 0.8)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 flex items-center justify-center mb-6 group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {iconMap[diff.icon]}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 leading-relaxed font-light">
                  {diff.description}
                </p>

                {/* Accent Line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full group-hover:w-16 transition-all" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
