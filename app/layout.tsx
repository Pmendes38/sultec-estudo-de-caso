import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Header, Footer } from '@/sections'
import { CookieConsent } from '@/sections/CookieConsent'
import { AnalyticsLoader } from '@/sections/AnalyticsLoader'
import { JsonLd } from '@/components/JsonLd'
import { SITE_NAME, SITE_URL, organizationJsonLd, websiteJsonLd } from '@/lib/seo'
import '@/styles/globals.css'

export const viewport: Viewport = {
  themeColor: '#F35901',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Infraestrutura de Redes Corporativas`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Empresa de infraestrutura de TI em Chapecó: cabeamento estruturado, certificação Fluke DSX, fibra óptica, CPD e projetos de rede para indústrias e empresas.',
  keywords: [
    'infraestrutura de redes corporativas',
    'cabeamento estruturado',
    'certificação Fluke DSX',
    'infraestrutura de TI Chapecó',
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Infraestrutura de Redes Corporativas`,
    description:
      'Cabeamento estruturado, certificação Fluke DSX e infraestrutura de TI para empresas e indústrias em Chapecó e no Oeste de Santa Catarina.',
    images: [
      {
        url: '/sultec/bg-home2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sultec — infraestrutura de redes corporativas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Infraestrutura de Redes Corporativas`,
    description:
      'Cabeamento estruturado, certificação Fluke DSX e infraestrutura de TI em Chapecó/SC.',
    images: ['/sultec/bg-home2.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <AnalyticsLoader />
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
