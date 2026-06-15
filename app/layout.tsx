import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Header, Footer } from '@/sections'
import '@/styles/globals.css'

const GTM_ID = 'GTM-TSGBLTXP'

export const viewport: Viewport = {
  themeColor: '#F35901',
}

export const metadata: Metadata = {
  title: 'Sultec - Soluções Tecnológicas Premium',
  description: 'Soluções técnicas e tecnológicas com alto padrão de qualidade, inovação e excelência operacional.',
  keywords: 'Sultec, Soluções Tecnológicas, Serviços Técnicos, Projetos Corporativos',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sultec.com.br',
    siteName: 'Sultec',
    images: [
      {
        url: 'https://placehold.co/1200x630/111111/ff6a00?text=SULTEC',
        width: 1200,
        height: 630,
        alt: 'Sultec',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-dark-900 text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
