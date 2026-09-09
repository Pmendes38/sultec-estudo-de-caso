import type { Metadata } from 'next'
import { buildPageMetadata, PAGE_SEO } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.cases)

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return children
}
