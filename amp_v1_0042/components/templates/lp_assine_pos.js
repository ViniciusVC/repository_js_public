import React from 'react';
import Head from 'next/head';
import Header03 from '../organisms/occ/header03.js';
import Content03 from '../organisms/occ/content03.js';
import Footer03 from '../organisms/occ/footer03.js';
import FavIcon from '../atoms/atFavIcon'

//console.log('Instanciando templates/lp_assine_pos .js');

function funcJsonHeader(varmodo,varcidade) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      lp_assine_pos                     ║');
  console.log('╚════════════════════════════════════════╝');
  var Mensagem="";
  if(varcidade=="São Paulo"){
    Mensagem="Ops… A promoção da Internet da Oi não está disponível pra sua casa."
  }
  var JsonHeader = {
    "modo":varmodo,
    "h4":Mensagem,
    "Img01":{
      "src":"/static/fontesoi/logo-vvc.svg",
      "width":"50px",
      "height":"47px",
      "alt":"LOGO",
      "title":"LOGO",
      "class":"logoOisvg" 
    },
    "Img02":{
      "src":"/static/assetsv5/img/lp-assine-pos/ameba-vvc-mobile.png",
      "width":"27px",
      "height":"122px",
      "alt":"Um desenho de uma ameba nas cores laranja, amarelo e rosa",
      "title":"Ameba laranja",
      "class":"amebalaranja" 
    }
  }
  return JsonHeader
}

function funcJsonContent(varmodo) {
  var JsonContent = {
    "modo":varmodo,
    "Titulo":"Ultragigue-se",
    "SubTitulo":"Leve um exagero de internet pra navegar no Pós.",
    "Nomeplano":"OI Mais Top",
    "Plan":"50",
    "PlanSmall":"GB +",
    "Icon":["Netflix","Youtube","Facebook","Messenger","Instagram","Whatsapp","VVC Play"],
    "Obs":"Sem gastar da sua internet.",
    "Price":{
          "divreal":"R$",
          "divvalor":"99",
          "divcents":",90",
          "mes":"/mês"},
    "BtComprar":{
      "linlk":"https://www.vvc.com.br/detalhes-da-oferta/pos-pago_50gb_fid_brasil",
      "texto":"Eu quero"
    },
    "ImgColuna2":{
      "src":"/static/assetsv5/img/lp-assine-pos/img-mion-lp-assine-pos.png",
      "width":"559px",
      "height":"328px",
      "alt":"Na imagem de primeiro plano um celular deitado na horizontal, no fundo um desenho de uma ameba nas cores laranja, amarelo e rosa.",
      "title":"Na imagem de primeiro plano um celular deitado na horizontal, no fundo um desenho de uma ameba nas cores laranja, amarelo e rosa.",
      "class":"imgresponsive"
    }
  };
  return JsonContent
}

function funcJsonFooter(varmodo) {
  var JsonFooter = {
    "modo":varmodo,
    "footcontrow" : "Informações legais:",
    "disclaimer": "A Oi, dentro das determinações legais e normativas aplicáveis, poderá suspender ou cancelar, imediatamente, os benefícios desta oferta, caso constate utilização fraudulenta e/ou indevida dos mesmos. Para mais informações, consulte o regulamento.",
    "li01":{
      "link":"https://www.vvc.com.br/oi/sobre-a-oi/regulamentacao/informacoes/planos-de-servicos-vigor/vvc-movel#tab-lista-ofertas/",
      "texto":"Lista de ofertas válidas para adesão"},
    "li02":{
      "link":"https://www.vvc.com.br/oi/vvc-pra-voce/planos-servicos/vvc-movel/tarifas?cmbEstado=SP&cmbPlano=385/",
      "texto":"Tarifas excedentes"},
    "li03":{
      "link":"https://www.vvc.com.br/celular/pos-pago/regras-de-oferta/",
      "texto":"Contratos e regras da oferta"}
  }
  return JsonFooter
}


const lpAssinePos  = function(props){
  console.log('╔═══════════════════════════════════════════════╗');
  console.log('║      lp_assine_pos                            ║');
  console.log('╚═══════════════════════════════════════════════╝');
  console.log(props.cidade)
  var cidade = "Rio de Janeiro";
  if( props.cidade!=undefined){cidade=props.cidade};
  var modo = "html";
  if(props.modo!=undefined){modo=props.modo};
  return(
    <div>
    <Head>
      <title>ULTRAGIGUE-SE! PRA NAVEGAR NO PÓS</title>
      <FavIcon />
      <meta name="description" content="Para navegar no Portal da vvc." />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.vvc.com.br/lp_assine_pos/"/>
      <link rel="amphtml" href="/amp/lp-assine-pos/"/>
    </Head>
    <Header03 JsonHeader={funcJsonHeader(modo,cidade)}></Header03>
    <Content03 JsonContent={funcJsonContent(modo)}></Content03>
    <Footer03 JsonFooter={funcJsonFooter(modo)}></Footer03>
    cidade={cidade} e modo={modo}
    <style jsx>{`
        @font-face {
          font-family: 'SimplonBP-Regular';
          src: url('./static/fontesoi/simplonbp-regular-webfont.woff');
        } 
        @font-face {
          font-family: 'SimplonBP-Headline';
          src: url('./static/fontesoi/simplonvvc-headline-webfont.woff');
        }
        html{
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
          width: 100%;
          height: 100%;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          font-family: sans-serif;
          padding: 0;
          top: 0;
          margin: 0;
          cursor: default;
          -webkit-locale: "pt-BR";
          color: -internal-root-color;
          box-sizing: border-box;
          direction: ltr;
          unicode-bidi: isolate;
          display: block;
        }  
        .page {
          display: table;
          margin: -8px;
          width: 100%;
          table-layout: fixed;
          padding: 0;
          padding-left: 5%;
          cursor: default;
        }
        body{    
          background: #fff none top center no-repeat;
          background-attachment: fixed;
          color: #333;
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          font-size: 1rem;
          font-style: normal;
          font-weight: normal;
          line-height: 150%;
          text-align: left;
          text-decoration: none;
        }
        h4 {
          color: #222;
          font-weight: normal;
          letter-spacing: 0;
          font-family: "SimplonBP-Regular",Arial;
          font-style: inherit;
          text-align: inherit;
          text-decoration: inherit;
          padding: 0;
          margin: 0;
          cursor: default;
          box-sizing: border-box;
          display: block;
          margin-block-start: 0.7em;
          margin-block-end: 0.7em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;  
        }
    `}</style>
 </div>
)}

export default lpAssinePos