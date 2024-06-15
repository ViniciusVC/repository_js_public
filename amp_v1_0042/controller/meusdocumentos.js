

//Importar Modulos e dependencias.
var cache = require('memory-cache');
var urlApiBrScan = require('./urlApiBrScan.js');
//var formatarDados = require('./formatarDados.js');
var requestX = require("request").defaults({ rejectUnauthorized: false });
// var fs = require("fs");

console.log('Instanciando /controller/meusdocumentos.js');

function apenasNumeros(varBodySend){
//    formatarDados.apenasNumeros(varBodySend);
    var numsStr = varBodySend.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

function formatTipoDocumento(tipoDocumento){
//    formatarDados.formatTipoDocumento(tipoDocumento);
    // Selfie, RG, RG, Outros
    // Selfie, CNH
    // Selfie, Outros
    if(tipoDocumento=="RG"){
        return ["Selfie", "RG", "RG", "Outros"]
    }else{
        return ["Selfie", tipoDocumento]
    }    
}
function funformatarDados(tipoDocumento,arquivos){
 //   formatarDados.formatarDados(tipoDocumento,arquivos);
    if(tipoDocumento=="RG"){
        return [
                        {
                            value: arquivos[0].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[1].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[2].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        },
                        {
                            value: arquivos[3].buffer,
                            options: {
                            filename: "download",
                            contentType: "image/jpeg"
                            }
                        }
                    ]
                }else{
                    return [
                    {
                        value: arquivos[0].buffer,
                        options: {
                        filename: "download",
                        contentType: "image/jpeg"
                        }
                    },
                    {
                        value: arquivos[1].buffer,
                        options: {
                        filename: "download",
                        contentType: "image/jpeg"
                        }
                    }
                ]
            }
}


function solicitachave(varcpf, tipoDocumento, arquivos, novasession){
    //Solicitar token
    //apimhml.vvc.net.br/auth/oauth/v2/token
    console.log("solicitachave(varcpf="+varcpf+", tipoDocumento="+tipoDocumento+", arquivos, novasession="+novasession+")");
    //var varURL = urlApiBrScan.funUrlApiBrScan("Externo", "Homologação", "chave");
    var varURL = urlApiBrScan.funUrlApiBrScan("Externo", "Produção", "chave");
    console.log("URL para solicitar token -> " + varURL);
    var fetch = require("node-fetch");
    var options = {
        method: 'POST',
        url: varURL,
        headers :
        {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic YTM4M2YxOWMtMWIxYi00ZTcyLThjNjEtM2ZkYzVjN2Y0ZjkyOjQxZTQ5NTYyLWFjMzQtNDg2Ny1iZGI0LWJmZGYyNzUwMzk5NA=="
        }
    };

    //"Authorization": "Basic YTM4M2YxOWMtMWIxYi00ZTcyLThjNjEtM2ZkYzVjN2Y0ZjkyOjQxZTQ5NTYyLWFjMzQtNDg2Ny1iZGI0LWJmZGYyNzUwMzk5NA==,Basic YTM4M2YxOWMtMWIxYi00ZTcyLThjNjEtM2ZkYzVjN2Y0ZjkyOjQxZTQ5NTYyLWFjMzQtNDg2Ny1iZGI0LWJmZGYyNzUwMzk5NA==",

    // homologação:
    //     username : "piloto-certif-cliente"
    //     password : "piloto-cc-123"
    // produção interno:
    //     username : "piloto-certif-cliente"
    //     password : "d936Ca997f"
    // produção externo:
    //     username : a383f19c-1b1b-4e72-8c61-3fdc5c7f4f92
    //     password : 41e49562-ac34-4867-bdb4-bfdf27503994

    fetch(options.url, options).then(res => {
        if(res.ok) {
            res.json().then(json => {
                var token = json.access_token; 
                console.log('Recebeu chave ['+token+']. Iniciando envio de documentos.');
                enviadados(varcpf,tipoDocumento,arquivos,novasession,token);
            })
        } else {
            res.text().then(text => console.log('debug text: ' + text))
        }
    }).catch(err => console.log);
};


function enviadados(varcpf,tipoDocumento,arquivos,novasession, token){
    //Enviar com token
    console.log("- enviadados()");
    //var varURL = urlApiBrScan.funUrlApiBrScan("Externo", "Homologação", "documentos");
    var varURL = urlApiBrScan.funUrlApiBrScan("Externo", "Produção", "documentos");
    console.log("URL de envio de dados  -> " + varURL);
    var varTipoDocumentoFormat = formatTipoDocumento(tipoDocumento);
    var varDocumentoFormat = funformatarDados(tipoDocumento,arquivos);
    var optionsX = {
        method: "POST",
        url: varURL,
        headers: {
            Authorization: "Bearer " + token,
            "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
        },
        formData: {
            cpf: varcpf,
            tipoDocumento: varTipoDocumentoFormat,
            documento: varDocumentoFormat
        }
    };
    console.log(optionsX);
    requestX(optionsX, function(error, response, body) {
        console.log("-Envio error:", error);
        console.log("-Envio statusCode:", response && response.statusCode);
        console.log("-Envio body:", body);
        if(response!=undefined){
            console.log("-Envio statusCode:", response.statusCode);
            if(response.statusCode==200){
                console.log('    ok ! ! ! ENVIOU ! ! ! ok ');
                console.log('Documentos enviados ' + body + '. Gravou 3 na variavel ' + novasession + '.');
                cache.put(novasession, '3', 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
            }else{
                console.log('Erro 2 - Não foi possivel enviar os dados. - Problemas no envio.');
                console.log('  ! ! !     ERRO     ! ! ! ');
                cache.put(novasession, response.statusCode, 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
            }
        }else{
            console.log('Erro 2 - Não foi possivel enviar os dados. - Problemas no envio.');
            console.log('  ! ! !     ERRO     ! ! ! ');
            cache.put(novasession, '002', 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
        }
    })//Fim do requestx
}


// function enviadados(varcpf,tipoDocumento,arquivos,novasession, token){
//     //Enviar com token
//     console.log("- enviadados()");
//     //estava funcionando url: "http://stage.apisdigitais.interno:8765/api/documentmanagement/v2/documentacao/analise",
//     //tipoDocumento: [tipoDocumento, tipoDocumento, tipoDocumento, tipoDocumento],
//     //var varURL = 'https://apimhml.vvc.net.br/clientes/documentacao/v1/analise/analisedocumentacao/documentacao/analise'
//     var varURL = urlApiBrScan.funUrlApiBrScan("Externo", "Homologação", "documentos");
//     console.log("URL de envio de dados  -> " + varURL);
//     var varTipoDocumentoFormat = formatTipoDocumento(tipoDocumento);
//     var varDocumentoFormat = funformatarDados(tipoDocumento,arquivos);
//     // !!!! Pegar Key e envie como Autorisacion bier !!!
//     var cpf = varcpf.toString();
//     //toString
//     //stringify
//     var optionsX = {
//         method: "POST",
//         url: varURL,
//         headers: {
//             "Authorization": "Bearer " + token,
//             "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
//         },
//         'cpf': cpf,
//         formData: 
//         { 
//             'cpf': '48213736702',
//             tipoDocumento: varTipoDocumentoFormat,
//             documento: varDocumentoFormat
//         }
//     };
//     console.log(optionsX);
//     var fetch = require("node-fetch");
//     fetch(optionsX.url, optionsX).then(res => {
//         if(res.ok) {
//             cache.put(novasession, '3', 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
//             res.json().then(json => {
//                 json => console.log('debug json: ' + json)
//                 jsom.message
//             })
//         }else{
//             cache.put(novasession, '2', 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
//             res.text().then(text => console.log('debug text: ' + text))
//         }
//     }).catch(err => console.log);
// }

function convertArquivos(varArquivo, varnome){
        if(varArquivo!=undefined){
            let data = varArquivo;
            let buff = new Buffer(data, 'base64');
            //let varSize = 5641675;
            //let varSize = buff.toString.length
            let varSize = buff.length
            //let text = buff.toString('ascii');
            //fs.writeFileSync(varnome+".jpg", buff);
            return {fieldname: varnome,
                    originalname: varnome,
                    encoding: '7bit',
                    mimetype: 'image/jpeg',
                    buffer: buff,
                    size: varSize}
            /*{ fieldname: 'Selfie',
            originalname: 'IMG_20191026_145631323.jpg',
            encoding: '7bit',
            mimetype: 'image/jpeg',
            buffer:
            <Buffer ff d8 ff e1 a6 92 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 0a 01 0f 00 02 00 00 00 09 00 00 00 86 01 10 00 02 00 00 00 0f 00 00 00 90 01 1a 00 05 ... >,
            size: 5641675 }
            }*/
        }else{
            return "";
        }
}

//exports.meusdocumentos = function(varDadosRetorno, arquivos){
exports.meusdocumentos = function(res, varDadosRetorno, arquivosVELHO) {
    //Função CONTROLLER que roda apois receber todos os dados do formulário.
    console.log('╔════════════════════════════════════════╗');
    console.log('║     documentoscopia - CONTROLLER       ║');
    console.log('╚════════════════════════════════════════╝');  
    console.log('Rodando  documentoscopiacontroller. Recebeu os dados do formulário.');
        
    var msmErro = "";
    var sessaoLocal = ""
    var varcpf = "";

    try {
        if(varDadosRetorno.cpf!=undefined){
            varcpf = varDadosRetorno.cpf;
            sessaoLocal = cache.get(varcpf); //recebe captcha guardado na variavel global.
            //sessaoLocal = sessaoLocal.toUpperCase(); // Converte em letras maiusculas do captcha.
            varcpf = apenasNumeros(varcpf); //String - CPF sem pontos e hífen.    
        }else{
            msmErro += "CPF vazio.<br/>";
        }
    }
    catch (e) {
        msmErro += "Houve um erro no servidor.<br>Não foi possivel recuperar o codigo da sessão.<br/>";
        console.log(e);
    }
    var arquivos = ["","","",""];
    try {
        arquivos[0] = convertArquivos(varDadosRetorno.SelfieSend, 'SelfieSend')
        arquivos[1] = convertArquivos(varDadosRetorno.imgdoc2Send, 'imgdoc2')
        arquivos[2] = convertArquivos(varDadosRetorno.imgdoc3Send, 'imgdoc3')
        arquivos[3] = convertArquivos(varDadosRetorno.imgdoc4Send, 'imgdoc4')
        /*if(varDadosRetorno.imgdoc2Send!=undefined){
            arquivos[1] = varDadosRetorno.imgdoc2Send
        }
        if(varDadosRetorno.imgdoc3Send!=undefined){
            arquivos[2] = varDadosRetorno.imgdoc3Send
        }
        if(varDadosRetorno.imgdoc4Send!=undefined){
            arquivos[3] = varDadosRetorno.imgdoc4Send
        }*/
    }catch (e) {
        msmErro += "Houve um erro no servidor.<br>Não foi possivel processar arquivos.<br/>";
         console.log(e);
    }

    var codigo = ""
    
    try {
        if(varDadosRetorno.codigo!=undefined){
            codigo = varDadosRetorno.codigo.toUpperCase();
        }else{
            msmErro += "Codigo vazio.<br/>";
        }
    }
    catch (e) {
        msmErro += "Houve um erro no servidor.<br>Não foi possível recuperar sua sessão.<br/>"
        console.log(e);
    }

    if(codigo==sessaoLocal){
        console.log("Codigo capcha CORRETO! "+codigo+"="+sessaoLocal+".");
    }else{
        msmErro += "Codigo capcha incorreto.<br/>"
        console.log("Codigo incorreto."+codigo+" diferente de "+sessaoLocal);
    }
    var tipoDocumento = "Outros"; //String - Valores: "Selfie", “RG”, “CNH” ou “Outros”
    try {
        if(varDadosRetorno.tipoDocumento!=undefined){
            if(varDadosRetorno.tipoDocumento=="RG" || varDadosRetorno.tipoDocumento=="CNH" || varDadosRetorno.tipoDocumento=="Outros"){
                tipoDocumento = varDadosRetorno.tipoDocumento;
            }
        }
    }
    catch (e) {
        msmErro += "Houve um erro no servidor ao processar os TIPO DE DOCUMENTOS enviados.<br>"
        console.log(e);
    }
    try {
        var tamanhototal = 0;
        var _validFileExtensions = ['image/jpg', 'image/jpeg'];    
        console.log('__________________________________________');
        console.log('| cpf=' + varcpf);
        console.log('| tipoDocumento=' + tipoDocumento);
        console.log('| tabs=' + varDadosRetorno.tabs);
        console.log('| nascimento=' + varDadosRetorno.nascimento);
        console.log('| codigo=' + varDadosRetorno.codigo);
        console.log('|------------------------------------------');
        console.log('| Arquivo ' + arquivos[0]);
        console.log('| Arquivo ' + arquivos[1]);
        console.log('| Arquivo ' + arquivos[2]);
        console.log('| Arquivo ' + arquivos[3]);
        var i;
        for (i = 0; i < arquivos.length; i++) { 
            if(arquivos[i].filename!=undefined){
                console.log('| Arquivo ' + i);
                console.log('| Arquivo ' + arquivos[i].mimetype);
                console.log('| nome = ' + arquivos[i].fieldname);
                console.log('| originalname = ' + arquivos[i].originalname);
                // //console.log('| Tamanho da imagem = ' + arquivos[i].buffer.length +' bytes');
                console.log('| Tamanho da imagem = ' + arquivos[i].size +' bytes');
                tamanhototal = tamanhototal + arquivos[i].size
                if (arquivos[i].size > 2000000){
                    msmErro = msmErro + "Imagem "+arquivos[i].fieldname+" é maior que 2 Megabytes.<br/>"
                    console.log('| Imagem maior que 4 Megabytes! Passou o limite de tamanho de arquivo!');
                }

                var exiseExtensao = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    
                    console.log(arquivos[i].mimetype);
                    console.log(_validFileExtensions[j]);
                    if (arquivos[i].mimetype === _validFileExtensions[j]) {
                        exiseExtensao = true;
                        break
                   
                    }
                }

                if(!exiseExtensao){
                    msmErro = msmErro + "Imagem "+arquivos[i].originalname+" não tem a  extensão jpeg ou jpg!.<br/>"
                    break
                }

                console.log('|------------------------------------------');
            }

        }
        if (tamanhototal > 4000000){
            msmErro = msmErro + "Tamanho total das imagens não pode ser maior que 4 Megabytes.<br/>"
            console.log(msmErro);
        }
    
    }
    catch (e) {
        msmErro += "Houve um erro no servidor ao tentar processar os arquivos enviados.<br>"
        console.log(e);
    }
    console.log("Dados = " + varcpf +","+ tipoDocumento +"!!!!!!!");
    var novasession = "";
    if(msmErro!=""){
        res.send('<center><img src="/static/assetsv5/img/documentoscopia/erro_ico.png" alt="Icone de Erro" title="Icone de Erro"/><h1>Não foi possivel enviar os dados</h1><br>'+msmErro+'</center>');
    }else{
        try {
            var today=new Date();
            novasession = Math.random() +'a'+ today.getMinutes()
            cache.put(novasession, '1', 3300000); // criar uma variavel global (1=enviando,2=erro,3=enviado)
            //res.redirect('/meusdocumentos/?passo=4&session='+novasession);
            res.redirect('/api1/meusdocumentos/resposta/?passo=4&session='+novasession);
        }
        catch (e) {
            res.send('<center><img src="/static/assetsv5/img/documentoscopia/erro_ico.png" alt="Icone de Erro" title="Icone de Erro"/><h1>Não foi possivel enviar os dados.</h1><br>Houve um erro no servidor, ao tentar criar nova sessão.</center>');
            console.log(e);
        }
        try {
            console.log('Solicitar chave');
            //solicitaChaveTeste(varcpf, tipoDocumento, arquivos, novasession);
            solicitachave(varcpf, tipoDocumento, arquivos, novasession);
        }
        catch (e) {
            res.send('<center><img src="/static/assetsv5/img/documentoscopia/erro_ico.png" alt="Icone de Erro" title="Icone de Erro"/><h1>Não foi possivel enviar os dados.</h1><br>Houve um erro no servidor, ao tentar acessar API.</center>');
            console.log(e);
        }
    }
}