'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const navLinks = [
  { label: 'Início',    href: '/#inicio'   },
  { label: 'Sobre',     href: '/#sobre'    },
  { label: 'Soluções',  href: '/#servicos' },
  { label: 'Cases',     href: '/cases'  },
  { label: 'Contato',   href: '/#contato'  },
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
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sultec-tecnologia/',
    icon: '/sultec/icons/linkedin.svg',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sultecsolucoestecnologicas/',
    icon: '/sultec/icons/instagram.svg',
    external: true,
  },
  { label: 'YouTube', href: '#', icon: '/sultec/icons/youtube.svg', external: false },
  {
    label: 'Email',
    href: 'mailto:contato@example.com',
    icon: '/sultec/icons/email.svg',
    external: false,
  },
]

export function Footer() {
  const pathname = usePathname()

  // Página de links (linktree) é standalone, sem o rodapé do site.
  if (pathname === '/links') return null

  return (
    <footer className="bg-[#070808]">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 py-14 lg:py-16">

        {/* Main grid: staggered column reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_1fr_1fr_1fr_1fr] gap-10 xl:gap-14 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >

          {/* Col 1: Logo + tagline + social */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="relative h-12 lg:h-14 w-[180px] lg:w-[200px]">
              <Image
                src="/sultec/logo/logo.png"
                alt="Sultec"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="font-sora text-[#ABADAB] text-[14px] leading-[1.5] tracking-[-0.02em] max-w-[280px]">
              Infraestrutura de TI e cabeamento estruturado para indústrias e empresas em Chapecó e região Sul.
            </p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[42px] h-[42px] border-[1.5px] border-[#7b7b7b] rounded-[6px] flex items-center justify-center hover:border-[#F35901] hover:bg-[#F35901]/10 transition-colors"
                >
                  <Image src={s.icon} alt="" width={18} height={18} className="object-contain" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Navegação */}
          <motion.div variants={fadeUp}>
            <FooterCol title="Navegação">
              {navLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>{item.label}</FooterLink>
              ))}
            </FooterCol>
          </motion.div>

          {/* Col 3: Serviços */}
          <motion.div variants={fadeUp}>
            <FooterCol title="Soluções">
              {serviceLinks.map((item) => (
                <FooterLink key={item} href="#servicos">{item}</FooterLink>
              ))}
            </FooterCol>
          </motion.div>

          {/* Col 4: Contato */}
          <motion.div variants={fadeUp}>
            <FooterCol title="Contato">
              <a
                href="tel:+5549999650736"
                className="font-sora text-[#898A89] text-[14px] hover:text-white transition-colors"
              >
                (00) 00000-0000
              </a>
              <a
                href="mailto:contato@example.com"
                className="font-sora text-[#898A89] text-[14px] hover:text-white transition-colors underline"
              >
                contato@example.com
              </a>
              <p className="font-sora text-[#898A89] text-[14px] leading-[1.4]">
                Segunda a Sexta<br />08:00 às 18:00
              </p>
            </FooterCol>
          </motion.div>

          {/* Col 5: Endereço */}
          <motion.div variants={fadeUp}>
            <FooterCol title="Endereço">
              <p className="font-sora text-[#898A89] text-[14px] leading-[1.4]">
                Avenida Antônio Sachett, N° 151 D<br />Desbravador, Chapecó, SC
              </p>
              <p className="font-sora text-[#898A89] text-[14px]">CEP 89811-396</p>
            </FooterCol>
          </motion.div>
        </motion.div>

        {/* Bottom bar: gentle fade */}
        <motion.div
          className="border-t border-[#1c1d1e] pt-7 flex flex-col md:flex-row md:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={viewportOnce}
        >
          <p className="font-sora text-[#898A89] text-[13px]">
            © 2026 Sultec Soluções Tecnológicas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 items-center flex-wrap">
            <a
              href="/politica-de-privacidade"
              className="font-sora text-[#898A89] text-[13px] hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-[#898A89]">|</span>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('sultec:open-cookie-preferences'))
                }
              }}
              className="font-sora text-[#898A89] text-[13px] hover:text-white transition-colors"
            >
              Cookies
            </button>
          </div>
        </motion.div>
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
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="font-sora text-[#898A89] text-[14px] hover:text-white transition-colors w-fit"
    >
      {children}
    </motion.a>
  )
}
