'use client'

import { useState } from 'react'
import { Container, Button } from '@/components/ui'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-600">
      <Container>
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-4xl">
            <span className="text-orange-500">SULTEC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-sora font-medium text-base hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Fix 6: Botão outline laranja com tamanho maior */}
          <button
            className="hidden md:inline-flex"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #FF6A00',
              color: '#FF6A00',
              padding: '12px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Solicitar orçamento →
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-sora font-medium hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full justify-center text-sm">
              Solicitar orçamento →
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}

