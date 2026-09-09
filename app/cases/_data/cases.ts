// ─────────────────────────────────────────────────────────────────────────────
// Cases reais da Sultec + Galeria Técnica.
// Conteúdo fornecido pelo cliente (documentos oficiais). Não inventar dados:
// campos sem informação confirmada ficam marcados como pendentes.
// ─────────────────────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string
  title: string
  client: string
  category: string
  location: string
  year: string
  /** Resumo curto exibido no card. */
  summary: string
  coverImage: string
  /** Escopo executado (bullets). */
  scope: string[]
  challenge?: string
  solution?: string
  result?: string
  /** Texto narrativo adicional (ex.: recorrência do cliente). */
  narrative?: string
  /** Fotos do case para a galeria/lightbox. */
  gallery: string[]
  /** Quando true, a galeria de fotos ainda será enviada pelo cliente. */
  galleryPending?: boolean
  galleryNote?: string
}

const ENCUBATORIO = '/sultec/cases/encubatorio-soledade'

export const cases: CaseStudy[] = [
  {
    slug: 'vibra-incubatorio-soledade',
    title: 'Incubatório Vibra: Soledade/RS',
    client: 'Vibra Agroindustrial S/A',
    category: 'Obra Industrial',
    location: 'Soledade, Rio Grande do Sul',
    year: '2024',
    summary:
      'Mais de 8.000 m² de construção com cabeamento estruturado, CFTV, Wi-Fi, CPD e RACKs certificados via Fluke. Infraestrutura entregue antes do prazo crítico de chegada das máquinas importadas.',
    coverImage: `${ENCUBATORIO}/conclusao.jpg`,
    scope: [
      'Mais de 8.000 m² de construção.',
      'Cabeamento estruturado de 100 pontos de rede.',
      'Infraestrutura e cabeamento de 32 pontos de rede para CFTV, com fornecimento, instalação e configuração dos dispositivos.',
      'Infraestrutura e cabeamento de 12 pontos de rede para Wi-Fi, com fornecimento e instalação dos dispositivos.',
      'Montagem de CPD e RACKs distribuídos pela unidade, com acabamento, identificação e certificação Fluke.',
    ],
    challenge:
      'A obra tinha prazo de entrega curto e inegociável. As máquinas do incubatório eram importadas e os técnicos estrangeiros vinham instalá-las dentro de uma janela fixa de chegada. Toda a infraestrutura de rede precisava estar concluída e certificada antes da chegada dos equipamentos, sem margem para retrabalho, para que a equipe estrangeira não ficasse parada e a implementação das máquinas não atrasasse.',
    solution:
      'A Sultec entregou a infraestrutura adiantada em relação ao cronograma, com cabeamento, CPD e RACKs totalmente certificados via Fluke. Quando os técnicos estrangeiros chegaram, encontraram o ambiente pronto e validado, permitindo a instalação imediata das máquinas sem interrupções.',
    result:
      'Entrega dentro do prazo crítico, com certificação de qualidade, em obra de infraestrutura de grande porte. O cliente voltou a contratar a Sultec para um novo projeto em 2026.',
    // 008.jpg removida (placa de carro parcialmente legível) — galeria usa 001..007.
    gallery: Array.from({ length: 7 }, (_, i) =>
      `${ENCUBATORIO}/${String(i + 1).padStart(3, '0')}.jpg`
    ),
  },
  // NOTA: os cases "Frigorífico Vibra (Itapejara/PR)" e "CICOOB" foram removidos
  // por enquanto — sem documentação/fotos disponíveis. Reinserir quando o cliente
  // enviar o material.
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

// ─────────────────────────────────────────────────────────────────────────────
// Galeria Técnica
// Reúne num só lugar as imagens de "cabeamento estruturado" e "infraestrutura
// de redes" — mostra qualidade de execução (racks, cabeamento e acabamento)
// sem identificar cliente.
//
// Exclusões propositais:
//  • cabeamento-industrial/003.jpg → REMOVIDA (continha logo de concorrente "Innova").
//  • infraestrutura-redes/005..008 → mapas de calor de Wi-Fi / planta baixa / foto
//    aérea (deliverables de site survey que poderiam identificar a planta do cliente
//    e fogem do tema "racks/cabeamento/acabamento").
//
// Capa: foto dos cabos azuis (infraestrutura-redes/003.jpg).
// ─────────────────────────────────────────────────────────────────────────────

const CABEAMENTO = '/sultec/cases/cabeamento-industrial'
const INFRA = '/sultec/cases/infraestrutura-redes'

export const galeriaTecnicaCover = `${INFRA}/003.jpg`

export const galeriaTecnica: string[] = [
  // Capa — cabos azuis
  `${INFRA}/003.jpg`,
  `${INFRA}/002.jpg`,
  `${INFRA}/001.jpg`,
  `${INFRA}/004.jpg`,
  // Cabeamento estruturado industrial (003 removida — logo de concorrente)
  ...['001', '002', '004', '005', '006', '007', '008', '009', '010',
    '011', '012', '013', '014', '015', '016', '017', '018', '019', '020',
  ].map((n) => `${CABEAMENTO}/${n}.jpg`),
]
