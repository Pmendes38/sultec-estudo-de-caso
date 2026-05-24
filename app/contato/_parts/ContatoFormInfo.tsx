import { ContatoForm } from './ContatoForm'
import { ContatoInfo } from './ContatoInfo'

export function ContatoFormInfo() {
  return (
    <section className="bg-dark-900 border-b border-[#F35901]/30 py-20 lg:py-28">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-8 lg:gap-12 items-start">
          <ContatoForm />
          <ContatoInfo />
        </div>
      </div>
    </section>
  )
}
