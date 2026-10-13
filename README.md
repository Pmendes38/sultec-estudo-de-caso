# Sultec

Site institucional em Next.js, React, TypeScript e Tailwind CSS para uma empresa de soluções tecnológicas. Implementação de identidade visual, páginas de serviços e projetos, conteúdo institucional e caminhos de conversão.

[Site](https://sultectecnologia.com.br/) · [Ver projeto no portfólio](https://portfolio-iota-woad-84p4egesbx.vercel.app/projetos/sultec)

## Problema e solução

Organizar serviços técnicos e provas de execução em uma experiência clara, responsiva e consistente com a marca. O projeto conecta informações institucionais, casos de projetos e caminhos de contato.

## Estrutura

- `app/`: páginas, rotas e tratamento de formulários no servidor.
- `sections/` e `components/`: seções reutilizáveis e composição das páginas.
- `lib/leads/`: validação, autorização de contato e entrega de registros.
- `lib/seo.ts`: metadados e organização de conteúdo.
- Testes de campanhas e rastreamento de contato.

## Executar localmente

```sh
npm ci --legacy-peer-deps
npm run dev
```

Integrações externas são opcionais. Configure as variáveis de `.env.example` com os serviços do seu ambiente. Sem esses valores, os envios não ficam habilitados.

## Validar

```sh
npm test
npm run typecheck
npm run build
```

## Histórico

O ramo `main` registra a linha principal. A ramificação `historico-local` conserva desenvolvimento adicional para consulta.

Marcas, fotografias e vídeos pertencem aos respectivos titulares.

