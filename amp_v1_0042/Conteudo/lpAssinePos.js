export const lpAssine = (cidade) => {
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
        "linlk":"https://www.vvcestudio.com.br/detalhes-da-oferta/pos-pago_50gb_fid_brasil",
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
        "link":"https://www.vvcestudio.com.br/oi/sobre-a-oi/regulamentacao/informacoes/planos-de-servicos-vigor/vvc-movel#tab-lista-ofertas/",
        "texto":"Lista de ofertas válidas para adesão"},
      "li02":{
        "link":"https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-movel/tarifas?cmbEstado=SP&cmbPlano=385/",
        "texto":"Tarifas excedentes"},
      "li03":{
        "link":"https://www.vvcestudio.com.br/celular/pos-pago/regras-de-oferta/",
        "texto":"Contratos e regras da oferta"}
    }
  }
}

export default lpAssine;