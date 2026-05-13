import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Cpu, Wrench, Building2, ChevronRight, Star, Phone, ArrowRight } from 'lucide-react';

export default function SultecWebsite() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://placehold.co/180x60/000000/ffffff?text=SULTEC"
              alt="Sultec"
              className="h-10 object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/80">
            <a href="#inicio" className="hover:text-orange-500 transition">Início</a>
            <a href="#empresa" className="hover:text-orange-500 transition">Empresa</a>
            <a href="#servicos" className="hover:text-orange-500 transition">Serviços</a>
            <a href="#projetos" className="hover:text-orange-500 transition">Projetos</a>
            <a href="#uniformes" className="hover:text-orange-500 transition">Uniformes</a>
            <a href="#contato" className="hover:text-orange-500 transition">Contato</a>
          </nav>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6">
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-[#0E0E0E] to-[#1A1A1A]"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ff6a00_0,_transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
              <Cpu size={16} />
              Soluções Tecnológicas Profissionais
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Tecnologia, estrutura e <span className="text-orange-500">excelência operacional</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
              A Sultec entrega soluções técnicas e tecnológicas com alto padrão de qualidade, unindo inovação, eficiência operacional e credibilidade para empresas que exigem resultados profissionais.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-2xl text-base">
                Solicitar orçamento
              </Button>

              <Button
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-2xl text-base"
              >
                Conhecer serviços
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full" />

            <Card className="bg-[#121212]/90 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-xl">
              <CardContent className="p-0">
                <img
                  src="https://placehold.co/900x700/111111/ffffff?text=SULTEC+TECH"
                  alt="Sultec"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Sobre a Sultec
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Uma empresa construída para entregar confiança e alto desempenho.
            </h2>

            <p className="text-white/70 leading-relaxed text-lg mb-6">
              A Sultec atua com foco em soluções técnicas e tecnológicas para empresas que buscam eficiência, estrutura profissional e atendimento especializado.
            </p>

            <p className="text-white/70 leading-relaxed text-lg mb-10">
              Nosso compromisso é unir tecnologia, organização operacional e excelência visual para construir projetos sólidos, modernos e confiáveis.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-black text-orange-500">+120</h3>
                <p className="text-white/60 mt-2">Projetos executados</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-500">98%</h3>
                <p className="text-white/60 mt-2">Satisfação de clientes</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
            <img
              src="https://placehold.co/800x900/111111/ffffff?text=ESTRUTURA+SULTEC"
              alt="Empresa"
              className="rounded-[32px] border border-white/10 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 bg-gradient-to-b from-[#101010] to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Serviços
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Soluções completas para empresas modernas.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed">
              Estrutura técnica, soluções inteligentes e atendimento profissional para diferentes demandas corporativas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench size={36} />,
                title: 'Serviços Técnicos',
                desc: 'Execução profissional com organização, eficiência e alto padrão operacional.'
              },
              {
                icon: <Cpu size={36} />,
                title: 'Tecnologia e Estrutura',
                desc: 'Integração tecnológica e soluções modernas para empresas e operações.'
              },
              {
                icon: <Building2 size={36} />,
                title: 'Projetos Corporativos',
                desc: 'Desenvolvimento de soluções estratégicas alinhadas às necessidades empresariais.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#141414] border border-white/10 rounded-[28px] h-full hover:border-orange-500/40 transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-8">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                    <p className="text-white/65 leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <button className="flex items-center gap-2 text-orange-500 font-semibold">
                      Saiba mais
                      <ChevronRight size={18} />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="projetos" className="py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
                Projetos
              </span>

              <h2 className="text-5xl font-bold mt-4 max-w-2xl">
                Projetos executados com qualidade e padrão profissional.
              </h2>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 rounded-xl px-6 py-5">
              Ver mais projetos
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden rounded-[28px] border border-white/10 bg-[#141414]">
                <img
                  src={`https://placehold.co/800x600/111111/ffffff?text=Projeto+0${item}`}
                  alt="Projeto"
                  className="w-full h-72 object-cover"
                />

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Projeto Corporativo</h3>
                  <p className="text-white/65 leading-relaxed">
                    Solução executada com alto padrão técnico e foco em eficiência operacional.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UNIFORMES */}
      <section id="uniformes" className="py-28 bg-gradient-to-b from-black to-[#101010]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Uniformes Corporativos
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">
              Identidade visual profissional para equipes técnicas.
            </h2>

            <p className="text-white/70 leading-relaxed text-lg mb-10">
              Uniformes desenvolvidos com foco em conforto, apresentação profissional e fortalecimento da identidade corporativa da Sultec.
            </p>

            <div className="space-y-6">
              {[
                'Polo técnica manga curta',
                'Polo técnica manga longa',
                'Camisa social corporativa',
                'Modelagem feminina profissional'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <ShieldCheck size={18} />
                  </div>

                  <span className="text-lg text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/1000x800/111111/ffffff?text=UNIFORMES+SULTEC"
              alt="Uniformes"
              className="rounded-[32px] border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
              Credibilidade
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Empresas que confiam na Sultec.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-[#141414] border border-white/10 rounded-[28px]">
                <CardContent className="p-10">
                  <div className="flex gap-1 text-orange-500 mb-6">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-white/70 leading-relaxed mb-8">
                    “Excelente atendimento, organização impecável e execução extremamente profissional.”
                  </p>

                  <div>
                    <h4 className="font-bold">Cliente Corporativo</h4>
                    <span className="text-white/50 text-sm">Empresa Parceira</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="py-32 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0,_transparent_70%)]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-8 text-black">
            Vamos construir algo profissional para sua empresa.
          </h2>

          <p className="text-black/70 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Entre em contato com a Sultec e solicite um orçamento personalizado para sua necessidade.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-black hover:bg-[#121212] text-white px-10 py-7 rounded-2xl text-lg">
              <Phone className="mr-2" size={20} />
              Falar no WhatsApp
            </Button>

            <Button
              variant="outline"
              className="border-black/20 bg-transparent text-black hover:bg-black/10 px-10 py-7 rounded-2xl text-lg"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://placehold.co/180x60/000000/ffffff?text=SULTEC"
              alt="Sultec"
              className="h-10 mb-6"
            />

            <p className="text-white/60 leading-relaxed">
              Soluções tecnológicas profissionais com foco em qualidade, estrutura e credibilidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navegação</h4>
            <div className="space-y-3 text-white/60">
              <p>Início</p>
              <p>Empresa</p>
              <p>Serviços</p>
              <p>Projetos</p>
              <p>Contato</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-white/60">
              <p>(00) 00000-0000</p>
              <p>contato@example.com</p>
              <p>Atendimento corporativo</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">WhatsApp</h4>

            <Button className="bg-orange-500 hover:bg-orange-600 rounded-xl w-full py-6">
              Atendimento imediato
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
