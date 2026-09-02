// ─────────────────────────────────────────────────────────────────────────────
// Geocoding ÚNICO (build-time) dos municípios de atuação da Sultec.
// Lê data/atuacao.json, consulta o Nominatim/OpenStreetMap uma vez por município
// e grava data/atuacao-coords.json. NENHUMA chamada de geocoding em runtime.
//
// Uso:  node scripts/geocode-atuacao.mjs
// Etiqueta Nominatim: 1 req/seg + User-Agent identificável.
// Municípios marcados como "pendente" não são geocodificados (não plotar).
// ─────────────────────────────────────────────────────────────────────────────
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA = join(__dirname, '..', 'data', 'atuacao.json')
const OUT = join(__dirname, '..', 'data', 'atuacao-coords.json')

const UA = 'SultecSiteGeocode/1.0 (https://sultec.example; contato@example.com)'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const key = (m) => `${m.municipio}__${m.uf}`

// Caixa de contorno aproximada do Brasil. Sanity check pós-geocoding.
const BR_BOUNDS = { latMin: -34.5, latMax: 5.5, lonMin: -74.5, lonMax: -34 }

async function geocode(municipio, uf) {
  const q = `${municipio}, ${uf}, Brasil`
  const url =
    'https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=1&countrycodes=br&q=' +
    encodeURIComponent(q)
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'pt-BR' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const arr = await res.json()
  if (!Array.isArray(arr) || arr.length === 0) return null
  const hit = arr[0]
  return { lat: Number(hit.lat), lon: Number(hit.lon), display: hit.display_name }
}

async function main() {
  const municipios = JSON.parse(await readFile(DATA, 'utf8'))

  /** @type {Record<string, {lat:number, lon:number}>} */
  let coords = {}
  try {
    coords = JSON.parse(await readFile(OUT, 'utf8'))
  } catch {
    /* primeira execução */
  }

  const pending = []
  const failed = []
  const outOfBounds = []

  for (const m of municipios) {
    if (m.pendente) {
      pending.push(key(m))
      continue
    }
    if (coords[key(m)]) {
      console.log(`· cache  ${m.municipio}/${m.uf}`)
      continue
    }
    try {
      const r = await geocode(m.municipio, m.uf)
      if (!r) {
        console.warn(`✗ NÃO ENCONTRADO  ${m.municipio}/${m.uf}`)
        failed.push(key(m))
      } else {
        const inBR =
          r.lat >= BR_BOUNDS.latMin && r.lat <= BR_BOUNDS.latMax &&
          r.lon >= BR_BOUNDS.lonMin && r.lon <= BR_BOUNDS.lonMax
        if (!inBR) outOfBounds.push(`${key(m)} -> ${r.lat},${r.lon}`)
        coords[key(m)] = { lat: r.lat, lon: r.lon }
        console.log(`✓ ${m.municipio}/${m.uf}  ${r.lat.toFixed(4)}, ${r.lon.toFixed(4)}  [${r.display}]`)
      }
    } catch (err) {
      console.error(`✗ ERRO  ${m.municipio}/${m.uf}:`, err.message)
      failed.push(key(m))
    }
    await sleep(1100) // etiqueta Nominatim: <= 1 req/seg
  }

  await writeFile(OUT, JSON.stringify(coords, null, 2) + '\n', 'utf8')

  console.log('\n──────── resumo ────────')
  console.log(`geocodificados: ${Object.keys(coords).length}`)
  console.log(`pendentes (não plotar): ${pending.length ? pending.join(', ') : '-'}`)
  console.log(`falhas: ${failed.length ? failed.join(', ') : '-'}`)
  console.log(`fora dos limites do BR (revisar): ${outOfBounds.length ? outOfBounds.join(' | ') : '-'}`)
  if (failed.length) process.exitCode = 1
}

main()
