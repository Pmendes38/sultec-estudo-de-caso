"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Uniformes', href: '#uniformes' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-900/70 backdrop-blur-xl border-b border-orange-500/10 transition-all duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="font-bold text-lg text-white hidden sm:inline">SULTEC</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-white/70 hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:block"
          >
            <Button size="md" className="rounded-xl">
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/70 hover:text-orange-500 transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button size="md" className="w-full mt-4 rounded-xl">
              Solicitar Orçamento
            </Button>
          </motion.nav>
        )}
      </Container>
    </header>
  )
}
