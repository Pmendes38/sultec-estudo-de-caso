'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { buttonHover, buttonTap } from '@/lib/animations'

const navItems = [
  { label: 'Início',    href: '/'         },
  { label: 'Sobre',     href: '/sobre'    },
  { label: 'Soluções',  href: '/servicos' },
  { label: 'Projetos',  href: '/projetos' },
  { label: 'Contato',   href: '/contato'  },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Página de links (linktree) é standalone — sem o menu do site.
  if (pathname === '/links') return null

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname?.startsWith(`${href}/`)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900 border-b border-[#F35901]/20"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-[80px] lg:h-[100px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 relative h-12 lg:h-[60px] aspect-[1.88/1]"
            aria-label="Sultec - Página inicial"
          >
            <Image
              src="/sultec/logo/logo.png"
              alt="Sultec"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation — animated active underline */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-12" aria-label="Navegação principal">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative font-sora text-[16px] font-normal tracking-[-0.04em] transition-colors hover:text-[#F35901] ${
                    active ? 'text-[#F35901]' : 'text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-3 left-0 right-0 h-[3px] bg-[#F35901] rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <motion.div whileHover={buttonHover} whileTap={buttonTap} className="hidden lg:inline-flex">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-sora text-[15px] text-white font-normal border-2 border-[#F35901] rounded-[16px] px-7 py-[16px] hover:bg-[#F35901]/10 transition-colors"
            >
              Solicitar orçamento
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
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
              aria-label="Navegação mobile"
            >
              <div className="pt-6 pb-6 flex flex-col gap-5">
                {navItems.map((item, i) => {
                  const active = isActive(item.href)
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-sora text-base hover:text-[#F35901] transition-colors ${
                          active ? 'text-[#F35901]' : 'text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                >
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 font-sora text-sm text-white border-2 border-[#F35901] rounded-xl px-5 py-3 hover:bg-[#F35901]/10 transition-colors"
                  >
                    Solicitar orçamento →
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
