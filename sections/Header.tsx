'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonHover, buttonTap } from '@/lib/animations'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'portfolio', 'contato']
      const scrollY = window.scrollY + 200
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id)
          return
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#070808] border-b border-[#F35901]/20"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-[80px] lg:h-[100px]">

          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 relative h-12 lg:h-[60px] aspect-[1.88/1]"
          >
            <Image
              src="/sultec/logo/logo.png"
              alt="Sultec"
              fill
              priority
              className="object-contain object-left"
            />
          </motion.a>

          {/* Desktop Navigation — animated active underline */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-12">
            {navItems.map((item) => {
              const id = item.href.substring(1)
              const isActive = activeSection === id
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-sora text-[16px] font-normal tracking-[-0.04em] transition-colors hover:text-[#F35901] ${
                    isActive ? 'text-[#F35901]' : 'text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-3 left-0 right-0 h-[3px] bg-[#F35901] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="hidden lg:inline-flex items-center gap-3 font-sora text-[15px] text-white font-normal border-2 border-[#F35901] rounded-[16px] px-7 py-[16px] hover:bg-[#F35901]/10 transition-colors"
          >
            Solicitar orçamento
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }}>
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu — animated open/close */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="pt-6 pb-6 flex flex-col gap-5">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sora text-base hover:text-[#F35901] transition-colors ${
                      activeSection === item.href.substring(1) ? 'text-[#F35901]' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 font-sora text-sm text-white border-2 border-[#F35901] rounded-xl px-5 py-3 self-start hover:bg-[#F35901]/10 transition-colors"
                >
                  Solicitar orçamento →
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
