import type { Metadata } from 'next'
import Image from 'next/image'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata(PAGE_SEO.links),
  robots: { index: false, follow: false },
}

// ─── Configuração dos links ───────────────────────────────────────────────────
// Edite aqui para adicionar/ajustar destinos.
const LINKS = {
  whatsapp: 'https://wa.me/5500000000000',
  site: '/',
  linkedin: 'https://www.linkedin.com/company/sultec-tecnologia/',
  instagram: 'https://www.instagram.com/sultecsolucoestecnologicas/',
  email: 'mailto:contato@example.com',
}

type LinkItem = {
  label: string
  sub?: string
  href: string
  variant: 'whatsapp' | 'primary' | 'outline'
  external?: boolean
  icon: React.ReactNode
  disabled?: boolean
}

const items: LinkItem[] = [
  {
    label: 'Falar com especialista',
    sub: 'WhatsApp · resposta rápida',
    href: LINKS.whatsapp,
    variant: 'whatsapp',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.85 11.85 0 0 0 5.65 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.47-8.44zM12.04 21.7h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.83 9.83 0 0 1-1.51-5.2c0-5.44 4.42-9.86 9.86-9.86 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.87-9.87 9.87zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
      </svg>
    ),
  },
  {
    label: 'Acessar nosso site',
    sub: 'sultec.example',
    href: LINKS.site,
    variant: 'primary',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    sub: 'Siga a Sultec',
    href: LINKS.linkedin,
    variant: 'outline',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    sub: '@sultecsolucoestecnologicas',
    href: LINKS.instagram,
    variant: 'outline',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.75a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    sub: 'contato@example.com',
    href: LINKS.email,
    variant: 'outline',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
]

const VARIANTS: Record<LinkItem['variant'], string> = {
  whatsapp: 'bg-[#25D366] hover:bg-[#1ebd5a] text-white border-transparent',
  primary: 'bg-[#C84700] hover:bg-[#A83D01] text-white border-transparent',
  outline: 'bg-[#0d0e10] hover:bg-[#141416] text-white border-[#252526] hover:border-[#F35901]/60',
}

export default function LinksPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#070808] text-white overflow-hidden flex items-center justify-center px-5 py-12">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 64px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 64px)',
        }}
      />
      {/* Orange glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(243,89,1,0.14) 0%, transparent 60%)' }}
      />

      <main className="relative w-full max-w-[440px] flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-14 w-[200px] mb-6">
          <Image src="/sultec/logo/logo.png" alt="Sultec" fill priority className="object-contain" />
        </div>

        {/* Heading */}
        <h1 className="font-roboto font-bold text-white text-[24px] tracking-[-0.03em] text-center">
          Sultec Soluções Tecnológicas
        </h1>
        <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.5] text-center mt-2 mb-9 max-w-[340px]">
          Infraestrutura de TI e cabeamento estruturado. Escolha por onde quer falar com a gente.
        </p>

        {/* Links */}
        <nav className="w-full flex flex-col gap-3.5">
          {items.map((item) => {
            const className = `group flex items-center gap-4 w-full rounded-2xl border-2 px-5 py-4 transition-colors duration-200 ${VARIANTS[item.variant]} ${
              item.disabled ? 'opacity-60 pointer-events-none' : ''
            }`
            const inner = (
              <>
                <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-sora font-semibold text-[16px] tracking-[-0.02em] leading-tight">
                    {item.label}
                  </span>
                  {item.sub && (
                    <span className="block font-sora text-[12px] opacity-80 leading-tight mt-0.5 truncate">
                      {item.sub}
                    </span>
                  )}
                </span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 opacity-70 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )

            return item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className} aria-disabled={item.disabled}>
                {inner}
              </a>
            ) : (
              <a key={item.label} href={item.href} className={className} aria-disabled={item.disabled}>
                {inner}
              </a>
            )
          })}
        </nav>

        {/* Footer */}
        <p className="font-sora text-[#5a5c5b] text-[12px] mt-10 text-center">
          © 2026 Sultec Soluções Tecnológicas
        </p>
      </main>
    </div>
  )
}
