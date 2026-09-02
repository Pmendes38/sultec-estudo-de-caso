// Conteúdo das páginas individuais de soluções/serviços.
// 9 páginas únicas (home + /servicos compartilham alguns slugs).

export type Servico = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  intro: string
  inclui: string[]
  /** Bloco adicional para SEO on-page (opcional). */
  detalhe?: string
}

export const servicos: Servico[] = [
  {
    slug: 'solucoes-tecnologicas',
    title: 'Soluções Tecnológicas',
    eyebrow: 'Conectividade',
    summary:
      'Integração de infraestrutura de TI: redes, Wi-Fi corporativo e sistemas em um projeto coerente com a operação.',
    intro:
      'A integração de infraestrutura de TI reúne roteamento, switching, Wi-Fi corporativo e segurança eletrônica em um projeto alinhado à operação. O foco é modernização e expansão de rede empresarial com equipamentos dimensionados e integração entre sistemas.',
    detalhe:
      'Indicada para empresas que precisam unificar conectividade, telefonia e segurança sem perder rastreabilidade técnica. Cada entrega inclui dimensionamento, implantação e documentação.',
    inclui: [
      'Roteamento, switching e Wi-Fi corporativo de alto desempenho',
      'Integração de redes, telefonia e segurança eletrônica',
      'Equipamentos de marcas líderes (Intelbras, Aruba, Ubiquiti, entre outras)',
      'Dimensionamento técnico e projeto sob medida',
      'Implantação, configuração e documentação completas',
    ],
  },
  {
    slug: 'servicos-tecnicos',
    title: 'Serviços Técnicos',
    eyebrow: 'Execução',
    summary:
      'Instalação de cabeamento estruturado, lançamento e fusão de fibra óptica com identificação e testes em campo.',
    intro:
      'Equipe própria para executar em campo o projeto de rede: instalação de cabeamento estruturado, racks, pontos de rede, lançamento e fusão de fibra óptica. Cada trecho é identificado, testado e entregue com documentação as built.',
    detalhe:
      'A execução segue o padrão de identificação de pontos de rede e conformidade com normas ABNT e TIA, reduzindo retrabalho e facilitando manutenção futura.',
    inclui: [
      'Instalação de cabeamento, racks e pontos de rede',
      'Lançamento e fusão de fibra óptica',
      'Organização, identificação e acabamento da infraestrutura',
      'Testes, certificação e entrega documentada',
      'Conformidade com as normas ABNT e TIA',
    ],
  },
  {
    slug: 'projetos-corporativos',
    title: 'Projetos Corporativos',
    eyebrow: 'Projeto',
    summary:
      'Projeto de rede corporativa com levantamento técnico, escopo fechado e acompanhamento da execução.',
    intro:
      'Planejamos infraestrutura de rede para indústrias, bancos, cooperativas e operações contínuas. O projeto de cabeamento estruturado e de infraestrutura de TI sai com escopo, prazo e materiais definidos, sem aditivos surpresa.',
    detalhe:
      'Do levantamento no local ao cronograma de implantação, a Sultec estrutura um projeto executável para implantação de infraestrutura de rede em ambientes B2B.',
    inclui: [
      'Levantamento técnico e visita ao local',
      'Projeto executivo de redes, elétrica e infraestrutura',
      'Dimensionamento de materiais e cronograma',
      'Escopo fechado, sem aditivos surpresa',
      'Acompanhamento da execução do início à entrega',
    ],
  },
  {
    slug: 'infraestrutura',
    title: 'Infraestrutura',
    eyebrow: 'Base física',
    summary:
      'Infraestrutura de TI para empresas: cabeamento, fibra óptica, racks, elétrica e CFTV corporativo.',
    intro:
      'Base física da operação: cabeamento estruturado, backbone de fibra óptica, eletrocalhas, racks, energia e pontos de CFTV. Infraestrutura elétrica e conectividade dimensionadas para o presente e preparadas para expansão.',
    detalhe:
      'Atende indústrias e empresas que precisam unificar infraestrutura elétrica estabilizada, conectividade e segurança eletrônica em um único projeto de campo.',
    inclui: [
      'Cabeamento estruturado e fibra óptica',
      'Eletrocalhas, leitos e encaminhamento',
      'Montagem e organização de racks',
      'Pontos de rede, CFTV e Wi-Fi',
      'Certificação Fluke DSX ao final da obra',
    ],
  },
  {
    slug: 'manutencao',
    title: 'Manutenção',
    eyebrow: 'Continuidade',
    summary:
      'Manutenção preventiva e corretiva de infraestrutura de rede, com diagnóstico e histórico documentado.',
    intro:
      'Planos de manutenção para manter cabeamento, racks e ativos disponíveis. Inclui inspeções periódicas, diagnóstico de cabeamento estruturado e correção de falhas com histórico de cada atendimento.',
    inclui: [
      'Manutenção preventiva programada',
      'Manutenção corretiva com prioridade',
      'Inspeção de racks, cabeamento e ativos de rede',
      'Relatórios e histórico de cada atendimento',
      'Contratos sob medida por porte de operação',
    ],
  },
  {
    slug: 'suporte',
    title: 'Suporte Especializado',
    eyebrow: 'Atendimento',
    summary:
      'Suporte técnico para infraestrutura de TI com SLA definido e atendimento em campo.',
    intro:
      'Suporte técnico com SLA acordado para redes corporativas e infraestrutura de TI. Diagnóstico remoto, atendimento em campo e acompanhamento do chamado até a solução, inclusive para operações de missão crítica.',
    inclui: [
      'Atendimento com SLA definido em contrato',
      'Plantão para operações de missão crítica',
      'Diagnóstico remoto e atendimento em campo',
      'Acompanhamento de cada chamado até a solução',
      'Equipe técnica própria e qualificada',
    ],
  },
  {
    slug: 'cabeamento-estruturado',
    title: 'Cabeamento Estruturado',
    eyebrow: 'Rede lógica',
    summary:
      'Projeto e instalação de cabeamento estruturado Cat6/Cat6A com certificação Fluke DSX para empresas.',
    intro:
      'Cabeamento estruturado para empresas, indústrias e ambientes de missão crítica: projetado, executado, identificado e certificado ponto a ponto com Fluke DSX. Adequado a Cat6 e Cat6A, com conformidade ANSI/TIA-568 e ABNT NBR 14565.',
    detalhe:
      'Em Chapecó e no Oeste de Santa Catarina, a Sultec entrega implantação de cabeamento estruturado com laudo por ponto, organização de racks e documentação pronta para auditoria.',
    inclui: [
      'Projeto e execução de redes lógicas e elétricas',
      'Cabeamento metálico (Cat 6 / 6A) e fibra óptica',
      'Identificação e organização padronizadas',
      'Certificação Fluke DSX com laudo por ponto',
      'Conformidade ANSI/TIA-568, ISO/IEC 11801 e ABNT NBR 14565',
    ],
  },
  {
    slug: 'data-center',
    title: 'Data Center',
    eyebrow: 'Ambiente crítico',
    summary:
      'Montagem de CPD e data center com racks, energia, organização e documentação técnica.',
    intro:
      'Estruturação de salas técnicas, CPD e data center: instalação de racks de rede, organização, distribuição de energia, cabeamento e mapeamento. Ambientes críticos montados com padrão e documentação completa.',
    detalhe:
      'Do rack ao laudo Fluke da estrutura, o objetivo é uma sala técnica de TI organizada, rastreável e preparada para expansão.',
    inclui: [
      'Montagem e organização de racks e CPD',
      'Distribuição de energia e climatização',
      'Cabeamento, identificação e mapeamento',
      'Documentação técnica completa',
      'Certificação Fluke DSX da estrutura',
    ],
  },
  {
    slug: 'certificacao',
    title: 'Certificação de Rede',
    eyebrow: 'Laudo técnico',
    summary:
      'Certificação Fluke DSX de cabeamento e rede com laudos digitais auditáveis ponto a ponto.',
    intro:
      'Certificamos cada ponto com Fluke DSX (incluindo cenários DSX-8000), gerando relatório e laudo de certificação de rede rastreáveis. Cobre teste de link permanente e canal, com conformidade ANSI/TIA-568 e NBR 14565.',
    detalhe:
      'Indicado para obras novas, modernização de rede corporativa e validação de infraestrutura existente antes de expansões críticas.',
    inclui: [
      'Certificação ponto a ponto com Fluke DSX',
      'Laudos digitais auditáveis e rastreáveis',
      'Conformidade ANSI/TIA-568, ISO/IEC 11801 e ABNT NBR 14565',
      'Identificação e documentação completas',
      'Relatório técnico entregue ao final da obra',
    ],
  },
]

export function getServicoBySlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug)
}
