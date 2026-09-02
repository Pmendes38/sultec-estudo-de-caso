import { permanentRedirect } from 'next/navigation'

/** Compatibilidade permanente para links antigos: a URL oficial agora é /cases. */
export default function LegacyProjetosPage() {
  permanentRedirect('/cases')
}
