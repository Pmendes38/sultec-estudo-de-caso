# Sultec Website

## 📋 Visão Geral

Website institucional premium da **Sultec Soluções Tecnológicas**, desenvolvido com as mais modernas tecnologias web, oferecendo uma experiência visual sofisticada e profissional.

## 🎨 Design & Visual

- **Paleta**: Dark premium com detalhes em laranja (RGB: 255, 106, 0)
- **Estilo**: Minimalismo tecnológico com visual corporativo moderno
- **Efeitos**: Gradientes suaves, glows discretos, transparências elegantes
- **Animações**: Transições fluidas com Framer Motion

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+
- **UI**: React 18+
- **Styling**: TailwindCSS
- **Animações**: Framer Motion
- **Ícones**: Lucide Icons
- **Linguagem**: TypeScript

## 📁 Estrutura do Projeto

```
sultec-website/
├── app/                      # App directory do Next.js
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página home
├── components/               # Componentes reutilizáveis
│   └── ui/                   # Componentes base (Button, Card, etc)
├── sections/                 # Seções da página
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Differentials.tsx
│   ├── Uniforms.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── index.ts
├── hooks/                    # Custom hooks
│   └── useScrollAnimation.ts
├── data/                     # Dados e conteúdo
│   └── content.ts
├── styles/                   # Estilos globais
│   └── globals.css
├── public/
│   └── images/              # Imagens do projeto
├── tailwind.config.ts        # Configuração TailwindCSS
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências
├── next.config.js           # Configuração Next.js
└── postcss.config.js        # Configuração PostCSS
```

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

Acesse em: `http://localhost:3000`

## 🌟 Seções Principais

### 1. **Header**
- Navegação sticky com blur effect
- Menu desktop e mobile responsivo
- Logo + CTA principal

### 2. **Hero Section**
- Headline impactante
- Subheadline estratégico
- CTAs principais + secundárias
- Imagem tecnológica com glow
- Stats institucionais

### 3. **About**
- Texto institucional
- Missão e Visão
- Números da empresa (stats)
- Imagem corporativa

### 4. **Services**
- 6 serviços em cards premium
- Ícones minimalistas
- Hover interactions
- Descrições detalhadas

### 5. **Portfolio**
- Grid de 6 projetos
- Filtro por categoria
- Imagens grandes
- Hover effects elegantes

### 6. **Differentials**
- 6 diferenciais em cards
- Ícones com hover animation
- Design clean e moderno

### 7. **Uniforms**
- Seção dedicada aos uniformes
- Mockup visual premium
- Lista de tipos de uniforme
- Catálogo corporativo

### 8. **Testimonials**
- 3+ depoimentos de clientes
- Avaliação em estrelas
- Prova social com stats
- Credibilidade visual

### 9. **CTA Final**
- Headline forte e impactante
- Botões de ação (WhatsApp, Orçamento)
- Background impactante
- Contato direto

### 10. **Footer**
- Logo + Descrição
- Links de navegação
- Contato (email, telefone)
- Redes sociais
- WhatsApp CTA
- Copyright

## 🎯 Características

### ✨ Animações
- Fade Up em scroll
- Stagger animations
- Hover interactions
- Parallax leve
- Smooth reveals
- Transições fluidas

### 📱 Responsividade
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (< 768px)
- Totalmente adaptado

### ♿ Acessibilidade
- Semântica HTML correta
- Contraste de cores adequado
- Focus states visíveis
- Navegação por teclado
- Texto alt em imagens

### ⚡ Performance
- Otimização de imagens
- Code splitting automático
- Lazy loading
- Bundle size otimizado

## 🎨 Componentes UI

### Button
- Variantes: primary, secondary, ghost, outline
- Tamanhos: sm, md, lg
- Hover effects

### Card
- Variantes: default, dark, premium
- Backdrop blur
- Borders customizáveis

### Container
- Max-width responsivo
- Padding automático
- Centering automático

### Badge
- Icon + label
- Estilo laranja premium
- Hover effects

## 📊 Dados

Todos os dados (serviços, projetos, depoimentos, etc) estão centralizados em:
```typescript
// data/content.ts
export const services = [...]
export const projects = [...]
export const testimonials = [...]
export const differentials = [...]
export const uniforms = [...]
export const institutionalData = {...}
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t sultec-website .
docker run -p 3000:3000 sultec-website
```

### Outros
- Netlify
- Firebase
- AWS Amplify
- DigitalOcean

## 📝 Desenvolvimento

### Padrões de Código
- TypeScript obrigatório
- Componentes funcionais
- Hooks customizados
- Nomeação clara e descritiva
- Comentários quando necessário

### Boas Práticas
- Components separados por arquivo
- Exports nomeados
- Props com tipos definidos
- Sem props drilling desnecessário
- Reutilização de componentes

## 🔧 Customização

### Cores
Editar `tailwind.config.ts`:
```typescript
colors: {
  orange: { /* suas cores */ },
  dark: { /* suas cores */ }
}
```

### Tipografia
Adicionar fonts em `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['sua-font', 'fallback'],
}
```

### Animações
Customizar em `tailwind.config.ts` ou `globals.css`

## 📄 Licença

© 2024 Sultec Soluções Tecnológicas. Todos os direitos reservados.

## 👥 Suporte

Para dúvidas ou sugestões, entre em contato através de:
- **Email**: contato@example.com
- **WhatsApp**: [Seu número]
- **Website**: sultec.com.br

---

**Desenvolvido com ♥ para a Sultec**
