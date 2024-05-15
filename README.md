# UFCode (Backend & Frontend) - Docker

Este projeto agrega tanto o Backend quanto o Frontend da aplicação UFCode, pronta para ser executada no Docker.

# 1 - Instalando o Docker (Ubuntu):

* Siga as instruções [oficiais](https://docs.docker.com/engine/install/ubuntu/).

# 2 - Criando a imagem do Backend:

* Entre na pasta raiz do projeto Backend **(UFCode-Backend-main)**
* Execute o comando: 

```
sudo docker build -t ufcode-backend .
```
* O comando acima irá criar uma imagem chamada **ufcode-backend**, mas você pode escolher outro nome caso deseje. O ponto (.) no final significa o diretório o qual o build será executado.
* O build faz uso do arquivo **Dockerfile**, por isso só irá funcionar dentro da raiz do projeto.

#3 - Executando a imagem do Backend:

* Ao executar uma imagem, você na verdade estará criando um *container*. Um *container* é uma imagem em execução (uma analogia seria a Classes e seus Objetos).
* Execute o comando:

```
sudo docker run --name backend -it -p 3000:3000 ufcode-backend
```

* O comando acima irá executar a imagem **ufcode-backend** com o nome de *container* apenas como **backend** (você também pode escolher outro nome).
* O argumento **-p 3000:3000** irá mapear uma porta do lado esquerdo para uma porta do lado direito, para que seja possível acessar o aplicativo fora do docker. Neste caso, as portas são iguais.
