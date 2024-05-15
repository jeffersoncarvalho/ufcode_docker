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
* O build faz uso do arquivo **Dockerfile**.
