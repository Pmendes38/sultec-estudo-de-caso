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
  // Tight scale range avoids edge artifacts when the rectangular container scales
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98])

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative bg-[#070808] pt-0 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* All visual layers + content live inside the same max-w container so
          they scale together at every viewport (S stays centered on glow,
          heading never overlaps S). */}
      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14 min-h-[480px] lg:min-h-[540px]">

        {/* Orange radial glow — anchored to the LEFT side of the content area */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-[55%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 90% at 35% 50%, rgba(243,89,1,0.60) 0%, rgba(182,67,1,0.30) 25%, rgba(122,45,1,0.12) 45%, rgba(122,45,1,0.04) 65%, transparent 90%)',
            scale: glowScale,
            willChange: 'transform',
          }}
        />

        {/* PATTERN LINES — confined to the glow area */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-[55%] pointer-events-none z-10"
          style={{
            maskImage:
              'radial-gradient(ellipse 55% 65% at 35% 50%, black 25%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 55% 65% at 35% 50%, black 25%, transparent 75%)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewportOnce}
        >
          <Image
            src="/sultec/patterns/pattern-lines.png"
            alt=""
            fill
            className="object-contain object-left mix-blend-screen"
            priority={false}
          />
        </motion.div>

        {/* TOP RIGHT: dot grid */}
        <div
          className="absolute right-0 top-0 w-[280px] lg:w-[340px] h-[120px] lg:h-[160px] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #F35901 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
            opacity: 0.75,
            maskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom left, black 30%, transparent 80%)',
          }}
        />

        {/* S asset — desktop only, centered on the glow center
            Glow center: 35% × 55% ≈ 19.25% of the content container */}
        <div
          className="hidden lg:block absolute top-1/2 left-[19.25%] -translate-x-1/2 -translate-y-1/2 w-[440px] xl:w-[520px] 2xl:w-[600px] h-[500px] xl:h-[580px] 2xl:h-[680px] pointer-events-none z-20"
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

        {/* Content */}
        <div className="relative z-10 pt-16 lg:pt-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 min-h-[360px]">

            {/* Spacer reserves the left half for the S+glow */}
            <div className="hidden lg:block lg:w-[38%] flex-shrink-0" />

            {/* Center: Heading + subtitle */}
            <motion.div
              className="flex flex-col gap-5 max-w-[600px] flex-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="font-roboto-condensed font-normal text-white uppercase"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 44px)',
                  lineHeight: '1.18',
                  letterSpacing: '0.02em',
                  willChange: 'transform, opacity',
                }}
              >
                <span className="block lg:whitespace-nowrap">Vamos Conversar Sobre</span>
                <span className="block lg:whitespace-nowrap text-[#F35901]">O Seu Projeto?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sora font-normal text-white leading-[1.5]"
                style={{
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                  letterSpacing: '-0.04em',
                  maxWidth: '480px',
                }}
              >
                Nossa equipe está pronta para entender sua necessidade<br className="hidden lg:block" />
                {' '}e apresentar a melhor solução.
              </motion.p>
            </motion.div>

            {/* Right: CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 w-full max-w-[380px] lg:w-[380px] lg:flex-shrink-0"
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
                className="flex items-center justify-between gap-3 bg-[#F35901] rounded-[10px] px-6 py-4 font-sora text-white text-[16px] sm:text-[17px] lg:text-[18px] font-normal hover:bg-[#d14d01] transition-colors whitespace-nowrap"
              >
                <span className="flex-1 text-left">Solicitar orçamento</span>
                <motion.svg width="20" height="20" viewBox="0 0 14 14" fill="none" whileHover={{ x: 3 }} className="flex-shrink-0 ml-2">
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
                className="flex items-center justify-between gap-3 bg-transparent border-[3px] border-[#F35901] rounded-[10px] px-6 py-[16px] font-sora text-white text-[16px] sm:text-[17px] lg:text-[18px] font-normal hover:bg-[#F35901]/10 transition-colors whitespace-nowrap"
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
