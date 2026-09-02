/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apenas o PDF desta campanha — não afeta outros arquivos públicos
        source: '/materiais/checklist-homologacao-fornecedores-cabeamento-sultec.pdf',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/projetos',
        destination: '/cases',
        permanent: true,
      },
      {
        source: '/projetos/:slug*',
        destination: '/cases/:slug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
