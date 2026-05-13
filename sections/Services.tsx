"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import {
  Wrench,
  Cpu,
  Building2,
  Shield,
  Zap,
  Headphones,
} from 'lucide-react'
import { Container, Card, CardContent, Button } from '@/components/ui'
import { services } from '@/data/content'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench size={40} />,
  Cpu: <Cpu size={40} />,
  Building2: <Building2 size={40} />,
  Shield: <Shield size={40} />,
  Zap: <Zap size={40} />,
  Headphones: <Headphones size={40} />,
}

export const Services: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="servicos"
      className="py-28 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          {...scrollAnimation.fadeUp}
        >
          <motion.span
            className="text-orange-500 font-semibold uppercase tracking-widest text-sm"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Serviços
          </motion.span>

          <motion.h2
            className="text-5xl lg:text-6xl font-black mt-4 mb-6 text-white"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções completas para empresas modernas.
          </motion.h2>

          <motion.p
            className="text-white/70 text-lg leading-relaxed font-light"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Estrutura técnica, soluções inteligentes e atendimento profissional para diferentes demandas corporativas.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          {...scrollAnimation.staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              {...scrollAnimation.staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                variant="dark"
                className="h-full hover:border-orange-500/40 transition-all duration-300 group"
              >
                <CardContent className="p-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 text-orange-500 flex items-center justify-center mb-8 group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all">
                    {iconMap[service.icon]}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all group-hover:text-orange-400">
                    Saiba mais
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          {...scrollAnimation.fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" variant="outline" className="rounded-2xl">
            Ver todos os serviços
            <ChevronRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
