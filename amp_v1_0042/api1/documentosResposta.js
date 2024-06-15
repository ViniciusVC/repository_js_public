
const Resposta = require('../controller/resposta.js')

console.log('Instanciou /api1/meusdocumentosapi.js (POST)');

exports.api = function(req, res, next) {
    console.log('╔════════════════════════════════════════╗');
    console.log('║    documentoscopia API (resposta)      ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('Metodo = '+req.method); //POST
    //Verifica metodo recebido pelo formulário (GET ou POST ou PUT)
        //Metodo GET e PUT não faz nada
        console.log('API não pode ser acessado por GET ou PUT');
        //req.on('end', Resposta.status(res, req));
        //res.status(200).send(Controller.meusdocumentos(res, req)));
        res.status(200).send(Resposta.status(res, req));
        //res.status(200).send('API não pode ser acessado por '+req.method+'.');
        //res.redirect('/meusdocumentos/');
  }