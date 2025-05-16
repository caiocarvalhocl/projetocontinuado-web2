# Use a imagem base do Node.js (versão LTS recomendada)
FROM node:23

# Diretório de trabalho
WORKDIR /projetocontinuado

# Copia os arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código fonte
COPY . .

# Expõe a porta da aplicação
EXPOSE 3333 

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
