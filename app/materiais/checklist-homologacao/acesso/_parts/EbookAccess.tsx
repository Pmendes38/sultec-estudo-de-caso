'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  EBOOK_ACCESS_STORAGE_KEY,
  EBOOK_CONTENT_NAME,
  EBOOK_PDF_PATH,
} from '@/lib/leads/ebook-homologacao'
import { trackEbookAccess, trackEbookDownload } from '@/lib/meta-pixel'

export function EbookAccess() {
  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const [iframeFailed, setIframeFailed] = useState(false)
  const accessTracked = useRef(false)
  const downloadGuard = useRef(false)

  useEffect(() => {
    try {
      setAuthorized(sessionStorage.getItem(EBOOK_ACCESS_STORAGE_KEY) === '1')
    } catch {
      setAuthorized(false)
    }
  }, [])

  useEffect(() => {
    if (!authorized || accessTracked.current) return
    accessTracked.current = true
    trackEbookAccess({ content_name: EBOOK_CONTENT_NAME })
  }, [authorized])

  const handleDownload = () => {
    if (downloadGuard.current) return
    downloadGuard.current = true
    trackEbookDownload({ content_name: EBOOK_CONTENT_NAME })
    window.setTimeout(() => {
      downloadGuard.current = false
    }, 800)
  }

  if (authorized === null) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="font-sora text-muted text-[14px]">Carregando…</p>
      </div>
    )
  }

  if (!authorized) {
    return (
      <div className="max-w-[640px] mx-auto px-5 sm:px-8 py-16 text-center">
        <h1 className="font-roboto font-bold text-white text-[28px] tracking-[-0.03em]">
          Acesso ao material
        </h1>
        <p className="font-sora text-muted text-[15px] leading-[1.6] mt-4">
          Para liberar o Checklist de Homologação, preencha o formulário na página de captura.
        </p>
        <Link
          href="/materiais/checklist-homologacao"
          className="inline-flex mt-8 items-center justify-center font-sora text-white text-[15px] bg-[#F35901] hover:bg-orange-600 rounded-[14px] px-8 py-[14px] transition-colors"
        >
          Ir para o formulário
        </Link>
      </div>
    )
  }

  return (
    <div className="pb-20">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-14 pt-4">
        <h1 className="font-roboto font-bold text-white text-[28px] sm:text-[34px] tracking-[-0.03em]">
          Material liberado
        </h1>
        <p className="font-sora text-muted text-[15px] lg:text-[16px] leading-[1.65] mt-4 max-w-[720px]">
          Seu Checklist de Homologação Técnica de Fornecedores de Cabeamento Estruturado está
          disponível. Você pode ler o conteúdo abaixo ou baixar o PDF para consultar durante a
          avaliação de fornecedores e propostas.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-7">
          <a
            href={EBOOK_PDF_PATH}
            download="checklist-homologacao-fornecedores-cabeamento-sultec.pdf"
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 font-sora text-white text-[15px] bg-[#F35901] hover:bg-orange-600 rounded-[14px] px-6 py-[13px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
          >
            Baixar e-book em PDF
          </a>
          <a
            href={EBOOK_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sora text-white text-[15px] border border-[#2a2b2c] hover:border-[#F35901] rounded-[14px] px-6 py-[13px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F35901]"
          >
            Abrir em nova guia
          </a>
        </div>

        <p className="font-sora text-[#898A89] text-[13px] mt-5 sm:hidden">
          Em alguns celulares a pré-visualização do PDF pode não aparecer. Use os botões acima para
          abrir ou baixar o arquivo.
        </p>

        <div className="mt-8 border border-[#1c1d1e] rounded-2xl overflow-hidden bg-[#0d0d0d]">
          {!iframeFailed ? (
            <iframe
              title="Checklist de Homologação Técnica de Fornecedores: PDF"
              src={`${EBOOK_PDF_PATH}#view=FitH`}
              className="w-full h-[70vh] min-h-[420px] bg-white"
              onError={() => setIframeFailed(true)}
            />
          ) : (
            <div className="px-6 py-16 text-center">
              <p className="font-sora text-muted text-[15px] leading-[1.6] max-w-[480px] mx-auto">
                Não foi possível exibir o PDF neste navegador. Baixe o arquivo ou abra em uma nova
                guia para continuar a leitura.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a
                  href={EBOOK_PDF_PATH}
                  download="checklist-homologacao-fornecedores-cabeamento-sultec.pdf"
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center font-sora text-white text-[14px] bg-[#F35901] rounded-[12px] px-5 py-3"
                >
                  Baixar e-book em PDF
                </a>
                <a
                  href={EBOOK_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-sora text-white text-[14px] border border-[#2a2b2c] rounded-[12px] px-5 py-3"
                >
                  Abrir em nova guia
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="font-sora text-[#666867] text-[13px]">Visualizador não carregou?</p>
          <a
            href={EBOOK_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sora text-[13px] text-white underline underline-offset-2 hover:text-[#F35901]"
          >
            Abrir PDF diretamente
          </a>
          <button
            type="button"
            onClick={() => setIframeFailed(true)}
            className="font-sora text-[13px] text-[#898A89] underline underline-offset-2 hover:text-white"
          >
            Mostrar alternativa
          </button>
        </div>

        <section className="mt-16 lg:mt-20 border-t border-[#1c1d1e] pt-12">
          <h2 className="font-roboto font-bold text-white text-[24px] lg:text-[28px] tracking-[-0.03em] max-w-[640px]">
            Sua empresa está homologando fornecedores ou comparando propostas?
          </h2>
          <p className="font-sora text-muted text-[15px] leading-[1.65] mt-4 max-w-[640px]">
            A Sultec pode analisar as necessidades do projeto, apresentar suas evidências técnicas e
            elaborar uma proposta com escopo completo, da execução à certificação.
          </p>
          <Link
            href="/contato"
            className="inline-flex mt-7 items-center justify-center gap-2 font-sora text-white text-[15px] bg-[#F35901] hover:bg-orange-600 rounded-[14px] px-8 py-[14px] transition-colors"
          >
            Falar com a Sultec
          </Link>
        </section>
      </div>
    </div>
  )
}
