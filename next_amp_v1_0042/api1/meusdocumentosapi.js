const Controller = require('../controller/meusdocumentos.js');
const Resposta = require('../controller/resposta.js')

console.log('Instanciou /api1/meusdocumentosapi.js (POST)');

exports.api = function(req, res, next) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║      documentoscopia API               ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //POST
    //Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
    console.log(req);
    if(req.method=='POST'||req.method=='post'){
        console.log('Rodando meusdocumentos.API - POST');        
        //Aguarda receber todos os dados ates de chamar o controller... 
        req.on('end', Controller.meusdocumentos(res, req.body,req.files));
    }else{
        //Metodo GET e PUT não faz nada
        console.log('API não pode ser acessado por GET ou PUT');
        //req.on('end', Resposta.status(res, req));
        //res.status(200).send(Controller.meusdocumentos(res, req)));
        res.status(200).send('API não pode ser acessado por '+req.method+'.');
        //res.redirect('/meusdocumentos/');
        
    };
  }