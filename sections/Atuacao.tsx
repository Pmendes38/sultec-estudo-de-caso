'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import {
  municipiosGeo,
  totais,
  ufsAtuacao,
  showClientNames,
  coordKey,
  type MunicipioGeo,
} from '@/data/atuacao'

const GEO_URL = '/geo/brazil-states.json'
const UF_SET = new Set<string>(ufsAtuacao)

// Cores da identidade do mapa
const COPPER = '#C87533'
const BASE_DARK = '#0D0D0D'

// Raio do pino proporcional ao nº de unidades (sqrt p/ não explodir nos grandes).
function pinRadius(unidades: number) {
  return 3.5 + Math.sqrt(unidades) * 2.1
}

type Hover = { m: MunicipioGeo; x: number; y: number }

// ─── Contador animado ─────────────────────────────────────────────────────────
function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1100
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-roboto font-bold text-white leading-none tracking-[-0.04em]" style={{ fontSize: 'clamp(2.25rem, 5vw, 56px)' }}>
        {n}
      </span>
      <span className="font-sora text-[#ABADAB] text-[14px] tracking-[-0.01em] mt-2">{label}</span>
    </div>
  )
}

export function Atuacao() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<Hover | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Foco no Sul; no mobile aproxima ainda mais o oeste de SC.
  const projectionConfig = isMobile
    ? { center: [-52.4, -27] as [number, number], scale: 3700 }
    : { center: [-52, -27.6] as [number, number], scale: 2550 }

  const showTip = (m: MunicipioGeo, e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    setHover({ m, x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section id="atuacao" className="relative bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 mb-10 lg:mb-12 max-w-[820px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Onde atuamos
          </p>
          <h2
            className="font-roboto font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.05em' }}
          >
            Sultec presente em diversas <span className="text-[#F35901]">regiões do Brasil.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center">

          {/* Contadores */}
          <motion.div
            className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Stat value={totais.estados} label="Estados de atuação" />
            <Stat value={totais.municipios} label="Municípios atendidos" />
            <Stat value={totais.unidades} label="Unidades atendidas" />
          </motion.div>

          {/* Mapa */}
          <motion.div
            ref={wrapRef}
            className="relative w-full rounded-[20px] border border-[#1c1d1e] bg-[#0D0D0D] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={projectionConfig}
              width={800}
              height={620}
              style={{ width: '100%', height: 'auto' }}
              aria-label="Mapa de atuação da Sultec na região Sul do Brasil"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const highlighted = UF_SET.has(geo.properties.sigla)
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: highlighted ? '#17181c' : BASE_DARK,
                            stroke: highlighted ? COPPER : '#23272e',
                            strokeWidth: highlighted ? 0.7 : 0.4,
                            outline: 'none',
                          },
                          hover: {
                            fill: highlighted ? '#1c1e23' : '#101113',
                            stroke: highlighted ? COPPER : '#23272e',
                            strokeWidth: highlighted ? 0.7 : 0.4,
                            outline: 'none',
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {municipiosGeo.map((m, i) => {
                const r = pinRadius(m.unidades)
                return (
                  <Marker key={coordKey(m)} coordinates={[m.lon, m.lat]}>
                    {/* halo */}
                    <circle r={r + 3} fill={COPPER} opacity={0.12} />
                    {/* pino animado */}
                    <motion.circle
                      r={r}
                      fill={COPPER}
                      fillOpacity={0.92}
                      stroke="#0D0D0D"
                      strokeWidth={0.7}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.022, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ cursor: 'pointer', transformBox: 'fill-box', transformOrigin: 'center' }}
                      whileHover={{ scale: 1.25 }}
                      onMouseEnter={(e) => showTip(m, e)}
                      onMouseMove={(e) => showTip(m, e)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </Marker>
                )
              })}
            </ComposableMap>

            {/* Tooltip */}
            {hover && (
              <div
                className="pointer-events-none absolute z-20 rounded-[10px] border border-[#C87533]/40 bg-[#0a0b0b]/95 px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm"
                style={{ left: hover.x, top: hover.y, transform: 'translate(-50%, calc(-100% - 16px))' }}
              >
                <p className="font-roboto font-semibold text-white text-[14px] whitespace-nowrap leading-tight">
                  {hover.m.municipio}
                  <span className="text-[#C87533]"> · {hover.m.uf}</span>
                </p>
                <p className="font-sora text-[#ABADAB] text-[12px] mt-0.5 whitespace-nowrap">
                  {hover.m.unidades} {hover.m.unidades === 1 ? 'unidade atendida' : 'unidades atendidas'}
                </p>
                {showClientNames && (
                  <p className="font-sora text-[#7c7e7d] text-[11px] mt-0.5 whitespace-nowrap">
                    {hover.m.clientes.map((c) => c.nome).join(', ')}
                  </p>
                )}
              </div>
            )}

            {/* Legenda */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: COPPER }} />
              <span className="font-sora text-[#ABADAB] text-[11px]">
                Tamanho do pino ∝ nº de unidades
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
