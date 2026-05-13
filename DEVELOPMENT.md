# Guia de Desenvolvimento

## Getting Started

### 1. Setup Inicial
```bash
# Clone ou extraia o projeto
cd sultec-website

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Adicionando Novas Seções

### Estrutura de uma Seção
```typescript
import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const SuaSecao: React.FC = () => {
  const scrollAnimation = useScrollAnimation()

  return (
    <section className="py-28 bg-dark-900">
      <Container>
        <motion.h2
          {...scrollAnimation.fadeUp}
        >
          Seu Conteúdo
        </motion.h2>
      </Container>
    </section>
  )
}
```

### Adicione à página principal
```typescript
// app/page.tsx
import { SuaSecao } from '@/sections'

export default function Home() {
  return (
    <>
      <Hero />
      <SuaSecao />  {/* ← Nova seção */}
    </>
  )
}
```

## Modificando Conteúdo

Edite `data/content.ts`:
```typescript
export const services = [
  {
    id: 1,
    icon: 'NomeDoIcone',
    title: 'Seu Serviço',
    description: 'Descrição do serviço',
  },
]
```

## Personalizando Cores

### Tailwind Config
```typescript
// tailwind.config.ts
colors: {
  orange: {
    500: '#ff6a00', // Cor principal
  }
}
```

## Animações Disponíveis

### useScrollAnimation Hook
```typescript
const scrollAnimation = useScrollAnimation()

// Fade Up
{...scrollAnimation.fadeUp}

// Fade In
{...scrollAnimation.fadeIn}

// Scale In
{...scrollAnimation.scaleIn}

// Stagger Container
{...scrollAnimation.staggerContainer}

// Stagger Item
{...scrollAnimation.staggerItem}
```

## Componentes Reutilizáveis

### Button
```typescript
<Button size="lg" variant="primary">
  Click me
</Button>
```

### Card
```typescript
<Card variant="premium">
  <CardContent>
    Seu conteúdo
  </CardContent>
</Card>
```

### Container
```typescript
<Container size="lg">
  Seu conteúdo
</Container>
```

### Badge
```typescript
<Badge icon={<Icon />} label="Seu Label" />
```

## Integração de Imagens

### Local (Recomendado para produção)
1. Coloque a imagem em `public/images/`
2. Use em componentes:
```typescript
<img src="/images/sua-imagem.jpg" alt="Descrição" />
```

### Placeholder (Desenvolvimento)
```typescript
<img src="https://placehold.co/600x400/111111/ffffff?text=Seu+Texto" />
```

## Responsividade

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Exemplo
```typescript
<div className="text-sm md:text-base lg:text-lg">
  Texto responsivo
</div>
```

## Build para Produção

```bash
# Build
npm run build

# Test build
npm run start

# Ou deploy direto
vercel
```

## Troubleshooting

### Problema: Animações não funcionam
**Solução**: Importe `useScrollAnimation` do `@/hooks`

### Problema: Tipos TypeScript incorretos
**Solução**: Certifique-se de importar tipos de `@/components/ui`

### Problema: Estilos não aplicados
**Solução**: Limpe cache do Tailwind:
```bash
npm run dev -- --clean
```

## Performance

### Otimizações já implementadas
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minificação
- ✅ CSS purging

### Dicas adicionais
- Use `next/Image` para otimização
- Minimize a quantidade de animações
- Use flexbox/grid em vez de posicionamento absoluto

## Deploy

### Vercel (Recomendado)
```bash
vercel
```

### Outras opções
- Netlify: `netlify deploy`
- Firebase: `firebase deploy`
- AWS: AWS Console

---

**Dúvidas? Consulte a documentação do Next.js, React, ou TailwindCSS.**
