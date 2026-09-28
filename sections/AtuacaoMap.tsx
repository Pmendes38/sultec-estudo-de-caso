'use client'

import { useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import {
  municipiosGeo,
  ufsAtuacao,
  showClientNames,
  coordKey,
  type MunicipioGeo,
} from '@/data/atuacao'

const GEO_URL = '/geo/brazil-states.json'
const UF_SET = new Set<string>(ufsAtuacao)
const COPPER = '#C87533'
const BASE_DARK = '#0D0D0D'

function pinRadius(unidades: number) {
  return 2.2 + Math.sqrt(unidades) * 1.05
}

type Hover = { m: MunicipioGeo; x: number; y: number }

export function AtuacaoMap() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<Hover | null>(null)
  const projectionConfig = { center: [-54.4, -15.1] as [number, number], scale: 790 }

  const showTip = (m: MunicipioGeo, e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    setHover({ m, x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={wrapRef}
      className="relative w-full rounded-[20px] border border-[#1c1d1e] bg-[#0D0D0D] overflow-hidden"
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

        {municipiosGeo.map((m) => {
          const r = pinRadius(m.unidades)
          return (
            <Marker key={coordKey(m)} coordinates={[m.lon, m.lat]}>
              <circle r={r + 2} fill={COPPER} opacity={0.1} />
              <circle
                r={r}
                fill={COPPER}
                fillOpacity={0.92}
                stroke="#0D0D0D"
                strokeWidth={0.7}
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) => showTip(m, e)}
                onMouseMove={(e) => showTip(m, e)}
                onMouseLeave={() => setHover(null)}
              />
            </Marker>
          )
        })}
      </ComposableMap>

      {hover && (
        <div
          className="pointer-events-none absolute z-20 rounded-[10px] border border-[#C87533]/40 bg-[#0a0b0b]/95 px-3.5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm"
          style={{
            left: hover.x,
            top: hover.y,
            transform: 'translate(-50%, calc(-100% - 16px))',
          }}
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

      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
        <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: COPPER }} />
        <span className="font-sora text-[#ABADAB] text-[11px]">
          Tamanho do pino ∝ nº de unidades
        </span>
      </div>
    </div>
  )
}
