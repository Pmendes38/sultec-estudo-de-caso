'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Uniformes', href: '#uniformes' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-600 h-[72px] flex items-center">
      <Container>
        <div className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/sultec-orange.svg"
              alt="SULTEC"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-sora font-medium text-sm hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            className="hidden md:inline-flex bg-transparent border border-orange-500 text-orange-500 px-5 py-2.5 rounded text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors whitespace-nowrap"
            style={{
              borderRadius: '4px',
              borderWidth: '1.5px',
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
          <nav className="md:hidden pb-4 flex flex-col gap-4 bg-dark-900 border-t border-dark-600 -mx-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-sora font-medium hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              className="w-full bg-transparent border border-orange-500 text-orange-500 px-5 py-2.5 rounded text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors"
              style={{
                borderRadius: '4px',
                borderWidth: '1.5px',
              }}
            >
              Solicitar orçamento →
            </button>
          </nav>
        )}
      </Container>
    </header>
  )
}
