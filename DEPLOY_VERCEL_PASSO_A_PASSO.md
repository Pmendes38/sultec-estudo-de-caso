# 🚀 Deploy Sultec Website - Vercel (Passo a Passo)

## ⚡ Quick Start (2 Minutos)

### Passo 1: Acessar Vercel
```
Abra: https://vercel.com/new
```

### Passo 2: Conectar GitHub
1. Clique em **"Continue with GitHub"** (ou faça login)
2. Autorize o Vercel a acessar seus repositórios

### Passo 3: Importar Repositório
1. Procure por: **`Sultec-Institucional`**
2. Clique em **"Import"**

### Passo 4: Configurar Projeto
A página mostrará:
- **Project Name**: `sultec-institucional` (já preenchido)
- **Framework Preset**: `Next.js` (auto-detectado) ✅
- **Root Directory**: `.` (já correto) ✅
- **Build Command**: `next build` (já correto) ✅
- **Output Directory**: `.next` (já correto) ✅

**Não mude nada!** Clique em **"Deploy"**

### Passo 5: Aguardar Deploy
Vercel vai:
1. Clonar o repositório
2. Instalar dependências (`npm install`)
3. Fazer o build (`npm run build`)
4. Deploy automático (~2 minutos)

### Passo 6: Seu Site Está Online! 🎉
Após o deploy:
- ✅ URL temporária: `https://exemplo.invalid`
- ✅ URL com domínio customizado: `https://sultec.com.br` (depois)

---

## 🌐 Configurar Domínio Customizado (Opcional)

Após o deploy bem-sucedido:

### No Vercel:
1. Vá para **Project Settings** → **Domains**
2. Clique em **"Add"**
3. Digite seu domínio: `sultec.com.br`
4. Siga as instruções para apontar o DNS

### No seu provedor de domínio:
1. Acesse o painel de DNS
2. Adicione os registros que Vercel mostrar
3. Aguarde propagação (até 24h)

---

## 🔄 Atualizações Automáticas

Após conectar ao Vercel:

**Toda vez que você fizer `git push` para `main`:**
- ✅ Vercel deteta a mudança automaticamente
- ✅ Faz novo build
- ✅ Deploy automático em produção
- ✅ Preview disponível em `https://sultec-institucional-<hash>.vercel.app`

Não precisa fazer mais nada!

---

## ✅ Checklist Pré-Deploy

Confirmado:
- ✅ Código em GitHub: `Pmendes38/Sultec-Institucional`
- ✅ Branch: `main`
- ✅ Next.js 14 configurado
- ✅ TypeScript strict mode
- ✅ Tailwind CSS com design tokens
- ✅ SORA font importada
- ✅ vercel.json presente
- ✅ package.json correto
- ✅ Sem erros de build

**Status: PRONTO PARA DEPLOY ✅**

---

## 📊 Métricas Esperadas

Após deploy bem-sucedido:
- **Build Time**: 1-2 minutos
- **Bundle Size**: ~150KB (otimizado)
- **Lighthouse Score**: 90+ (esperado)
- **First Content Paint**: <1s
- **Response Time**: <200ms

---

## 🆘 Troubleshooting

### Erro: "Build failed"
- Verifique `npm run build` localmente
- Confirme que todas as dependências estão em `package.json`

### Erro: "Module not found"
- Importe corretamente de `/components` e `/sections`
- Use paths aliases de `tsconfig.json`

### Erro: "Image optimization"
- Imagens de URLs externas funcionam automaticamente
- Verifique URLs do Unsplash

---

## 🎯 Próximos Passos

1. **Deploy**: Siga os passos acima
2. **Teste**: Abra a URL do Vercel e verifique
3. **Analytics**: Configure Vercel Web Analytics (opcional)
4. **Performance**: Check Lighthouse scores
5. **Domínio**: Aponte seu domínio customizado

---

**Tudo pronto! Deploy em 3 cliques!** 🚀