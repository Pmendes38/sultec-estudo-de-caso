// ─────────────────────────────────────────────────────────────────────────────
// Conteúdo das páginas individuais de soluções/serviços.
// Cobre os 12 cards do site (home + /servicos), deduplicando os equivalentes
// (Projetos Corporativos, Manutenção e Suporte aparecem nos dois lugares e
// apontam para a mesma página). Resultado: 9 páginas únicas.
// ─────────────────────────────────────────────────────────────────────────────

export type Servico = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  intro: string
  inclui: string[]
}

export const servicos: Servico[] = [
  {
    slug: 'solucoes-tecnologicas',
    title: 'Soluções Tecnológicas',
    eyebrow: 'Solução',
    summary: 'Tecnologia de ponta aplicada para impulsionar os resultados do seu negócio.',
    intro:
      'Reunimos as melhores tecnologias de conectividade, redes e segurança eletrônica em soluções sob medida para a sua operação. Da escolha dos equipamentos à integração final, entregamos um ecossistema que conversa entre si e cresce junto com a empresa.',
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
    eyebrow: 'Solução',
    summary: 'Execução técnica em campo com qualidade, segurança e conformidade.',
    intro:
      'Equipe própria e qualificada para executar em campo o que foi projetado — com padrão de acabamento, segurança e conformidade às normas. Cada serviço é entregue testado, identificado e documentado.',
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
    eyebrow: 'Solução',
    summary: 'Projetos de infraestrutura sob medida para empresas de todos os portes.',
    intro:
      'Planejamento de infraestrutura para indústrias, bancos, cooperativas e operações que não podem parar. Levantamos o cenário, dimensionamos a solução e entregamos um projeto executável — com escopo, prazo e materiais fechados.',
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
    eyebrow: 'Solução',
    summary: 'Soluções robustas em rede, cabeamento e instalações.',
    intro:
      'Toda a base física que sustenta a operação: cabeamento estruturado, fibra óptica, eletrocalhas, racks e energia. Infraestrutura dimensionada para o presente e preparada para a expansão.',
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
    eyebrow: 'Solução',
    summary: 'Planos de manutenção preventiva e corretiva especializados.',
    intro:
      'Contratos de manutenção para manter a infraestrutura instalada sempre disponível. Inspeções periódicas, ajustes finos e correção ágil de falhas, com histórico documentado de cada atendimento.',
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
    eyebrow: 'Solução',
    summary: 'Atendimento técnico ágil, com equipe qualificada e SLA definido.',
    intro:
      'Suporte técnico com SLA acordado e plantão para operações de missão crítica. Zero chamado sem resposta — cada solicitação é atendida e acompanhada até a solução.',
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
    eyebrow: 'Solução',
    summary: 'Projeto e execução de redes lógicas e elétricas com certificação Fluke DSX.',
    intro:
      'Cabeamento estruturado para ambientes corporativos, industriais e de missão crítica — projetado, executado, identificado e certificado ponto a ponto com o Fluke DSX, um dos certificadores mais avançados do mercado.',
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
    eyebrow: 'Solução',
    summary: 'Montagem, organização e documentação de salas técnicas e CPDs.',
    intro:
      'Estruturação de salas técnicas e CPDs — racks, climatização, energia, organização e identificação completas. Ambientes críticos montados com padrão e totalmente documentados.',
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
    eyebrow: 'Solução',
    summary: 'Laudos técnicos auditáveis com Fluke DSX, documentados ponto a ponto.',
    intro:
      'Testamos e certificamos cada ponto da sua rede com o Fluke DSX, gerando laudos digitais auditáveis e rastreáveis. A garantia de que a infraestrutura entregue atende às normas e ao padrão exigido por grandes operações.',
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
