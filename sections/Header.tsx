'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/servicos' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contato', href: '/contato' },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  if (pathname === '/links') return null

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname?.startsWith(`${href}/`)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900 border-b border-[#F35901]/20">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between h-[80px] lg:h-[100px]">
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
              sizes="(max-width: 1023px) 91px, 113px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9 xl:gap-12" aria-label="Navegação principal">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative font-sora text-[16px] font-normal tracking-[-0.04em] transition-colors hover:text-[#F35901] ${active ? 'text-[#F35901]' : 'text-white'}`}
                >
                  {item.label}
                  {active && <span className="absolute -bottom-3 left-0 right-0 h-[3px] bg-[#F35901] rounded-full" />}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:inline-flex">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 font-sora text-[15px] text-white font-normal border-2 border-[#F35901] rounded-[16px] px-7 py-[16px] hover:bg-[#F35901]/10 transition-colors"
            >
              Solicitar orçamento
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden text-white min-w-11 min-h-11 p-2 flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="lg:hidden overflow-hidden border-t border-white/10"
            aria-label="Navegação mobile"
          >
            <div className="pt-4 pb-6 flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-11 flex items-center font-sora text-base px-1 hover:text-[#F35901] transition-colors ${active ? 'text-[#F35901]' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 min-h-12 inline-flex w-fit items-center gap-2 font-sora text-sm text-white border-2 border-[#F35901] rounded-xl px-5 py-3 hover:bg-[#F35901]/10 transition-colors"
              >
                Solicitar orçamento →
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
