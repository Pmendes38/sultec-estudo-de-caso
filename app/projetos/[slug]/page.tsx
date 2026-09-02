import { permanentRedirect } from 'next/navigation'

/** Compatibilidade permanente para links antigos de cases individuais. */
export default function LegacyProjetoDetailPage({ params }: { params: { slug: string } }) {
  permanentRedirect(`/cases/${params.slug}`)
}
