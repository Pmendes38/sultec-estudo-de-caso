# Sultec — estudo de caso

Site institucional em Next.js, React, TypeScript e Tailwind CSS para uma empresa de soluções tecnológicas. Implementação de identidade visual, páginas de serviços e projetos, conteúdo institucional e caminhos de conversão.

> Cópia pública sanitizada para avaliação técnica, separada do repositório oficial. Leia [o escopo da cópia e seu histórico](ESTUDO-DE-CASO.md).

## Problema e solução

Organizar serviços técnicos e provas de execução em uma experiência clara, responsiva e consistente com a marca. O projeto conecta informações institucionais, casos de projetos e caminhos de contato.

## O que avaliar

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

Integrações externas são opcionais. O arquivo `.env.example` contém somente nomes de variáveis e exemplos; configure exclusivamente recursos próprios de teste. Sem esses valores, os envios operacionais não ficam habilitados.

## Validar

```sh
npm test
npm run typecheck
npm run build
```

O ramo `main` apresenta a versão sanitizada da linha publicada. `historico-local` conserva desenvolvimento adicional para consulta, sem condensar commits. Marcas, fotografias e vídeos pertencem aos respectivos titulares; a publicação não concede licença comercial sobre eles.

