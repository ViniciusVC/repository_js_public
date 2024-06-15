//Importar Modulos e dependencias.
var Util = require('./util.js');
//import * as Util from './util.js';


export const dados = (page, cidade) => {
  var page = Util.validaProps(props.url.query.cidade,"lpAssinePos")
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro - RJ")
  //return [page](cidade);
  if(page=="headerMenu"){
    return headerMenu(cidade);
  }else{
    return lpAssinePos(cidade);
  }
}

function headerMenu(varcidade) {
  return { "Menu":[
    {
        "link": "https://www.vvc.com.br/minha-oi/",
        "item": "INÍCIO",
    },
    {
        "link": "https://www.vvc.com.br/minha-oi/codigo-de-barras/",
        "item": "CONTAS E PAGAMENTOS"
    },
    {
        "link": "https://m.vvc.com.br/Portal/splash",
        "item": "MEUS PRODUTOS"
    },
    {
        "link": "https://www.vvc.com.br/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga",
        "item": "RECARGA"
    },
    {
        "link": "#",
        "item": "AJUDA E SUPORTE",
        "mais": "true",
        "submenu":[
          {
            "subitem":"AJUDA",
            "link": "#"
          },
          {
            "subitem":"Dúvidas frequentes",
            "link": "http://faq.vvc.com.br/"
          },{
            "subitem":"ATENDIMENTO",
            "link": "#"
          },
          {
            "subitem":"Consulta de protocolo",
            "link": "https://m.vvc.com.br/Portal/splash"
          },
          {
            "subitem":"Encontre sua loja",
            "link": "https://www.vvc.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi"
          },
          {
            "subitem":"Telefones e postos",
            "link": "https://www.vvc.com.br/minha-oi/fale-com-a-oi/"
          },
          {
            "subitem":"Consultar documentos",
            "link": "https://m.vvc.com.br/Portal/splash"
          },
          {
            "subitem":"SUPORTE TÉCNICO",
            "link": "#"
          },
          {
            "subitem":"Técnico Virtual",
            "link": "https://www.vvc.com.br/app/tecnico-virtual/",
          },
          {
            "subitem":"Acompanhamento de instalação Fixo",
            "link": "https://www.vvc.com.br/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo/"
          },
          {
            "subitem":"Estou sem serviço",
            "link": "https://www.vvc.com.br/minha-oi/religar-servico/"
          },
        ]
    },
    {   
        "link": "#",
        "item": "+ VANTAGENS",
        "mais": "true",
        "submenu":[
          {
            "link": "https://www.vvc.com.br/oi/vvc-pra-voce/planos-servicos/vvc-pontos/",
            "subitem":"Oi Pontos"
          },
          {
            "link": "https://oiwifi.com.br/",
            "subitem":"Oi Wifi"
          },
          {
            "link": "https://www.vvcplay.tv/",
            "subitem":"VVC Play"
          },
          {
            "link": "https://servicos.vvc.com.br/?utm_source=Minha+Oi&utm_medium=Link&utm_content=Home&utm_campaign=Menu+Lateral",
            "subitem":"Conteúdo pra você"
          },
        ]
    },
    {
        "link": "#",
        "item": "PARA ASSINAR",
        "mais": "true",
        "submenu":[
          {
            "subitem":"Combo",
            "link": "http://vvc.com.br/combo"
          },
          {
            "subitem":"TV HD",
            "link": "http://vvc.com.br/tv-hd"
          },
          {
            "subitem":"Celular",
            "link": "http://vvc.com.br/celular"
          },
          {
            "subitem":"Internet",
            "link": "http://vvc.com.br/internet"
          },
          {
            "subitem":"Fixo",
            "link": "http://vvc.com.br/fixo"
          }
        ]
    }
    ]}
}


function lpAssinePos(varcidade) {
  var Mensagem="";
  if(varcidade=="São Paulo - SP"){
    Mensagem="Ops… A promoção da Internet da Oi não está disponível pra sua casa."
  }
  return {
    "JsonHeader" : {
      "h4": Mensagem,
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
    },
    "JsonContent" : {
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
    },
    "JsonFooter" : {
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
  }
}