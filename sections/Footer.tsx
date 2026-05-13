"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
  ]

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-bold text-lg text-white">SULTEC</span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Soluções tecnológicas profissionais com foco em qualidade, estrutura e credibilidade para sua empresa.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  title={link.label}
                  className="w-10 h-10 rounded-lg bg-white/10 text-white/70 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Navegação</h4>
            <nav className="space-y-3 flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/60 text-sm font-medium">(00) 00000-0000</p>
                  <p className="text-white/40 text-xs">Horário Comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/60 text-sm font-medium">contato@example.com</p>
                  <p className="text-white/40 text-xs">Resposta em 24h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white">Atendimento</h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Conecte-se conosco no WhatsApp para um atendimento ágil e especializado.
            </p>

            <Button className="w-full bg-green-500 hover:bg-green-600 rounded-xl">
              💬 WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="py-8 flex flex-wrap items-center justify-between gap-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/50 text-sm font-medium">
            © {currentYear} Sultec Soluções Tecnológicas. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-white/50 text-sm font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
