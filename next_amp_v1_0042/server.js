
//Importar Modulos e dependencias.
const express = require('express')
const next = require('next')
// //Verifica se esta no ambiente de desenvolvimento
const dev = process.env.NODE_ENV !== 'production' //dev=true
const app = next({ dev })
const handle = app.getRequestHandler()
const multer = require('multer');

//API do captcha Meus Documentos
var apicaptcha = require('./api1/captcha.js');
//API do formulário Meus Documentos
var meusdocumentos = require('./api1/meusdocumentosapi.js');
var meusDocumentosResposta = require('./api1/documentosResposta.js');

console.log('\x1b[33m Carregou as dependencias \u001b[34m');



app.prepare()
.then(() => {
    const server = express()
    const porta = 8081;
    const upload = multer();
    // Rotas do projeto

    // Rota de arquivos estáticos
    server.use(express.static('/static'));

    server.get('/amp/',(req, res) => {app.render(req, res, '/routes/amp', req.query); })
    server.get('/home/', (req, res) => {app.render(req, res, '/routes/home', req.query); }) 
    server.get('/amp/home/', (req, res) => {app.render(req, res, '/routes/amp/home', req.query); }) 

    //======================================================================

    server.get('/minha-vvc/', (req, res) => { app.render(req, res, '/routes/minha-vvc', req.query);}) 
    server.get('/amp/minha-vvc/', (req, res) => { app.render(req, res, '/routes/amp/minha-vvc', req.query);}) 
    server.get('/minha-vvc/segunda-via/', (req, res) => { app.render(req, res, '/routes/minha-vvc/segunda-via', req.query);}) 
    server.get('/amp/minha-vvc/segunda-via/', (req, res) => { app.render(req, res, '/routes/amp/minha-vvc/segunda-via', req.query);}) 
    server.get('/minha-vvc/codigo-de-barras/', (req, res) => { app.render(req, res, '/routes/minha-vvc/codigo-de-barras', req.query);}) 
    server.get('/amp/minha-vvc/codigo-de-barras/', (req, res) => { app.render(req, res, '/routes/amp/minha-vvc/codigo-de-barras', req.query);})
    server.get('/minha-vvc/atendimento-vvc/', (req, res) => { app.render(req, res, '/routes/minha-vvc/atendimento-vvc', req.query);}) 
    server.get('/amp/minha-vvc/atendimento-vvc/', (req, res) => { app.render(req, res, '/routes/amp/minha-vvc/atendimento-vvc', req.query);})
    //=====================================================================================================================
   

    server.get('/portabilidade/', (req, res) => { app.render(req, res, '/routes/portabilidade/indice', req.query);}) 
    server.get('/amp/portabilidade/', (req, res) => { app.render(req, res, '/routes/amp/portabilidade/indice', req.query);})
   
    //=====================================================================================================================
    
    server.get('/recarga/', (req, res) => { app.render(req, res, '/routes/recarga', req.query);}) 
    server.get('/amp/recarga/', (req, res) => { app.render(req, res, '/routes/amp/recarga', req.query);})

    
    //======================================================================

    server.get('/componentes/', (req, res) => {app.render(req, res, '/routes/componentes/componentes', req.query);}) 
    server.get('/amp/componentes/', (req, res) => {app.render(req, res, '/routes/amp/componentes/componentes', req.query);}) 

    //======================================================================

    server.get('/meusdocumentos/', (req, res) => {app.render(req, res, '/routes/meusdocumentos/meusdocumentos', req.query);}) 
    server.get('/amp/meusdocumentos/', (req, res) => {app.render(req, res, '/routes/amp/meusdocumentos/meusdocumentos', req.query);}) 
    server.get('/meusdocumentos/email/', (req, res) => {app.render(req, res, '/routes/meusdocumentos/email', req.query);}) 
    server.get('/amp/meusdocumentos/email/', (req, res) => {app.render(req, res, '/routes/amp/meusdocumentos/email', req.query);}) 
    
    server.get('/meusdocumentos/ajudadocumentos/', (req, res) => { app.render(req, res, '/routes/meusdocumentos/ajudadocumentos', req.query); }) 
    server.get('/meusdocumentos/ajudaselfie/', (req, res) => {app.render(req, res, '/routes/meusdocumentos/ajudaselfie', req.query); }) 
    server.get('/amp/meusdocumentos/ajudadocumentos/', (req, res) => {app.render(req, res, '/routes/amp/meusdocumentos/ajudadocumentos', req.query); }) 
    server.get('/amp/meusdocumentos/ajudaselfie/', (req, res) => {app.render(req, res, '/routes/amp/meusdocumentos/ajudaselfie', req.query); }) 
    server.get('/meusdocumentos/resposta2/', (req, res) => {app.render(req, res, '/routes/meusdocumentos/resposta2', req.query);}) 
    server.get('/meusdocumentos/resposta3/', (req, res) => {app.render(req, res, '/routes/meusdocumentos/resposta3', req.query);}) 

    server.get('/vvc-play/', (req, res) => { app.render(req, res, '/routes/vvc-play', req.query);})
    server.get('/amp/vvc-play/', (req, res) => { app.render(req, res, '/routes/amp/vvc-play', req.query);})


    //======================================================================

    server.get('/mapacobertura/', (req, res) => {app.render(req, res, '/routes/mapacobertura', req.query);}) 
    server.get('/lp-assine-pos/', (req, res) => {app.render(req, res, '/routes/lp-assine-pos', req.query);}) 
    server.get('/amp/lp-assine-pos/', (req, res) => {app.render(req, res, '/routes/amp/lp-assine-pos', req.query);})


    server.get('/api1/captcha/', apicaptcha.api);
    server.get('/captcha/api1/', apicaptcha.api);

    //Rotas das APIs do formulário de envio de documentos
    server.post('/meusdocumentos/api1/', upload.any(), meusdocumentos.api);
    server.post('/api1/meusdocumentos/', upload.any(), meusdocumentos.api);

    //Rotas consulta APIs do formulário de envio de documentos
    server.get('/meusdocumentos/resposta/api1/', meusDocumentosResposta.api);
    server.get('/api1/meusdocumentos/resposta/', meusDocumentosResposta.api);
    server.get('/meusdocumentos/api1/', meusDocumentosResposta.api);
    server.get('/api1/meusdocumentos/', meusDocumentosResposta.api);

    console.log('Terminou rotas');

    // server.get('/p/:id', (req, res) => {
    //     app.render(req, res, '/home', { id: req.params.id });
    // }) 

    server.get('*', (req, res) => {
         //console.log('\u001b[34mRodando a rota *');
         console.log('procurando : ' + req.url);
         //console.log('pagina atual : ' + req.headers.referer +'\u001b[0m');
         return handle(req, res)
    })

    server.listen(porta, (err) => {
        if (err) throw err
        console.log('\u001b[34m╔═══════════════════════════════════════════════╗');
        console.log('\u001b[34m║ \x1b[33mIniciou a aplicação na porta : ' + porta + '           \u001b[34m║');
        console.log('\u001b[34m╚═══════════════════════════════════════════════╝\u001b[0m');
    })

})
.catch((ex) => {
  console.log('\u001b[31m Ocorreu um erro ao processar uma rota. \u001b[0m')
  console.error(ex.stack)
  process.exit(1)
})