// Wrapper tipado dos dados de atuação da Sultec.
// Fonte de verdade: data/atuacao.json (editável à mão).
// Coordenadas: data/atuacao-coords.json (geradas uma única vez por
// scripts/geocode-atuacao.mjs — nenhuma chamada de geocoding em runtime).
import raw from './atuacao.json'
import coordsRaw from './atuacao-coords.json'

export type Cliente = 'Aurora' | 'Sicoob' | 'Vibra'
export type UF = 'SC' | 'PR' | 'RS'

export type ClienteUnidades = { nome: Cliente; unidades: number }

export type Municipio = {
  municipio: string
  uf: UF
  unidades: number
  /** Uso interno — só exibido se `showClientNames` estiver ativo. */
  clientes: ClienteUnidades[]
  /** Marcado quando a cidade ainda não foi confirmada — não plotar. */
  pendente?: boolean
  obs?: string
}

export type Coord = { lat: number; lon: number }
export type MunicipioGeo = Municipio & { lat: number; lon: number }

export const municipios = raw as Municipio[]
const coords = coordsRaw as Record<string, Coord>

export const coordKey = (m: { municipio: string; uf: string }) =>
  `${m.municipio}__${m.uf}`

/** Municípios plotáveis: não pendentes e com coordenada resolvida. */
export const municipiosGeo: MunicipioGeo[] = municipios
  .filter((m) => !m.pendente && coords[coordKey(m)])
  .map((m) => ({ ...m, ...coords[coordKey(m)] }))

/** UFs de atuação — destaque sutil no mapa. */
export const ufsAtuacao: UF[] = ['SC', 'PR', 'RS']

// ─────────────────────────────────────────────────────────────────────────────
// Totais de autoridade (prova social) informados pela Sultec.
// NOTA: a lista enumerada em atuacao.json soma 31 municípios (30 plotados + 1
// pendente) e 54 unidades. Os valores abaixo são os totais OFICIAIS fornecidos
// pela Sultec — mantidos como fonte para os contadores. Ajustar aqui se mudar.
// ─────────────────────────────────────────────────────────────────────────────
export const totais = {
  estados: 3,
  municipios: 32,
  unidades: 55,
}

// Flag de privacidade/compliance.
// Default FALSE — nomes de clientes NÃO aparecem nos pinos/tooltips.
// Ativar somente quando a autorização de uso de marca for confirmada.
export const showClientNames = false
