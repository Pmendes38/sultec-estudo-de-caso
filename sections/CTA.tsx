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
      {/* Container for content + visual layers (max width matches other sections).
          Glow + pattern + S all live INSIDE this container so they share the
          same coordinate system and stay perfectly aligned at every viewport. */}
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

        {/* GLOW + PATTERN + S — ALL nested inside a single anchor wrapper so
            their visual centers are guaranteed to share the exact same pixel.
            Sizing the wrapper to match the S asset means: the wrapper's
            center == the S's center == the glow's center == the pattern's
            center. No coordinate-system drift between layers. */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 pointer-events-none lg:w-[440px] lg:h-[500px] xl:w-[520px] xl:h-[580px] 2xl:w-[600px] 2xl:h-[680px]"
        >
          {/* Glow — sits behind everything; sized way bigger than the wrapper
              and centered via translate so the gradient halo wraps the S */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '900px',
              height: '500px',
              background:
                'radial-gradient(ellipse at center, rgba(255, 140, 50, 0.40) 0%, rgba(243, 89, 1, 0.20) 20%, rgba(243, 89, 1, 0.07) 40%, rgba(243, 89, 1, 0.02) 60%, transparent 75%)',
              scale: glowScale,
              filter: 'blur(30px)',
              willChange: 'transform',
            }}
          />

          {/* Pattern lines — centered on the wrapper, mix-blend-screen so
              only the orange traces are visible */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] lg:w-[720px] lg:h-[600px] xl:w-[820px] xl:h-[680px] 2xl:w-[920px] 2xl:h-[760px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewportOnce}
          >
            <Image
              src="/sultec/patterns/pattern-lines.png"
              alt=""
              fill
              className="object-contain mix-blend-screen opacity-90"
              priority={false}
            />
          </motion.div>

          {/* S asset — fills the wrapper exactly */}
          <motion.div
            className="relative w-full h-full z-10"
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

            {/* Spacer reserves the left half for the S+glow on 3xl+
                (S anchor at left-[25%] + 300px asset radius ≈ 45% of container) */}
            <div className="hidden 3xl:block 3xl:w-[44%] flex-shrink-0" />

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
