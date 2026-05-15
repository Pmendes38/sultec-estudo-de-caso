# Dockerfile para Sultec Website

FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código-fonte
COPY . .

# Build
RUN npm run build

# Expose porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
