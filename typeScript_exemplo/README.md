# Exemplo TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


Github: https://github.com/ViniciusVC/repository_js_public/tree/main/typeScript_exemplo

TypeScript é uma extensão do JavaScript que adiciona tipagem estática à linguagem.
Desenvolvida pela Microsoft.


## Criando o projeto 

Criar o diretório do projeto:

> mkdir exemplo_typeScript

> cd exemplo_typeScript

Criar o Package.json

> npm init -y

Instalar o Typescript no projeto:

> npm install -D typescript

> npm install -D ts-node

Inicializar o Typescript no projeto:

> npx tsc - -init

(Cria o tsconfig.json)

Em tsconfig.json defina o diretório de saída do build.

"outDir": "./dist"


## Rodar o projeto:
> npx ts-node ./src/index.ts

Buildar o projeto:
> npx tsc

(Gera o diretório dist com os arquivos js.)

Rodar codigo buildado:
> node ./dist/index.js

Gera o diretório dist com os arquivos js.

## Nota:
Por convenção, a extensão dos arquivos Typescript é .TS

