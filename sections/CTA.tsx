'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '@/lib/animations'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  // Px-based parallax keeps the -translate-y-1/2 centering intact
  const sParallax = useTransform(scrollYProgress, [0, 1], [40, -40])
  // Tight scale keeps any breathing imperceptible at the edges
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98])

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative bg-[#070808] pt-0 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Atmospheric glow — covers the full section so the radial fully fades
          to transparent before reaching any edge (no rectangular halo). Two
          stacked gradients give the light depth and a brighter core. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: `
            radial-gradient(60% 70% at 19% 50%, rgba(243, 89, 1, 0.42) 0%, rgba(243, 89, 1, 0.22) 22%, rgba(243, 89, 1, 0.08) 45%, rgba(243, 89, 1, 0.02) 65%, transparent 80%),
            radial-gradient(35% 45% at 19% 50%, rgba(255, 130, 40, 0.30) 0%, rgba(255, 130, 40, 0.10) 35%, transparent 65%)
          `,
          scale: glowScale,
          willChange: 'transform',
        }}
      />

      {/* Container for content + S asset (max width matches other sections) */}
      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 min-h-[480px] lg:min-h-[540px]">

        {/* TOP RIGHT: dot grid accent */}
        <div
          aria-hidden
          className="absolute right-0 top-0 w-[280px] lg:w-[340px] h-[120px] lg:h-[160px] pointer-events-none hidden lg:block"
          style={{
            backgroundImage:
              'radial-gradient(circle, #F35901 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
            opacity: 0.7,
            maskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
          }}
        />

        {/* S asset — desktop only, centered on the glow center
            Glow center: 19% horizontal × 50% vertical of the section */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-1/2 left-[19%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 lg:w-[440px] lg:h-[500px] xl:w-[520px] xl:h-[580px] 2xl:w-[600px] 2xl:h-[680px]"
        >
          <motion.div
            className="relative w-full h-full"
            style={{ y: sParallax, willChange: 'transform' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportOnce}
          >
            <Image
              src="/sultec/patterns/asset-logo-sultec.png"
              alt=""
              fill
              className="object-contain"
              priority={false}
            />
          </motion.div>
        </div>

        {/* Content block — single layout that:
            - 3xl+ (≥1655px): side-by-side, S/glow on left, text center, buttons right
            - Below 3xl: text + buttons stacked, centered */}
        <div className="relative z-20 pt-16 3xl:pt-24">
          <div className="flex flex-col 3xl:flex-row 3xl:items-center 3xl:justify-between gap-8 3xl:gap-12 min-h-[360px]">

            {/* Spacer reserves the left half for the S+glow on 3xl+ */}
            <div className="hidden 3xl:block 3xl:w-[38%] flex-shrink-0" />

            {/* Heading + subtitle — right-aligned below 3xl, left-aligned on 3xl+ */}
            <motion.div
              className="flex flex-col gap-5 w-full 3xl:max-w-[600px] flex-1 text-right 3xl:text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="font-roboto-condensed font-normal text-white uppercase"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 44px)',
                  lineHeight: '1.18',
                  letterSpacing: '0.02em',
                  willChange: 'transform, opacity',
                }}
              >
                <span className="block 3xl:whitespace-nowrap">Vamos Conversar Sobre</span>
                <span className="block 3xl:whitespace-nowrap text-[#F35901]">O Seu Projeto?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora font-normal text-white leading-[1.5] ml-auto 3xl:mx-0"
                style={{
                  fontSize: 'clamp(1rem, 1.3vw, 1.1rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '520px',
                }}
              >
                Nossa equipe está pronta para entender sua necessidade
                {' '}e apresentar a melhor solução.
              </motion.p>
            </motion.div>

            {/* CTA Buttons — stack vertically. Below 3xl: centered under text.
                On 3xl+: fixed-width column on the right */}
            <motion.div
              className="flex flex-col gap-4 w-full max-w-[380px] ml-auto 3xl:mx-0 3xl:w-[380px] 3xl:flex-shrink-0"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.a
                variants={fadeUp}
                whileHover={buttonHover}
                whileTap={buttonTap}
                href="tel:+5511999999999"
                className="flex items-center justify-between gap-3 bg-[#F35901] rounded-[10px] px-6 py-4 font-sora text-white text-[16px] 3xl:text-[18px] font-normal hover:bg-[#d14d01] transition-colors"
              >
                <span className="flex-1 text-left">Solicitar orçamento</span>
                <motion.svg width="18" height="18" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }} className="flex-shrink-0 ml-2">
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={buttonHover}
                whileTap={buttonTap}
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-transparent border-[3px] border-[#F35901] rounded-[10px] px-6 py-[14px] font-sora text-white text-[16px] 3xl:text-[18px] font-normal hover:bg-[#F35901]/10 transition-colors"
              >
                <span className="flex-1 text-left">Falar via WhatsApp</span>
                <Image
                  src="/sultec/icons/whatsapp.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="flex-shrink-0 ml-2"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
