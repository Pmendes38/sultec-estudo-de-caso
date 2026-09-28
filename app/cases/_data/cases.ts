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
  /** Seções editoriais para cases que exigem descrição técnica mais profunda. */
  sections?: Array<{
    title: string
    paragraphs: string[]
  }>
  /** Fotos do case para a galeria/lightbox. */
  gallery: string[]
  /** Registros em vídeo do projeto. */
  videos?: string[]
  /** Formato visual dos vídeos na galeria. */
  videoLayout?: 'landscape' | 'portrait'
  /** Quando true, a galeria de fotos ainda será enviada pelo cliente. */
  galleryPending?: boolean
  galleryNote?: string
}

const ENCUBATORIO = '/sultec/cases/encubatorio-soledade'
const UNO_CHAPECO = '/sultec/cases/uno-chapeco'

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
    // Galeria do projeto: imagens 001..010.
    gallery: Array.from({ length: 10 }, (_, i) =>
      `${ENCUBATORIO}/${String(i + 1).padStart(3, '0')}.jpg`
    ),
  },
  {
    slug: 'uno-chapeco-infraestrutura-rede',
    title: 'UNO Chapecó: Infraestrutura de Rede e Controle de Acesso',
    client: 'UNO Chapecó',
    category: 'Infraestrutura de TI e Controle de Acesso',
    location: 'Chapecó, Santa Catarina',
    year: '2026',
    summary:
      'Na UNO Chapecó, a Sultec integrou infraestrutura de rede e controle de acesso em uma mesma entrega técnica. O trabalho envolveu organização e conexão do cabeamento estruturado, adequação da infraestrutura física, implantação dos circuitos de dados e alimentação em baixa tensão para o controle de acesso, integração de sensores, botoeiras e fechaduras eletromagnéticas e validação dos enlaces trabalhados com equipamento Fluke Networks.',
    coverImage: `${UNO_CHAPECO}/capa.webp`,
    scope: [
      'Organização e intervenção no rack de telecomunicações, com conexão e adequação dos enlaces atendidos.',
      'Terminação, conexão e organização de pontos de rede e patch cords.',
      'Execução e adequação de eletrodutos, caixas de passagem e rotas para dados e alimentação em baixa tensão.',
      'Interligação da central do sistema de controle de acesso e distribuição de alimentação em 12 V aos componentes.',
      'Integração de botoeiras, sensores, dispositivos de controle de acesso e fechaduras eletromagnéticas.',
      'Integração de alimentação proveniente da rede elétrica ao conjunto da central, com bateria de respaldo para os componentes do sistema.',
      'Testes e validação dos enlaces de cabeamento estruturado trabalhados em campo.',
      'Utilização de equipamento Fluke Networks para verificação técnica dos pontos demonstrados durante a execução.',
    ],
    challenge:
      'O projeto exigia tratar conectividade e segurança física como partes de uma mesma infraestrutura. Além de organizar e colocar em operação os enlaces de rede, era necessário criar rotas para dados e alimentação em baixa tensão, integrar dispositivos distribuídos nas portas e concentrar o acionamento do controle de acesso em uma arquitetura que permanecesse organizada, identificável e adequada para futuras manutenções. A execução precisava conviver com a infraestrutura existente da unidade e, ao mesmo tempo, entregar acabamento técnico e confiabilidade operacional.',
    solution:
      'A Sultec executou a infraestrutura física necessária para interligar rede e controle de acesso. No rack de telecomunicações, a equipe atuou na organização, terminação e conexão dos pontos. Nos acessos, foram instalados e adequados eletrodutos, caixas de passagem e cabeamento para comunicação e alimentação em 12 V. A central do sistema passou a concentrar a alimentação e o acionamento dos dispositivos, integrando botoeiras, sensores, controladores e fechaduras eletromagnéticas. O conjunto também recebeu alimentação proveniente da rede elétrica e bateria de respaldo. Após a execução, os enlaces trabalhados foram submetidos a testes em campo com equipamento Fluke Networks para validar tecnicamente os pontos demonstrados.',
    result:
      'A UNO Chapecó recebeu uma infraestrutura integrada, com rede, alimentação em baixa tensão e controle de acesso organizados dentro de uma mesma lógica de operação. Os ambientes atendidos ficaram preparados para uso e manutenção, com dispositivos de acesso interligados à central, cabeamento organizado e enlaces verificados em campo. O resultado é uma base técnica que reduz improvisos, facilita diagnóstico e manutenção e sustenta a operação cotidiana dos sistemas de conectividade e segurança.',
    sections: [
      {
        title: 'Infraestrutura como base da solução',
        paragraphs: [
          'Antes de qualquer dispositivo entrar em operação, foi necessário construir e adequar o caminho físico por onde dados e alimentação chegariam a cada ponto. A equipe trabalhou com eletrodutos aparentes, caixas de passagem, derivações e rotas de cabeamento, mantendo os circuitos protegidos e organizados ao longo dos ambientes atendidos.',
          'Essa etapa é determinante em projetos de infraestrutura: leitores, sensores, botoeiras, fechaduras e equipamentos de rede só operam de forma confiável quando existe uma base física coerente por trás deles. Por isso, a execução foi tratada como um sistema completo, e não como a instalação isolada de equipamentos.',
        ],
      },
      {
        title: 'Controle de acesso centralizado',
        paragraphs: [
          'Nos acessos atendidos, a solução foi estruturada em torno de uma central responsável por concentrar o comando e a alimentação dos componentes do sistema. A partir dela são interligados os diferentes pontos instalados nas portas, incluindo botoeiras, sensores, dispositivos de controle de acesso e fechaduras eletromagnéticas.',
          'Na prática, a liberação de uma porta depende do funcionamento coordenado dessa cadeia. O comando recebido pelo sistema precisa chegar à central e acionar corretamente o dispositivo de travamento, enquanto sensores e botoeiras participam da lógica de operação. A infraestrutura executada pela Sultec foi responsável por criar essa comunicação entre os componentes.',
        ],
      },
      {
        title: 'Alimentação em baixa tensão e respaldo',
        paragraphs: [
          'Além da comunicação de dados, o projeto exigiu infraestrutura elétrica para os componentes que operam em baixa tensão. A central é alimentada a partir da rede elétrica e distribui a alimentação necessária em 12 V aos dispositivos ligados ao sistema de controle de acesso.',
          'O conjunto também utiliza bateria de respaldo, acrescentando uma camada de continuidade à alimentação dos componentes conectados à central. Essa arquitetura evita que cada dispositivo seja tratado como um ponto independente e concentra a alimentação e o gerenciamento do sistema em uma solução tecnicamente organizada.',
        ],
      },
      {
        title: 'Cabeamento estruturado e validação em campo',
        paragraphs: [
          'Paralelamente ao controle de acesso, a equipe atuou no rack de telecomunicações, realizando organização, conexão e adequação dos enlaces atendidos. Um rack organizado facilita a identificação dos pontos, reduz a complexidade de futuras intervenções e cria condições mais seguras para diagnóstico e expansão da rede.',
          'Depois da execução física, os enlaces trabalhados foram submetidos a testes com equipamento profissional Fluke Networks. Nos registros do serviço é possível observar a utilização do equipamento durante a validação e a indicação de aprovação no ponto demonstrado. A Sultec trata essa etapa como parte da entrega: a infraestrutura não termina quando o cabo é conectado; ela precisa ser verificada em campo.',
        ],
      },
    ],
    narrative:
      'Da passagem dos cabos ao acionamento das portas, cada etapa foi executada como parte de uma mesma infraestrutura. Conectividade, alimentação e segurança foram integradas para que o ambiente permanecesse organizado, funcional e preparado para a operação.',
    gallery: [],
    videos: [
      `${UNO_CHAPECO}/uno-chapeco-case.mp4`,
    ],
    videoLayout: 'portrait',
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
