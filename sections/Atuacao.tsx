'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { totais } from '@/data/atuacao'

const AtuacaoMap = dynamic(
  () => import('./AtuacaoMap').then((mod) => mod.AtuacaoMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full aspect-[800/620] rounded-[20px] border border-[#1c1d1e] bg-[#0D0D0D]"
        aria-hidden="true"
      />
    ),
  }
)

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span
        className="font-roboto font-bold text-white leading-none tracking-[-0.04em]"
        style={{ fontSize: 'clamp(2.25rem, 5vw, 56px)' }}
      >
        {value}
      </span>
      <span className="font-sora text-[#ABADAB] text-[14px] tracking-[-0.01em] mt-2">
        {label}
      </span>
    </div>
  )
}

export function Atuacao() {
  const triggerRef = useRef<HTMLDivElement>(null)
  const [loadMap, setLoadMap] = useState(false)

  useEffect(() => {
    const element = triggerRef.current
    if (!element || loadMap) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setLoadMap(true)
        observer.disconnect()
      },
      { rootMargin: '600px 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [loadMap])

  return (
    <section id="atuacao" className="relative bg-[#070808] py-20 lg:py-28 border-b border-[#F35901]/30">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-3 mb-10 lg:mb-12 max-w-[820px]">
          <p className="font-sora text-[#F35901] text-[15px] tracking-[-0.04em] uppercase">
            Onde atuamos
          </p>
          <h2
            className="font-roboto font-bold text-white"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.05em',
            }}
          >
            Sultec presente em diversas <span className="text-[#F35901]">regiões do Brasil.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10">
            <Stat value={totais.estados} label="Estados de atuação" />
            <Stat value={totais.municipios} label="Municípios atendidos" />
            <Stat value={totais.unidades} label="Unidades atendidas" />
          </div>

          <div ref={triggerRef}>
            {loadMap ? (
              <AtuacaoMap />
            ) : (
              <div
                className="w-full aspect-[800/620] rounded-[20px] border border-[#1c1d1e] bg-[#0D0D0D]"
                aria-label="Mapa de atuação da Sultec será carregado ao se aproximar desta seção"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
