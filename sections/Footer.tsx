'use client'

import { Container } from '@/components/ui'

export function Footer() {
  return (
    <footer className="bg-dark-400 border-t border-dark-600 py-16">
      <Container>
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo + Tagline */}
          <div>
            <h3 className="text-orange-500 font-sora font-bold text-lg mb-3">
              SULTEC
            </h3>
            <p className="text-white/70 font-sora text-sm leading-relaxed">
              Soluções técnicas e tecnológicas com alto padrão de qualidade.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-sora font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Portfólio', 'Diferenciais'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 font-sora text-sm hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-sora font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Soluções Tecnológicas',
                'Serviços Técnicos',
                'Projetos Corporativos',
                'Infraestrutura',
                'Suporte Especializado',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 font-sora text-sm hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-sora font-bold mb-4">Contato</h4>
            <p className="text-white/70 font-sora text-sm mb-3">
              📞 (00) 00000-0000
            </p>
            <p className="text-white/70 font-sora text-sm mb-3">
              📧 contato@example.com
            </p>
            <p className="text-white/70 font-sora text-sm">
              São Paulo, SP - Brasil
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-600 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 font-sora text-sm">
              © 2024 Sultec. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/50 hover:text-orange-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-orange-500 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
