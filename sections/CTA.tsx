"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const CTA: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section
      id="contato"
      className="py-32 bg-gradient-to-r from-orange-500 via-orange-550 to-orange-600 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0,_transparent_70%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          className="text-center"
          {...scrollAnimation.fadeUp}
        >
          {/* Headline */}
          <motion.h2
            className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-black"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Vamos construir algo <span className="text-white">profissional</span> para sua empresa.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-black/70 text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Entre em contato com a Sultec e solicite um orçamento personalizado para sua necessidade específica.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-[#121212] text-white rounded-2xl"
            >
              <Phone size={20} />
              Falar no WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-black/20 bg-transparent text-black hover:bg-black/10 rounded-2xl"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            className="space-y-4"
            {...scrollAnimation.fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-black/60 text-sm font-medium">Ou entre em contato por:</p>

            <div className="flex justify-center gap-6 flex-wrap">
              <motion.a
                href="mailto:contato@example.com"
                className="flex items-center gap-2 text-black hover:text-white transition-colors font-semibold group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={20} />
                contato@example.com
              </motion.a>

              <motion.a
                href="tel:+55"
                className="flex items-center gap-2 text-black hover:text-white transition-colors font-semibold group"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={20} />
                (00) 00000-0000
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
