

//Importar Modulos e dependencias.
var cache = require('memory-cache');

exports.status = function(res,req ) {
    //Função CONTROLLER que informa status do envio.
    console.log('╔════════════════════════════════════════╗');
    console.log('║        resposta - CONTROLLER           ║');
    console.log('╚════════════════════════════════════════╝');  
    console.log('Rodando  documentoscopiacontroller. Resposta Status solicitação.');
    console.log(req.query)

    var estiloH1 = '@font-face {font-family: "Simplon-Headline";src: url("https://www.vvcestudio.com.br/publicV2/fonts/simplonvvc-headline-webfont.woff");} h1{font-family: Simplon-Headline;font-size: 26px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #f8562c;}'
    var estiloP = '@font-face {font-family: "SimplonBP-Regular";src: url("https://www.vvcestudio.com.br/publicV2/fonts/simplonbp-regular-webfont.woff");} p{font-family: SimplonBP-Regular;font-size: 22px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.2;letter-spacing: normal;text-align: center;color: #000000;}'
    var estiloDiv = 'div{margin:10px;margin-top:50px;}'
    var varSession=""
    var imgIcone='<img src="/static/assetsv5/img/documentoscopia/erro_ico.png" width="45px" height="45px" />';
    var vartitulo='<h1>OCORREU UM ERRO</h1>';
    var vartexto='<p>Desculpe, não foi possível completar o envio dos documentos.</p><a href="/meusdocumentos/">Começar de novo</a>';
    
    var cod="";
    
    try {
        varSession=req.query.session
        var cod=cache.get(varSession); // variavel global
        if(cod==""){
            imgIcone='<img src="/static/assetsv5/img/documentoscopia/erro_ico.png" width="45px" height="45px" />';
            vartitulo='<h1>Sessão expirou!</h1>';
            vartexto='<p>Sua sessão expirou. Volte ao inicio do formulário.</p><a href="/meusdocumentos/">Começar de novo</a>'; 
            res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
     
        }else if (cod=="1"){
            imgIcone='<script>window.onload = function(){setTimeout(function(){ location.reload(); }, 5000);}</script><img src="/static/assetsv5/img/documentoscopia/carregando.png" width="45px" height="45px" />';
            vartitulo='<h1>Enviando...</h1>';
            vartexto='<p>Enviando seus dados. Aguarde.</p>';
            res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');
        }else if (cod=="3"){
            // 3 = Enviou
            res.redirect('/meusdocumentos/resposta3/');
        }else{
            // 2 = Erro
            res.redirect('/meusdocumentos/resposta2/?cod='+cod);
        }
    }
    catch (e) {
        imgIcone='<img src="/static/assetsv5/img/documentoscopia/erro_ico.png" width="45px" height="45px" />';
        vartitulo='<h1>Sessão expirou!</h1>';
        vartexto='<p>Sua sessão expirou. Volte ao inicio do formulário.</p>'; 
        res.send('<style>'+estiloH1+estiloP+estiloDiv+'</style><center><div class="div">'+imgIcone+vartitulo+vartexto+'<div></center>');    
    }
    console.log(imgIcone+vartitulo);
}