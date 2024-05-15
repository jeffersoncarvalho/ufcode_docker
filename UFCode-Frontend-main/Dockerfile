#UFCode Frontend

#selecionando o sistema operacional
FROM node:12-alpine

#organizando as pastas da aplicação
RUN mkdir -p /home/node/ufcode_frontend/node_modules && chown -R node /home/node/ufcode_frontend

#setando o diretório principal de trabalho
WORKDIR /home/node/ufcode_frontend

#copiando os arquivos .json do projeto original para a pasta do workdir
COPY package*.json ./

#setando o usuário que irá executar os comando abaixo
USER node

#criando o node_modules
RUN npm install

#copiando o resto da aplicação (o primeiro ponto é o raiz original e o segundo ponto é o destino(workdir))
COPY --chown=node:node . .

#expondo a porta do express
EXPOSE 4000

#iniciando a aplicação
CMD ["npm", "run", "dev"]







