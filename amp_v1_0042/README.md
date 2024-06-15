## Projeto : amp_v1

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Next](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)



### Renderização server-side de HTML e AMP (isomorfica ReactJS e NextJS)
```
1 - Paginas em html (Next + React)
2 - Paginas AMP (Next + React +AMP)
3 - API do formulario de envio de documentos
4 - Gerador de captcha interno(Não funciona com balance).

```
* Instala dependencias
```
npm install
```
* inicia servidor local na porta 8081
```
npm run dev
```

* inicia servidor local na porta 9000
```
npm run dev -- -p 9000
```
* Gera estáticos. Deve ser rodado antes do start.
```
npm run build
```
* Inicia servidor na porta  8081. Só irá funcionar apos o build rodar sem erro.
```
npm start
npm run start
```
* inicia servidor na nuvem AWS.
```
npm run startaws
```

### Rotas
* Rotas configuradas no server.js
```
/
/home/
/componentes/
/lp-assine-pos/
/meusdocumentos/
/minha-vvc/
/minha-vvc/atendimento/

/amp/
/amp/meusdocumentos/
/amp/home/
/amp/lp-assine-pos/
/amp/minha-vvc/
/amp/minha-vvc/atendimento/

/api/meusdocumentos/
/api/captcha/

/vvc-play/
```