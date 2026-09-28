'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Soluções', href: '/#servicos' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contato', href: '/#contato' },
]

const serviceLinks = [
  'Soluções Tecnológicas',
  'Serviços Técnicos',
  'Projetos Corporativos',
  'Infraestrutura',
  'Manutenção',
  'Suporte Especializado',
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sultec-tecnologia/', icon: '/sultec/icons/linkedin.svg', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/sultecsolucoestecnologicas/', icon: '/sultec/icons/instagram.svg', external: true },
  { label: 'YouTube', href: '#', icon: '/sultec/icons/youtube.svg', external: false },
  { label: 'Email', href: 'mailto:contato@example.com', icon: '/sultec/icons/email.svg', external: false },
]

export function Footer() {
  const pathname = usePathname()
  if (pathname === '/links') return null

  return (
    <footer className="bg-[#070808]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1fr_1fr] gap-10 xl:gap-14 mb-12">
          <div className="flex flex-col gap-6">
            <div className="relative h-12 lg:h-14 w-[180px] lg:w-[200px]">
              <Image
                src="/sultec/logo/logo.png"
                alt="Sultec"
                fill
                sizes="(max-width: 1023px) 180px, 200px"
                className="object-contain object-left"
              />
            </div>
            <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.5] tracking-[-0.02em] max-w-[280px]">
              Infraestrutura de TI e cabeamento estruturado para indústrias e empresas em Chapecó e região Sul.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="w-[44px] h-[44px] border-[1.5px] border-[#7b7b7b] rounded-[6px] flex items-center justify-center hover:border-[#F35901] hover:bg-[#F35901]/10 transition-colors"
                >
                  <Image src={s.icon} alt="" width={18} height={18} className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          <div><FooterCol title="Navegação">{navLinks.map((item) => <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>)}</FooterCol></div>
          <div><FooterCol title="Soluções">{serviceLinks.map((item) => <FooterLink key={item} href="#servicos">{item}</FooterLink>)}</FooterCol></div>
          <div>
            <FooterCol title="Contato">
              <a href="tel:+5549999650736" className="font-sora text-[#ABADAB] text-[14px] hover:text-white transition-colors">(00) 00000-0000</a>
              <a href="mailto:contato@example.com" className="font-sora text-[#ABADAB] text-[14px] hover:text-white transition-colors underline">contato@example.com</a>
              <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.4]">Segunda a Sexta<br />08:00 – 18:00</p>
            </FooterCol>
          </div>
          <div>
            <FooterCol title="Endereço">
              <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.4]">Avenida Antônio Sachett, N° 151 D<br />Desbravador, Chapecó – SC</p>
              <p className="font-sora text-[#ABADAB] text-[14px]">CEP 89811-396</p>
            </FooterCol>
          </div>
        </div>

        <div className="border-t border-[#1c1d1e] pt-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-sora text-[#ABADAB] text-[13px]">© 2026 Sultec Soluções Tecnológicas. Todos os direitos reservados.</p>
          <div className="flex gap-6 items-center flex-wrap">
            <a href="/politica-de-privacidade" className="font-sora text-[#ABADAB] text-[13px] hover:text-white transition-colors">Política de Privacidade</a>
            <span className="text-[#ABADAB]">|</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('sultec:open-cookie-preferences'))}
              className="min-h-11 font-sora text-[#ABADAB] text-[13px] hover:text-white transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-sora text-white text-[15px] font-normal uppercase tracking-[-0.02em]">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-sora text-[#ABADAB] text-[14px] hover:text-white transition-colors w-fit">{children}</a>
}
