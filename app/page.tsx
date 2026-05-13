import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-sultec.png"
              alt="Sultec"
              width={170}
              height={60}
              className="object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/80">
            <a href="#inicio" className="hover:text-orange-500 transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-orange-500 transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-orange-500 transition">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-orange-500 transition">
              Portfólio
            </a>
            <a href="#uniformes" className="hover:text-orange-500 transition">
              Uniformes
            </a>
            <a href="#contato" className="hover:text-orange-500 transition">
              Contato
            </a>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-lg font-medium">
            Solicitar orçamento
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-32"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-500 uppercase tracking-[0.25em] text-sm">
              Sultec Soluções Tecnológicas
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-6">
              Tecnologia, estrutura e excelência operacional.
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mt-8 max-w-xl">
              Soluções tecnológicas e serviços especializados para empresas
              que exigem qualidade, segurança e alto desempenho operacional.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-4 rounded-lg font-semibold">
                Falar com especialista
              </button>

              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-7 py-4 rounded-lg font-semibold">
                Ver soluções
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                "+12 anos",
                "+350 projetos",
                "Atendimento nacional",
                "Equipe especializada",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 bg-white/[0.03] rounded-xl p-5"
                >
                  <p className="text-orange-500 font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-32 border-t border-white/10 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-500 uppercase text-sm tracking-[0.2em]">
              Sobre a Sultec
            </span>

            <h2 className="text-4xl font-bold mt-5 leading-tight">
              Inovação e compromisso em cada solução.
            </h2>

            <p className="text-white/70 leading-relaxed mt-8">
              A Sultec Soluções Tecnológicas oferece soluções completas para
              empresas dos mais diversos segmentos, unindo tecnologia,
              estrutura técnica e atendimento especializado.
            </p>

            <p className="text-white/70 leading-relaxed mt-5">
              Nosso foco é entregar resultados com qualidade, segurança,
              eficiência operacional e alto padrão de execução.
            </p>

            <button className="mt-10 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition">
              Saiba mais
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["+12", "Anos de experiência"],
              ["+350", "Projetos executados"],
              ["+180", "Clientes atendidos"],
              ["+25", "Estados atendidos"],
            ].map(([number, label], index) => (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-5xl font-bold text-orange-500">
                  {number}
                </h3>

                <p className="text-white/60 mt-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 uppercase tracking-[0.2em] text-sm">
              Nossos serviços
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Soluções completas para cada necessidade.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              "Soluções Tecnológicas",
              "Serviços Técnicos",
              "Projetos Corporativos",
              "Infraestrutura",
              "Manutenção",
              "Suporte Especializado",
            ].map((service, index) => (
              <div
                key={index}
                className="group border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-orange-500 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-2xl">
                  ●
                </div>

                <h3 className="text-2xl font-semibold mt-8">
                  {service}
                </h3>

                <p className="text-white/60 mt-5 leading-relaxed">
                  Soluções profissionais com foco em desempenho,
                  segurança e eficiência operacional.
                </p>

                <button className="mt-8 text-orange-500 font-medium">
                  Saiba mais →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section
        id="portfolio"
        className="py-32 border-t border-white/10 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <div>
              <span className="text-orange-500 uppercase tracking-[0.2em] text-sm">
                Portfólio
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Projetos que refletem nossa excelência.
              </h2>
            </div>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition">
              Ver todos os projetos
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={`/portfolio-${item}.jpg`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">
                    Projeto Corporativo
                  </h3>

                  <p className="text-white/60 mt-4 leading-relaxed">
                    Execução técnica com alto padrão de qualidade e
                    performance operacional.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 uppercase tracking-[0.2em] text-sm">
              Diferenciais
            </span>

            <h2 className="text-4xl font-bold mt-5">
              O que torna a Sultec referência no mercado.
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mt-16">
            {[
              "Qualidade",
              "Tecnologia",
              "Equipe Especializada",
              "Agilidade",
              "Excelência",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-2xl p-7 text-center bg-white/[0.02]"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  ●
                </div>

                <h3 className="font-semibold mt-6">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIFORMES */}
      <section
        id="uniformes"
        className="py-32 border-t border-white/10 bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 uppercase tracking-[0.2em] text-sm">
              Uniformes Corporativos
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Identidade que representa profissionalismo.
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mt-16">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="relative h-[340px]">
                  <Image
                    src={`/uniforme-${item}.png`}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-lg">
                    Uniforme Corporativo
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="py-32 border-t border-white/10 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-orange-500 uppercase tracking-[0.2em] text-sm">
            Vamos conversar
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Pronto para levar sua empresa para outro nível?
          </h2>

          <p className="text-white/60 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe está preparada para desenvolver soluções
            inteligentes, modernas e altamente profissionais para sua empresa.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold">
              Solicitar orçamento
            </button>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition px-8 py-4 rounded-lg font-semibold">
              Falar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logo-sultec.png"
              alt="Sultec"
              width={170}
              height={60}
            />

            <p className="text-white/50 leading-relaxed mt-6">
              Tecnologia, estrutura e excelência operacional para empresas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Navegação</h3>

            <ul className="space-y-3 mt-6 text-white/60">
              <li>Início</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Portfólio</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Serviços</h3>

            <ul className="space-y-3 mt-6 text-white/60">
              <li>Soluções Tecnológicas</li>
              <li>Infraestrutura</li>
              <li>Manutenção</li>
              <li>Suporte Especializado</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Contato</h3>

            <ul className="space-y-3 mt-6 text-white/60">
              <li>(00) 00000-0000</li>
              <li>contato@example.com</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/10 text-white/40 text-sm flex flex-wrap justify-between gap-4">
          <p>© 2026 Sultec Soluções Tecnológicas.</p>

          <div className="flex gap-6">
            <p>Política de Privacidade</p>
            <p>Termos de Uso</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
