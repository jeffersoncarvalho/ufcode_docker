#UFCode Backend

#selecionando o sistema operacional
FROM node:10-alpine

#organizando as pastas da aplicação
RUN mkdir -p /home/node/ufcode_backend/node_modules && chown -R node /home/node/ufcode_backend

#setando o diretório principal de trabalho
WORKDIR /home/node/ufcode_backend

#copiando os arquivos .json do projeto original
COPY package*.json ./

#setando o usuário que irá executar os comando abaixo
USER node

#criando o node_modules
RUN npm install

#copiando o resto da aplicação (o primeiro ponto é o raiz original e o segundo ponto é o destino(workdir))
COPY --chown=node:node . .

#expondo a porta do express
EXPOSE 3000

#iniciando a aplicação
CMD ["node", "main.js"]







