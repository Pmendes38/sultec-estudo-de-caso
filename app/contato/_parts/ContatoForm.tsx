'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, buttonHover, buttonTap, viewportOnce } from '@/lib/animations'

type FormState = {
  nome: string
  empresa: string
  email: string
  telefone: string
  tipo: string
  mensagem: string
}

const TIPOS = [
  'Cabeamento Estruturado',
  'Data Center',
  'Certificação de Rede',
  'Manutenção Preventiva',
  'Outro',
] as const

const empty: FormState = { nome: '', empresa: '', email: '', telefone: '', tipo: '', mensagem: '' }

export function ContatoForm() {
  const [data, setData] = useState<FormState>(empty)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: integrar com endpoint de envio (Resend, Sendgrid ou similar)
    console.log('[contato] submit', data)
    setTimeout(() => {
      setStatus('sent')
      setData(empty)
    }, 600)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-dark-700 border border-[#1c1d1e] rounded-2xl p-7 lg:p-10 flex flex-col gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      noValidate
    >
      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nome completo" id="nome">
          <input id="nome" type="text" required value={data.nome} onChange={update('nome')} className={inputClass} />
        </Field>
        <Field label="Empresa" id="empresa">
          <input id="empresa" type="text" required value={data.empresa} onChange={update('empresa')} className={inputClass} />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="E-mail corporativo" id="email">
          <input id="email" type="email" required value={data.email} onChange={update('email')} className={inputClass} />
        </Field>
        <Field label="Telefone / WhatsApp" id="telefone">
          <input id="telefone" type="tel" required value={data.telefone} onChange={update('telefone')} className={inputClass} />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Field label="Tipo de projeto" id="tipo">
          <select id="tipo" required value={data.tipo} onChange={update('tipo')} className={inputClass}>
            <option value="" disabled>Selecione…</option>
            {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Field label="Mensagem" id="mensagem">
          <textarea id="mensagem" required rows={5} value={data.mensagem} onChange={update('mensagem')} className={`${inputClass} resize-y min-h-[120px]`} />
        </Field>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-4">
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={buttonHover}
          whileTap={buttonTap}
          className="inline-flex items-center justify-center gap-3 font-sora text-white text-[15px] bg-[#C84700] hover:bg-orange-600 disabled:opacity-60 rounded-[14px] px-8 py-[14px] transition-colors"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
        {status === 'sent' && (
          <p role="status" className="font-sora text-[14px] text-[#F35901]">
            Mensagem registrada — em breve nosso time entra em contato.
          </p>
        )}
      </motion.div>
    </motion.form>
  )
}

const inputClass =
  'w-full bg-dark-900 border border-[#1c1d1e] focus:border-[#F35901] focus:outline-none rounded-xl px-4 py-3 font-sora text-white text-[14px] placeholder:text-muted/50 transition-colors'

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="font-sora text-muted text-[13px] tracking-[-0.01em]">{label}</span>
      {children}
    </label>
  )
}
