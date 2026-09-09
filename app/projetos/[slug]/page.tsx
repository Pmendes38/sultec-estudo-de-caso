import { redirect } from 'next/navigation'

export default function ProjetoRedirectPage({ params }: { params: { slug: string } }) {
  redirect(`/cases/${params.slug}`)
}
