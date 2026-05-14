'use client'

import Image from 'next/image'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
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
  { label: 'LinkedIn', href: '#', icon: '/sultec/icons/linkedin.svg' },
  { label: 'Instagram', href: '#', icon: '/sultec/icons/instagram.svg' },
  { label: 'YouTube', href: '#', icon: '/sultec/icons/youtube.svg' },
  { label: 'Email', href: 'mailto:contato@example.com', icon: '/sultec/icons/email.svg' },
]

export function Footer() {
  return (
    <footer className="bg-[#070808]">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-14 py-14 lg:py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1fr_1fr] gap-10 xl:gap-14 mb-12">

          {/* Col 1: Logo + tagline + social */}
          <div className="flex flex-col gap-6">
            <div className="relative h-12 lg:h-14 w-[180px] lg:w-[200px]">
              <Image
                src="/sultec/logo/logo.png"
                alt="Sultec"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.5] tracking-[-0.02em] max-w-[280px]">
              Tecnologia, estrutura e excelência operacional para impulsionar resultados e transformar realidades.
            </p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-[42px] h-[42px] border-[1.5px] border-[#7b7b7b] rounded-[6px] flex items-center justify-center hover:border-[#F35901] hover:bg-[#F35901]/10 transition-colors"
                >
                  <Image src={s.icon} alt="" width={18} height={18} className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navegação */}
          <FooterCol title="Navegação">
            {navLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
            ))}
          </FooterCol>

          {/* Col 3: Serviços */}
          <FooterCol title="Serviços">
            {serviceLinks.map((item) => (
              <FooterLink key={item} href="#servicos">{item}</FooterLink>
            ))}
          </FooterCol>

          {/* Col 4: Contato */}
          <FooterCol title="Contato">
            <p className="font-sora text-[#898A89] text-[14px]">(00) 00000-0000</p>
            <a
              href="mailto:contato@example.com"
              className="font-sora text-[#898A89] text-[14px] hover:text-white transition-colors underline"
            >
              contato@example.com
            </a>
            <p className="font-sora text-[#898A89] text-[14px] leading-[1.4]">
              Segunda a Sexta<br />08:00 – 18:00
            </p>
          </FooterCol>

          {/* Col 5: Endereço */}
          <FooterCol title="Endereço">
            <p className="font-sora text-[#898A89] text-[14px] leading-[1.4]">
              Rua das Tecnologias, 123<br />São Paulo – SP
            </p>
            <p className="font-sora text-[#898A89] text-[14px]">CEP 01234-567</p>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1c1d1e] pt-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-sora text-[#898A89] text-[13px]">
            © 2026 Sultec Soluções Tecnológicas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center">
            <a href="#" className="font-sora text-[#898A89] text-[13px] hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-[#898A89]">|</span>
            <a href="#" className="font-sora text-[#898A89] text-[13px] hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-sora text-white text-[15px] font-normal uppercase tracking-[-0.02em]">
        {title}
      </h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-sora text-[#898A89] text-[14px] hover:text-white transition-colors w-fit"
    >
      {children}
    </a>
  )
}
