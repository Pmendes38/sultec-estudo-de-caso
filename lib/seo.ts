import type { Metadata } from 'next'

/** Domínio canônico usado nos metadados (Open Graph já apontava para este host). */
export const SITE_URL = 'https://sultec.com.br'

export const SITE_NAME = 'Sultec Soluções Tecnológicas'

export const ORG = {
  legalName: 'Sultec Solucoes Tecnologicas LTDA',
  tradeName: 'Sultec Solucoes Tecnologicas',
  cnpj: '57.904.423/0001-53',
  email: 'contato@example.com',
  phone: '+5549999650736',
  phoneDisplay: '(00) 00000-0000',
  streetAddress: 'Avenida Antônio Sachett, 151 D',
  addressLocality: 'Chapecó',
  addressRegion: 'SC',
  postalCode: '89811-396',
  addressCountry: 'BR',
  sameAs: [
    'https://www.linkedin.com/company/sultec-tecnologia/',
    'https://www.instagram.com/sultecsolucoestecnologicas/',
  ],
} as const

export type PageSeo = {
  title: string
  description: string
  path: string
  keywords?: readonly string[]
  ogImage?: string
  noIndex?: boolean
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  noIndex,
}: PageSeo): Metadata {
  const url = absoluteUrl(path)
  const image = ogImage || `${SITE_URL}/sultec/bg-home2.jpg`

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords?.length ? [...keywords] : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

/** Mapa editorial SEO — uma keyword principal por URL indexável. */
export const PAGE_SEO = {
  home: {
    title: 'Infraestrutura de Redes Corporativas em Chapecó | Sultec',
    description:
      'Empresa de infraestrutura de TI em Chapecó e no Oeste de SC: cabeamento estruturado, certificação Fluke DSX, fibra óptica, CPD e projetos para indústrias e empresas.',
    path: '/',
    keywords: [
      'infraestrutura de redes corporativas',
      'empresa de infraestrutura de TI',
      'cabeamento estruturado Chapecó',
      'infraestrutura tecnológica B2B',
    ],
    h1: 'Infraestrutura de redes corporativas para operações que não podem parar',
  },
  servicos: {
    title: 'Soluções de Conectividade Empresarial | Sultec',
    description:
      'Projeto e execução de redes, cabeamento estruturado, certificação Fluke, fibra óptica, data center e infraestrutura de TI para empresas e indústrias.',
    path: '/servicos',
    keywords: [
      'soluções de conectividade empresarial',
      'projeto e execução de redes',
      'integradora de redes corporativas',
    ],
  },
  certificacao: {
    title: 'Certificação Fluke DSX e Padrões de Rede | Sultec',
    description:
      'Certificação Fluke Networks DSX, parceria Furukawa e soluções ópticas. Laudos auditáveis e conformidade com ANSI/TIA-568 e NBR 14565 em Chapecó e Santa Catarina.',
    path: '/certificacao',
    keywords: [
      'certificação Fluke',
      'certificação Fluke DSX',
      'laudo Fluke para rede corporativa',
      'norma NBR 14565',
    ],
  },
  sobre: {
    title: 'Sobre a Sultec | Infraestrutura de TI em Chapecó/SC',
    description:
      'Conheça a Sultec Soluções Tecnológicas: empresa de Chapecó especializada em cabeamento estruturado, redes corporativas e infraestrutura B2B para indústrias e empresas.',
    path: '/sobre',
    keywords: [
      'empresa de cabeamento estruturado Chapecó',
      'infraestrutura de TI Santa Catarina',
      'empresa de redes para indústrias',
    ],
  },
  contato: {
    title: 'Contato | Orçamento de Cabeamento e Redes — Sultec Chapecó',
    description:
      'Fale com a Sultec em Chapecó/SC: WhatsApp, e-mail e visita técnica para projeto de cabeamento estruturado, certificação Fluke e infraestrutura de rede.',
    path: '/contato',
    keywords: [
      'orçamento de cabeamento estruturado',
      'empresa de cabeamento estruturado Chapecó',
      'contato infraestrutura de TI',
    ],
  },
  projetos: {
    title: 'Projetos e Cases de Infraestrutura de Rede | Sultec',
    description:
      'Cases e obras de cabeamento estruturado, certificação e infraestrutura de TI executados pela Sultec para indústrias e operações corporativas.',
    path: '/projetos',
    keywords: [
      'projeto de infraestrutura de TI para indústria',
      'cabeamento estruturado para indústrias',
      'projetos de rede corporativa',
    ],
  },
  politica: {
    title: 'Política de Privacidade | Sultec Soluções Tecnológicas',
    description:
      'Como a Sultec Solucoes Tecnologicas LTDA trata dados pessoais no site e nas campanhas de materiais técnicos.',
    path: '/politica-de-privacidade',
  },
  checklist: {
    title: 'Checklist para Homologar Fornecedor de Cabeamento | Sultec',
    description:
      'Material gratuito da Sultec: critérios técnicos, sinais de risco e matriz de avaliação para comparar propostas de cabeamento estruturado e infraestrutura de rede.',
    path: '/materiais/checklist-homologacao',
    keywords: [
      'checklist para homologar fornecedor de rede',
      'como comparar propostas de cabeamento estruturado',
      'como escolher empresa de cabeamento estruturado',
    ],
  },
  links: {
    title: 'Links | Sultec Soluções Tecnológicas',
    description: 'WhatsApp, site e redes sociais da Sultec Soluções Tecnológicas.',
    path: '/links',
  },
} as const

export type ServicoSeo = {
  primaryKeyword: string
  secondaryKeywords: string[]
  title: string
  description: string
  h1: string
  related: string[]
}

export const SERVICO_SEO: Record<string, ServicoSeo> = {
  'cabeamento-estruturado': {
    primaryKeyword: 'cabeamento estruturado para empresas',
    secondaryKeywords: [
      'projeto de cabeamento estruturado',
      'instalação de cabeamento estruturado',
      'certificação de cabos Cat6',
      'certificação de cabos Cat6A',
      'cabeamento estruturado Chapecó',
    ],
    title: 'Cabeamento Estruturado para Empresas | Sultec Chapecó',
    description:
      'Projeto, instalação e certificação de cabeamento estruturado Cat6/Cat6A com Fluke DSX. Infraestrutura de rede para empresas e indústrias em Chapecó e SC.',
    h1: 'Cabeamento estruturado para empresas',
    related: ['certificacao', 'servicos-tecnicos', 'infraestrutura', 'data-center'],
  },
  certificacao: {
    primaryKeyword: 'certificação Fluke DSX',
    secondaryKeywords: [
      'certificação de cabeamento',
      'certificação de rede',
      'laudo de certificação de rede',
      'teste de cabeamento com Fluke',
      'certificação ANSI TIA 568',
    ],
    title: 'Certificação Fluke DSX de Cabeamento e Rede | Sultec',
    description:
      'Certificação de cabeamento e rede com Fluke DSX, laudos ponto a ponto e conformidade ANSI/TIA-568 e NBR 14565. Atendimento em Chapecó e Santa Catarina.',
    h1: 'Certificação Fluke DSX de cabeamento e rede',
    related: ['cabeamento-estruturado', 'servicos-tecnicos', 'data-center'],
  },
  'data-center': {
    primaryKeyword: 'infraestrutura de CPD',
    secondaryKeywords: [
      'montagem de data center',
      'montagem de CPD',
      'instalação de racks de rede',
      'organização de racks',
      'sala técnica de TI',
    ],
    title: 'Infraestrutura de CPD, Racks e Data Center | Sultec',
    description:
      'Montagem de CPD e data center, organização de racks, energia e documentação técnica. Infraestrutura para salas técnicas e ambientes críticos.',
    h1: 'Infraestrutura de CPD, racks e data center',
    related: ['infraestrutura', 'cabeamento-estruturado', 'projetos-corporativos'],
  },
  infraestrutura: {
    primaryKeyword: 'infraestrutura de TI para empresas',
    secondaryKeywords: [
      'infraestrutura de redes corporativas',
      'instalação de fibra óptica',
      'infraestrutura elétrica para data center',
      'CFTV para indústrias',
      'infraestrutura elétrica e conectividade',
    ],
    title: 'Infraestrutura de TI para Empresas | Sultec',
    description:
      'Infraestrutura de TI completa: cabeamento, fibra óptica, racks, elétrica estabilizada e CFTV corporativo para indústrias e empresas no Oeste de SC.',
    h1: 'Infraestrutura de TI para empresas',
    related: ['cabeamento-estruturado', 'data-center', 'projetos-corporativos', 'servicos-tecnicos'],
  },
  'solucoes-tecnologicas': {
    primaryKeyword: 'integração de infraestrutura de TI',
    secondaryKeywords: [
      'modernização de rede corporativa',
      'expansão de rede empresarial',
      'cabeamento para Wi-Fi corporativo',
      'infraestrutura tecnológica B2B',
    ],
    title: 'Integração de Infraestrutura de TI | Sultec',
    description:
      'Integração de redes, Wi-Fi corporativo e modernização de infraestrutura tecnológica B2B para expandir e unificar a operação.',
    h1: 'Integração de infraestrutura de TI',
    related: ['infraestrutura', 'projetos-corporativos', 'suporte'],
  },
  'servicos-tecnicos': {
    primaryKeyword: 'instalação de cabeamento estruturado',
    secondaryKeywords: [
      'implantação de cabeamento estruturado',
      'lançamento de fibra óptica',
      'fusão de fibra óptica',
      'identificação de pontos de rede',
      'documentação as built de rede',
    ],
    title: 'Instalação de Cabeamento e Fibra Óptica | Sultec',
    description:
      'Execução em campo de cabeamento estruturado, lançamento e fusão de fibra óptica, identificação de pontos e documentação as built da rede.',
    h1: 'Instalação de cabeamento estruturado e fibra óptica',
    related: ['cabeamento-estruturado', 'certificacao', 'infraestrutura'],
  },
  'projetos-corporativos': {
    primaryKeyword: 'projeto de rede corporativa',
    secondaryKeywords: [
      'projeto de cabeamento estruturado',
      'implantação de infraestrutura de rede',
      'empresa de redes para indústrias',
      'projeto de infraestrutura de TI para indústria',
    ],
    title: 'Projeto de Rede Corporativa e Infraestrutura | Sultec',
    description:
      'Projeto de rede corporativa com levantamento técnico, escopo fechado e execução acompanhada. Infraestrutura para indústrias, bancos e cooperativas.',
    h1: 'Projeto de rede corporativa sob medida',
    related: ['cabeamento-estruturado', 'data-center', 'infraestrutura', 'certificacao'],
  },
  manutencao: {
    primaryKeyword: 'manutenção de infraestrutura de rede',
    secondaryKeywords: [
      'diagnóstico de cabeamento estruturado',
      'correção de falhas em cabeamento',
      'modernização de rede corporativa',
    ],
    title: 'Manutenção de Infraestrutura de Rede | Sultec',
    description:
      'Manutenção preventiva e corretiva de cabeamento, racks e ativos de rede, com diagnóstico e correção documentada para operações contínuas.',
    h1: 'Manutenção de infraestrutura de rede',
    related: ['suporte', 'certificacao', 'servicos-tecnicos'],
  },
  suporte: {
    primaryKeyword: 'suporte técnico para infraestrutura de TI',
    secondaryKeywords: [
      'empresa de infraestrutura de TI',
      'atendimento técnico redes corporativas',
    ],
    title: 'Suporte Técnico para Infraestrutura de TI | Sultec',
    description:
      'Suporte técnico com SLA para infraestrutura de TI e redes corporativas, com diagnóstico remoto e atendimento em campo no Oeste de Santa Catarina.',
    h1: 'Suporte técnico para infraestrutura de TI',
    related: ['manutencao', 'servicos-tecnicos', 'solucoes-tecnologicas'],
  },
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: ORG.tradeName,
    legalName: ORG.legalName,
    taxID: ORG.cnpj,
    url: SITE_URL,
    email: ORG.email,
    telephone: ORG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.streetAddress,
      addressLocality: ORG.addressLocality,
      addressRegion: ORG.addressRegion,
      postalCode: ORG.postalCode,
      addressCountry: ORG.addressCountry,
    },
    areaServed: [
      { '@type': 'City', name: 'Chapecó' },
      { '@type': 'AdministrativeArea', name: 'Oeste de Santa Catarina' },
      { '@type': 'State', name: 'Santa Catarina' },
    ],
    sameAs: [...ORG.sameAs],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      '@type': 'Organization',
      name: ORG.tradeName,
    },
  }
}

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      '@type': 'LocalBusiness',
      name: ORG.tradeName,
      telephone: ORG.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: ORG.addressLocality,
        addressRegion: ORG.addressRegion,
        addressCountry: ORG.addressCountry,
      },
    },
    areaServed: ['Chapecó', 'Oeste de Santa Catarina', 'Santa Catarina'],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
