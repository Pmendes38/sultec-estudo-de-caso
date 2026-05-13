"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu, ArrowRight } from 'lucide-react'
import { Container, Button, Badge, Card, CardContent } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const Hero: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#ff6a00_0,_transparent_70%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <Badge icon={<Cpu size={16} />} label="Soluções Tecnológicas Profissionais" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-white"
            >
              Tecnologia, estrutura e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                excelência operacional
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl mb-10 font-light"
            >
              A Sultec entrega soluções técnicas e tecnológicas com alto padrão de qualidade, unindo inovação, eficiência operacional e credibilidade para empresas que exigem profissionalismo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="rounded-2xl">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl"
              >
                Conhecer Serviços
                <ArrowRight size={20} />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-8 mt-16 pt-16 border-t border-white/10"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-orange-500">+120</h3>
                <p className="text-white/50 mt-2 text-sm">Projetos Executados</p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-black text-orange-500">98%</h3>
                <p className="text-white/50 mt-2 text-sm">Satisfação de Clientes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl blur-3xl" />

            {/* Card */}
            <Card variant="premium" className="relative overflow-hidden rounded-3xl border-2 border-orange-500/30 shadow-glow-orange-lg">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="https://placehold.co/600x700/111111/ffffff?text=SULTEC+TECH"
                  alt="Sultec Tecnologia"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </motion.div>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-dark-900/80 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4"
                >
                  <p className="text-white/90 font-semibold text-sm">
                    ✨ Premium Industrial Technology
                  </p>
                </motion.div>
              </div>
            </Card>

            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-orange-500/10 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-orange-500/5 rounded-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
