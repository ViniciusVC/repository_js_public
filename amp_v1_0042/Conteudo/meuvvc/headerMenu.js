export const headerMenu = (cidade) => {
  //if(cidade!="São Paulo"){
    var jsonHeaderMenu = { Menu:[
      {
          link: "https://www.vvcestudio.com.br/meuvvc/",
          item: "INÍCIO",
      },
      {
          link: "https://www.vvcestudio.com.br/meuvvc/codigo-de-barras/",
          item: "CONTAS E PAGAMENTOS"
      },
      {
          link: "https://m.vvcestudio.com.br/Portal/splash",
          item: "MEUS PRODUTOS"
      },
      {
          link: "https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga",
          item: "RECARGA"
      },
      {
          link: "#",
          item: "AJUDA E SUPORTE",
          mais: "true",
          submenu:[
            {link: "#",
            subitem:"AJUDA"},
            {
              subitem:"Dúvidas frequentes",
              link: "http://faq.vvcestudio.com.br/"
            },{
              subitem:"ATENDIMENTO",
              link: "#"
            },
            {
              subitem:"Consulta de protocolo",
              link: "https://m.vvcestudio.com.br/Portal/splash"
            },
            {
              subitem:"Encontre sua loja",
              link: "https://www.vvcestudio.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi"
            },
            {
              link: "https://www.vvcestudio.com.br/meuvvc/fale-com-a-oi/",
              subitem:"Telefones e postos"
            },
            {
              link: "https://m.vvcestudio.com.br/Portal/splash",
              subitem:"Consultar documentos"
            },
            {
              link: "#",
              subitem:"SUPORTE TÉCNICO"
            },
            {
              link: "https://www.vvcestudio.com.br/app/tecnico-virtual/",
              subitem:"Técnico Virtual"
            },
            {
              link: "https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/acompanhamento-do-vvc-fixo/",
              subitem:"Acompanhamento de instalação Fixo"
            },
            {
              link: "https://www.vvcestudio.com.br/meuvvc/religar-servico/",
              subitem:"Estou sem serviço"
            },
          ]
      },
      {   
          link: "#",
          item: "+ VANTAGENS",
          mais: "true",
          submenu:[
            {
              link: "https://www.vvcestudio.com.br/oi/vvc-pra-voce/planos-servicos/vvc-pontos/",
              subitem:"Oi Pontos"
            },
            {
              link: "https://oiwifi.com.br/",
              subitem:"Oi Wifi"
            },
            {
              link: "https://www.vvcplay.tv/",
              subitem:"VVC Play"
            },
            {
              link: "https://servicos.vvcestudio.com.br/?utm_source=Minha+Oi&utm_medium=Link&utm_content=Home&utm_campaign=Menu+Lateral",
              subitem:"Conteúdo pra você"
            },
          ]
      },
      {
          link: "#",
          item: "PARA ASSINAR",
          mais: "true",
          submenu:[
            {
              link: "http://vvcestudio.com.br/combo",
              subitem:"Combo"
            },
            {
              link: "http://vvcestudio.com.br/tv-hd",
              subitem:"TV HD"
            },
            {
              subitem:"Celular",
              link: "http://vvcestudio.com.br/celular"
            },
            {
              link: "http://vvcestudio.com.br/internet",
              subitem:"Internet"
            },
            {
              link: "http://vvcestudio.com.br/fixo",
              subitem:"Fixo"
            }
          ]
      }
      ]}
    //}
  return jsonHeaderMenu;
}
