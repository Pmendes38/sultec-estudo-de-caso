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

const HOME_TITLE = 'Infraestrutura de TI e Cabeamento Estruturado | Sultec'
const HOME_DESCRIPTION =
  'Projetos B2B de cabeamento estruturado, fibra óptica, Data Centers e certificação Fluke para indústrias e empresas em Chapecó e região Sul.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    'infraestrutura de TI',
    'cabeamento estruturado',
    'certificação Fluke DSX',
    'infraestrutura de TI Chapecó',
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: '/sultec/bg-home2.jpg',
        width: 1200,
        height: 630,
        alt: 'Sultec: infraestrutura de TI e cabeamento estruturado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
