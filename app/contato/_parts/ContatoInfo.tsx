'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '@/lib/animations'

const ICON = {
  className: 'w-5 h-5',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ContatoInfo() {
  return (
    <motion.aside
      className="flex flex-col gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* WhatsApp — primary action */}
      <motion.div variants={fadeUp} whileHover={buttonHover} whileTap={buttonTap}>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-2xl px-6 py-5 transition-colors"
        >
          <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.85 11.85 0 0 0 5.65 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.47-8.44zM12.04 21.7h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.83 9.83 0 0 1-1.51-5.2c0-5.44 4.42-9.86 9.86-9.86 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.87-9.87 9.87zm5.41-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-sora text-[12px] uppercase tracking-[0.1em] opacity-90">WhatsApp direto</p>
            <p className="font-sora font-semibold text-[18px] tracking-[-0.02em]">(00) 00000-0000</p>
          </div>
        </a>
      </motion.div>

      {/* Contact rows */}
      <motion.div variants={fadeUp} className="bg-dark-700 border border-[#1c1d1e] rounded-2xl p-6 flex flex-col gap-5">
        <InfoRow
          title="E-mail"
          value={<a href="mailto:contato@example.com" className="hover:text-[#F35901] transition-colors break-all">contato@example.com</a>}
          icon={
            <svg viewBox="0 0 24 24" {...ICON}>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          }
        />
        <Divider />
        <InfoRow
          title="Endereço"
          value="Avenida Antônio Sachett, N° 151 D — Desbravador, Chapecó/SC, CEP 89811-396"
          icon={
            <svg viewBox="0 0 24 24" {...ICON}>
              <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          }
        />
        <Divider />
        <InfoRow
          title="Horário"
          value="Segunda a Sexta — 08:00 às 18:00"
          icon={
            <svg viewBox="0 0 24 24" {...ICON}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          }
        />
      </motion.div>

      {/* 24h highlight */}
      <motion.div
        variants={fadeUp}
        className="bg-[#C84700] text-white rounded-2xl p-6 flex items-center gap-4"
      >
        <span className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" {...ICON} className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <div>
          <p className="font-sora text-[12px] uppercase tracking-[0.1em] opacity-90">Operação crítica</p>
          <p className="font-sora font-semibold text-[18px] tracking-[-0.02em]">Atendimento técnico 24h</p>
        </div>
      </motion.div>
    </motion.aside>
  )
}

function InfoRow({ title, value, icon }: { title: string; value: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-10 h-10 rounded-xl bg-[#F35901]/10 text-[#F35901] flex items-center justify-center flex-shrink-0">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-sora text-muted text-[12px] uppercase tracking-[0.05em] mb-1">{title}</p>
        <p className="font-sora text-white text-[15px] leading-[1.5]">{value}</p>
      </div>
    </div>
  )
}

function Divider() {
  return <span aria-hidden className="h-px bg-white/5" />
}
