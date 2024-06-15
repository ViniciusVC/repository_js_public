import React from "react";
import FooterColuna from "./moFooterColuna.js"
import Div from '../../atoms/atDiv/index.js';

//import Acessibilidade from "./headerAcessibilidade.js";
//import ParaAssinar from "./headerParaAssinar.js";
//import FooterLogo from "./footerLogo.js"
//import Icon from "../../atoms/atIcon/index.js"


const footerPrimeiraCamada = props => {
    return (
        <div className="footerPrimeiraCamada">
                <FooterColuna
                    itens={["Combo","Planos","Atendimento","Serviços Adicionais"]}
                    links={["/combo/","/combo/","/combo/","/combo/"]}
                    icone="comboC"
                    />
                <FooterColuna
                    itens={["TV HD","Planos","Atendimento","Serviços Adicionais"]}
                    links={["/tv-hd/","/tv-hd/","/minha-oi/tv-hd/","/minha-oi/tv-hd/"]}
                    icone="product_tvhd"
                    />
                <FooterColuna
                    itens={["Celular","Planos","Atendimento","Serviços para Celular"]}
                    links={["/celular/","/celular/","/minha-oi/celular/","https://servicos.vvc.com.br/?utm_source=Portal+Oi&utm_medium=Link&utm_content=Servicos+Adicionais&utm_campaign=Rodape"]}
                    icone="mobileB"
                    />
                <FooterColuna
                    itens={["Internet","Planos","Atendimento","Serviços para Internet"]}
                    links={["/internet/","/internet/","/minha-oi/internet/","https://servicos.vvc.com.br/?utm_source=Portal+Oi&utm_medium=Link&utm_content=Servicos+Adicionais&utm_campaign=Rodape"]}
                    icone="broadbandB"
                    />
                <FooterColuna
                    itens={["Fixo","Planos","Atendimento","Serviços Adicionais"]}
                    links={["/fixo/","/fixo/","/minha-oi/fixo/","/minha-oi/fixo/"]}
                    icone="product_fixoB"
                    />
            <style jsx>{`
                .footerPrimeiraCamada{
                    margin-top:30px;
                    margin-bottom:30px;
                    max-width:1330px;
                }
                @media only screen and (max-width : 1000px) {
                    .footerPrimeiraCamada{
                        display: block;
                    }
                }
                @media only screen and (min-width : 1000px) {
                    .footerPrimeiraCamada{
                        display: flex;
                        justify-content: space-between;
                    }
                }
            `}</style>
        </div>
    )
}

//     return (
//         <section>
//             <div className="atDivHorizontal">
//             <div className="cvvc-sitemap sc-jwKygS bjGKGY">
//                     <div className="itens-list sc-hMqMXs keDYPe">
//                         <div className="item sc-jTzLTM fOkqQK">
                            
//                             <span className="sc-btzYZH bQzYOO">
//                                 <Icon type="combo" color="#D82482" />
//                             </span>
//                             <a className="btn-item sc-bwzfXH eizAqW" href="https://www.vvc.com.br/combo/"
//                                     color="#000" font-size="0.875rem" font-weight="600" width="100%">Combo</a>
//                             <div className="sub-itens sc-hMqMXs keDYPe">
//                                 <div className="col sc-jTzLTM imJzZn">
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="_blank"
//                                             href="https://www.vvc.com.br/combo/" font-size="0.875rem"
//                                             width="100%">Planos</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="_blank"
//                                             href="https://www.vvc.com.br/minha-oi/combo/" font-size="0.875rem"
//                                             width="100%">Atendimento</a>
//                                         </div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/combo/" font-size="0.875rem"
//                                             width="100%">Serviços
//                                                 Adicionais</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item sc-jTzLTM fOkqQK"><span className="sc-btzYZH bQzYOO">
                            
//                         <Icon type="tvhd" color="#000000" />
                        
//                         </span><a className="btn-item sc-bwzfXH eizAqW" href="https://www.vvc.com.br/tv-hd/"
//                             color="#000" font-size="0.875rem" font-weight="600" width="100%">TV HD</a>
//                             <div className="sub-itens sc-hMqMXs keDYPe">
//                                 <div className="col sc-jTzLTM imJzZn">
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/tv-hd/" font-size="0.875rem"
//                                             width="100%">Planos</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/tv-hd/" font-size="0.875rem"
//                                             width="100%">Atendimento</a>
//                                         </div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/tv-hd/" font-size="0.875rem"
//                                             width="100%">Serviços
//                                                 Adicionais</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item sc-jTzLTM fOkqQK"><span className="sc-btzYZH bQzYOO">
//                             <Icon type="mobileB" color="#000000" />
//                         </span><a className="btn-item sc-bwzfXH eizAqW" href="https://www.vvc.com.br/celular/"
//                             color="#000" font-size="0.875rem" font-weight="600" width="100%">Celular</a>
//                             <div className="sub-itens sc-hMqMXs keDYPe">
//                                 <div className="col sc-jTzLTM imJzZn">
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/celular/" font-size="0.875rem"
//                                             width="100%">Planos</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/celular/" font-size="0.875rem"
//                                             width="100%">Atendimento</a>
//                                         </div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="_blank"
//                                             href="https://servicos.vvc.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape"
//                                             font-size="0.875rem" width="100%">Serviços para Celular</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item sc-jTzLTM fOkqQK"><span className="sc-btzYZH bQzYOO"><svg width="32px"
//                             height="32px" viewBox="0 0 24 24" version="1.1">
//                             <defs></defs>
//                             <g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                 <g id="Desktop---1-fatura-aberta-Copy-5"
//                                     transform="translate(-918.000000, -421.000000)">
//                                     <g id="MEUS-PRODUTOS" transform="translate(898.000000, 183.000000)">
//                                         <g id="Meus-Produtos">
//                                             <g id="Group-4-Copy" transform="translate(20.000000, 232.000000)">
//                                                 <image id="internet_lrg" x="0" y="0" width="30" height="30"
//                                                     href="data:image/png;base64,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">
//                                                 </image>
//                                             </g>
//                                         </g>
//                                     </g>
//                                 </g>
//                             </g>
//                         </svg>
//                         <Icon type="internet" color="#000000" />
//                         </span><a className="btn-item sc-bwzfXH eizAqW" href="https://www.vvc.com.br/internet/"
//                             color="#000" font-size="0.875rem" font-weight="600" width="100%">Internet</a>
//                             <div className="sub-itens sc-hMqMXs keDYPe">
//                                 <div className="col sc-jTzLTM imJzZn">
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/internet/" font-size="0.875rem"
//                                             width="100%">Planos</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/internet/" font-size="0.875rem"
//                                             width="100%">Atendimento</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://servicos.vvc.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape"
//                                             font-size="0.875rem" width="100%">Serviços para Internet</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item sc-jTzLTM fOkqQK"><span className="sc-btzYZH bQzYOO">
//                         <Icon type="product_fixo" color="#000000" />
//                         </span><a className="btn-item sc-bwzfXH eizAqW" href="https://www.vvc.com.br/fixo/"
//                             color="#000" font-size="0.875rem" font-weight="600" width="100%">Fixo</a>
//                             <div className="sub-itens sc-hMqMXs keDYPe">
//                                 <div className="col sc-jTzLTM imJzZn">
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/fixo/" font-size="0.875rem"
//                                             width="100%">Planos</a></div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/fixo/" font-size="0.875rem"
//                                             width="100%">Atendimento</a>
//                                         </div>
//                                     </div>
//                                     <div className="container-sub-itens sc-gisBJw dStqxa">
//                                         <div className="icon-text"><a className="sub-item sc-bwzfXH iaXBsB" target="blank"
//                                             href="https://www.vvc.com.br/minha-oi/fixo/" font-size="0.875rem"
//                                             width="100%">Serviços
//                                                 Adicionais</a></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="divider sc-cSHVUG jVqgwu" margin="40px 0 0 0" display="block" width="100%" height="1px"
//                         direction="horizontal" color="#d7d7d7" padding="0" bottom="unset"></div>
//                 </div>
//                 <section className="grid sc-kgoBCf gxeMNU">
//                     <section className="grid sc-kgoBCf fZMEGE">
//                         <div className="sc-jnlKLf kYwqoc sc-hMqMXs cZEkrD">
//                             <div className="logo-footer sc-jTzLTM imJzZn">
                                
//                             <FooterLogo/>
                            
//                             </div>
//                             <div className="links-about-desk sc-jTzLTM imJzZn">
//                                 <div className="sc-kjoXOD cgqLXB">
//                                     <div className="itens-list sc-hMqMXs keDYPe">
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.vvc.com.br/empresas/" target="blank" color="#000"
//                                             font-size="0.875rem" font-weight="600" width="100%">Empresas</a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="http://ri.vvc.com.br" target="blank" color="#000"
//                                             font-size="0.875rem" font-weight="600" width="100%">Investidores</a>
//                                         </div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.vvc.com.br/oi/sobre-a-oi/" target="blank" color="#000"
//                                             font-size="0.875rem" font-weight="600" width="100%">Sobre a Oi</a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://vvc.com.br/oi/vvc-pra-voce/atendimento/fale-com-a-oi/lojas-fisicas-da-oi/"
//                                             target="blank" color="#000" font-size="0.875rem" font-weight="600"
//                                             width="100%">Lojas da Oi</a>
//                                         </div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.vvc.com.br/oi/celular-legal/" target="blank"
//                                             color="#000" font-size="0.875rem" font-weight="600" width="100%">Celular
//                                                 Legal</a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.vvc.com.br/outras-operadoras/" target="blank"
//                                             color="#000" font-size="0.875rem" font-weight="600" width="100%">Outras
//                                                 Operadoras</a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.vvc.com.br/oi/sobre-a-oi/regulamentacao/informacoes/conselho-de-usuarios/2017-2019/"
//                                             target="blank" color="#000" font-size="0.875rem" font-weight="600"
//                                             width="100%">Conselho de
//                                                 Usuários</a></div>
//                                         <div>
//                                             <div className="modal sc-Rmtcm fELZMf">
//                                                 <aside className="overlay sc-hSdWYo jRGhys"></aside>
//                                                 <div id="" url="" terminais="" data-context="popup_"><button
//                                                     className="fechar sc-bdVaJa lbySAP" data-context="popup__btn-fechar"
//                                                     font-size="0.875rem" width="100%"><svg width="30" height="30"
//                                                         viewBox="0 0 30 30">
//                                                         <path fill="#9B9B9B" fill-rule="evenodd"
//                                                             d="M13.106 15.09L8.227 19.85l1.625 2.035 5.119-4.976 5.099 4.976 1.882-1.83-5.109-4.966 5.109-4.967-1.882-1.83-5.1 4.976-5.118-4.976-1.625 2.035 4.879 4.762zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z">
//                                                         </path>
//                                                     </svg></button>
//                                                     <div className="Row sc-hMqMXs keDYPe">
//                                                         <div className="col sc-jTzLTM imJzZn">
//                                                             <section>
//                                                                 <header>
//                                                                     {/* style="font-size:39px" */}
//                                                                     <div ><b>Gerenciar
//                                                                             produtos</b></div>
//                                                                 </header>
//                                                             </section>
//                                                         </div>
//                                                     </div>
//                                                     <div className="Row sc-hMqMXs ccdkLC">
//                                                         <div className="col sc-jTzLTM imJzZn">
//                                                             <p className="sc-brqgnP hnymgt" font-size="20" nowrap="true"
//                                                                 type="p" align="left" font-family="Simplon"
//                                                                 font-weight="Regular" fontcolor="#909090"
//                                                                 themecolor="dark" margin="0" padding="0" width="100%"
//                                                                 height="auto" lineheight="1em" letter-spacing="normal"
//                                                                 whitespace="initial">Informe qual produto você deseja
//                                                                 gerenciar
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="links-media sc-jTzLTM imJzZn">
//                                 <div className="sc-tilXH jmCrCv">
//                                     <div className="itens-list sc-hMqMXs keDYPe">
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://pt-br.facebook.com/OiOficial/" color="#000"
//                                             font-size="0.875rem" font-weight="600" width="100%"><svg width="9"
//                                                 height="18" viewBox="0 0 9 18">
//                                                 <g fill="none" fill-rule="evenodd">
//                                                     <path d="M-11-8h32v32h-32z"></path>
//                                                     <path fill="#D82482"
//                                                         d="M5.956 17.455H2.41V9.09H.636V6.208H2.41v-1.73c0-2.352 1-3.75 3.844-3.75H8.62V3.61H7.14c-1.106 0-1.18.402-1.18 1.154l-.004 1.443h2.68L8.323 9.09H5.956v8.365z">
//                                                     </path>
//                                                 </g>
//                                             </svg></a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="http://www.twitter.com/digaoi" color="#000" font-size="0.875rem"
//                                             font-weight="600" width="100%"><svg width="16" height="14"
//                                                 viewBox="0 0 16 14">
//                                                 <g fill="none" fill-rule="evenodd">
//                                                     <path d="M-8-10h32v32H-8z"></path>
//                                                     <path fill="#D82482"
//                                                         d="M14.2 2.251A3.28 3.28 0 0 0 15.579.424a6.076 6.076 0 0 1-1.99.802A3.05 3.05 0 0 0 11.3.182c-1.73 0-3.132 1.48-3.132 3.304 0 .26.026.512.08.753C5.644 4.1 3.336 2.787 1.79.786a3.436 3.436 0 0 0-.424 1.662c0 1.146.554 2.158 1.394 2.751a3.021 3.021 0 0 1-1.42-.413v.04c0 1.603 1.08 2.938 2.515 3.241-.264.078-.54.116-.827.116-.201 0-.398-.02-.589-.058.399 1.312 1.556 2.269 2.927 2.294a6.083 6.083 0 0 1-4.639 1.37 8.544 8.544 0 0 0 4.803 1.484c5.765 0 8.915-5.036 8.915-9.403 0-.144-.002-.286-.008-.427A6.55 6.55 0 0 0 16 1.73a6.005 6.005 0 0 1-1.8.52z">
//                                                     </path>
//                                                 </g>
//                                             </svg></a></div>
//                                         <div className="item sc-jTzLTM fOkqQK"><a className="btn-item sc-bwzfXH eizAqW"
//                                             href="https://www.youtube.com/user/oi" color="#000" font-size="0.875rem"
//                                             font-weight="600" width="100%"><svg width="16" height="12"
//                                                 viewBox="0 0 16 12">
//                                                 <g fill="none" fill-rule="evenodd">
//                                                     <path d="M-8-10h32v32H-8z"></path>
//                                                     <path fill="#D82482"
//                                                         d="M15.273 8.592V3.408s0-2.499-2.507-2.499H3.233S.727.91.727 3.408v5.184s0 2.499 2.506 2.499h9.533s2.507 0 2.507-2.499m-4.45-2.585l-4.76 2.788V3.219l4.76 2.788">
//                                                     </path>
//                                                 </g>
//                                             </svg></a></div>
//                                         <div>
//                                             <div className="modal sc-Rmtcm fELZMf">
//                                                 <aside className="overlay sc-hSdWYo jRGhys"></aside>
//                                                 <div id="" url="" terminais="" data-context="popup_">
//                                                     <button
//                                                         className="fechar sc-bdVaJa lbySAP" data-context="popup__btn-fechar"
//                                                         font-size="0.875rem" width="100%">
//                                                         <svg width="30" height="30" viewBox="0 0 30 30">
//                                                             <path fill="#9B9B9B" fill-rule="evenodd"
//                                                                 d="M13.106 15.09L8.227 19.85l1.625 2.035 5.119-4.976 5.099 4.976 1.882-1.83-5.109-4.966 5.109-4.967-1.882-1.83-5.1 4.976-5.118-4.976-1.625 2.035 4.879 4.762zM15 30C6.716 30 0 23.284 0 15 0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z">
//                                                             </path>
//                                                         </svg>
//                                                     </button>
//                                                     <div className="Row sc-hMqMXs keDYPe">
//                                                         <div className="col sc-jTzLTM QhnwO">
//                                                             <div className="sc-jzJRlG gldQNC" display="flex"
//                                                                 position="relative" overflowy="visible"
//                                                                 overflowx="visible" width="100%"
//                                                                 height="calc(1.25em + 20px)" margin="30,0" type="div"
//                                                                 direction="column" justify="space-between"
//                                                                 aligncontent="center" alignitems="center"
//                                                                 flexwrap="nowrap" alignself="center" padding="0"
//                                                                 minwidth="" maxwidth="" minheight="" maxheight=""
//                                                                 zindex="initial" bgcolor="transparent"
//                                                                 bgmedia="[object Object]" border="none" radius="0"
//                                                                 shadow="0" shadow_color="0">
//                                                                 <div className="sc-dVhcbM cEwmKG sc-jzJRlG gfayDG"
//                                                                     border="1px solid #d9d9d9" boxshadow="0"
//                                                                     bgcolor="#fff" font-size="14" items="" tabindex="0"
//                                                                     type="div" display="flex" direction="column"
//                                                                     justify="space-between" aligncontent="center"
//                                                                     alignitems="center" flexwrap="nowrap"
//                                                                     alignself="center" margin="0" padding="0"
//                                                                     width="100%" minwidth="" maxwidth="" height="auto"
//                                                                     minheight="" maxheight="" position="relative"
//                                                                     zindex="initial" bgmedia="[object Object]"
//                                                                     radius="0" shadow="0" shadow_color="0"
//                                                                     overflowy="hidden" overflowx="hidden">
//                                                                     <i
//                                                                         className="arrow sc-kGXeez eQUOwe" type="arrowdown"
//                                                                         size="16" transform="translate(0, -50%)"
//                                                                         width="auto" height="auto">
//                                                                         <svg
//                                                                             viewBox="0 0 16 11" version="1.1"
//                                                                             xmlns="http://www.w3.org/2000/svg"
//                                                                             xmlns="http://www.w3.org/1999/xlink">
//                                                                             <defs>
//                                                                                 <polygon id="path-arrowdown"
//                                                                                     points="1.88 0 8 6.59289249 14.12 0 16 2.02968961 8 10.6666667 0 2.02968961">
//                                                                                 </polygon>
//                                                                             </defs>
//                                                                             <g id="VISUAL" stroke="none"
//                                                                                 stroke-width="1" fill="none"
//                                                                                 fill-rule="evenodd">
//                                                                                 <mask id="mask-2" fill="white">
//                                                                                     <use href="#path-arrowdown">
//                                                                                     </use>
//                                                                                 </mask>
//                                                                                 <use id="Seta-expandir" fill="#909090"
//                                                                                     fill-rule="nonzero"
//                                                                                     href="#path-arrowdown"></use>
//                                                                             </g>
//                                                                         </svg>
//                                                                     </i>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="btn-az sc-jTzLTM imJzZn">
//                                 <a className="sc-bwzfXH eRWINx" target="_blank"
//                                     href="https://www.vvc.com.br/#!finder" font-size="0.875rem" width="100%">Oi de A a Z</a>
//                             </div>
//                         </div>
//                     </section>
//                 </section>
//             </div>
//             <style jsx>{`
//             /* sc-component-id: sc-bwzfXH */
//             .iaXBsB {
//                 color: #d82482;
//                 background: transparent;
//                 -webkit-text-decoration: none;
//                 text-decoration: none;
//                 display: inline-block;
//                 border-radius: 0;
//                 text-align: left;
//                 padding: 0;
//                 border: 0;
//                 font: inherit;
//                 font-size: 0.875rem;
//                 font-weight: inherit;
//                 line-height: 1em;
//                 -webkit-transition: 0.3s ease;
//                 transition: 0.3s ease;
//                 white-space: nowrap;
//             }
    
//             .iaXBsB:hover {
//                 -webkit-text-decoration: underline;
//                 text-decoration: underline;
//             }
    
//             .iaXBsB:disabled,
//             .iaXBsB.disabled {
//                 color: #909090;
//             }
    
//             .iaXBsB:hover {
//                 cursor: pointer;
//             }
    
//             .iaXBsB:focus {
//                 outline: none;
//             }
    
//             .iaXBsB:disabled,
//             .iaXBsB.disabled {
//                 cursor: not-allowed;
//                 pointer-events: none;
//             }
    
//             .eizAqW {
//                 color: #000;
//                 background: transparent;
//                 -webkit-text-decoration: none;
//                 text-decoration: none;
//                 display: inline-block;
//                 border-radius: 0;
//                 text-align: left;
//                 padding: 0;
//                 border: 0;
//                 font: inherit;
//                 font-size: 0.875rem;
//                 font-weight: 600;
//                 font-weight: 300;
//                 line-height: 1.2em;
//                 -webkit-transition: 0.3s ease;
//                 transition: 0.3s ease;
//                 white-space: nowrap;
//             }
    
//             .eizAqW:hover {
//                 -webkit-text-decoration: underline;
//                 text-decoration: underline;
//             }
    
//             .eizAqW:disabled,
//             .eizAqW.disabled {
//                 color: #909090;
//             }
    
//             .eizAqW:hover {
//                 cursor: pointer;
//             }
    
//             .eizAqW:focus {
//                 outline: none;
//             }
    
//             .eizAqW:disabled,
//             .eizAqW.disabled {
//                 cursor: not-allowed;
//                 pointer-events: none;
//             }
    
//             .eRWINx {
//                 border-color: transparent;
//                 background: #d82482;
//                 color: white;
//                 border-width: 1px;
//                 text-transform: none;
//                 -webkit-text-decoration: none;
//                 text-decoration: none;
//                 padding: 1rem 0;
//                 border-style: solid;
//                 text-align: center;
//                 display: block;
//                 width: 100%;
//                 border-radius: 2px;
//                 font: inherit;
//                 font-size: 0.875rem;
//                 font-weight: inherit;
//                 line-height: 1em;
//                 -webkit-transition: 0.3s ease;
//                 transition: 0.3s ease;
//                 white-space: nowrap;
//             }
    
//             .eRWINx:hover {
//                 border-color: #d82482;
//                 background: white;
//                 color: #d82482;
//             }
    
//             .eRWINx:disabled,
//             .eRWINx.disabled {
//                 opacity: 0.5;
//             }
    
//             .eRWINx svg {
//                 -webkit-animation-name: spin;
//                 animation-name: spin;
//                 -webkit-animation-duration: 400ms;
//                 animation-duration: 400ms;
//                 -webkit-animation-iteration-count: infinite;
//                 animation-iteration-count: infinite;
//                 -webkit-animation-timing-function: linear;
//                 animation-timing-function: linear;
//             }
    
//             @-webkit-keyframes spin {
//                 from {
//                     -webkit-transform: rotate(0deg);
//                     -ms-transform: rotate(0deg);
//                     transform: rotate(0deg);
//                 }
    
//                 to {
//                     -webkit-transform: rotate(360deg);
//                     -ms-transform: rotate(360deg);
//                     transform: rotate(360deg);
//                 }
//             }
    
//             @keyframes spin {
//                 from {
//                     -webkit-transform: rotate(0deg);
//                     -ms-transform: rotate(0deg);
//                     transform: rotate(0deg);
//                 }
    
//                 to {
//                     -webkit-transform: rotate(360deg);
//                     -ms-transform: rotate(360deg);
//                     transform: rotate(360deg);
//                 }
//             }
    
//             .eRWINx:hover {
//                 cursor: pointer;
//             }
    
//             .eRWINx:focus {
//                 outline: none;
//             }
    
//             .eRWINx:disabled,
//             .eRWINx.disabled {
//                 cursor: not-allowed;
//                 pointer-events: none;
//             }
//             /* sc-component-id: sc-jTzLTM */

//         .imJzZn {
//             background-color: #242326;
//             padding: 15px;
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-flex: 1 1 0;
//             -ms-flex: 1 1 0;
//             flex: 1 1 0;
//             position: relative;
//             max-width: none;
//         }

//         @media only screen and (max-width:1023px) {
//             .imJzZn {
//                 -webkit-flex-basis: auto !important;
//                 -ms-flex-preferred-size: auto !important;
//                 flex-basis: auto !important;
//             }
//         }

//         .fOkqQK {
//             -webkit-flex: 1 1 0;
//             -ms-flex: 1 1 0;
//             flex: 1 1 0;
//             position: relative;
//             max-width: none;
//         }

//         @media only screen and (max-width:1023px) {
//             .fOkqQK {
//                 -webkit-flex-basis: auto !important;
//                 -ms-flex-preferred-size: auto !important;
//                 flex-basis: auto !important;
//             }
//         }
//         /* sc-component-id: sc-gisBJw */
//         .dStqxa i>svg {
//             height: 16px;
//         }
//         /* sc-component-id: sc-hMqMXs */
//         .keDYPe {
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-flex-direction: row;
//             -ms-flex-direction: row;
//             flex-direction: row;
//         }

//         @media only screen and (max-width:1023px) {
//             .keDYPe {
//                 -webkit-box-pack: initial;
//                 -webkit-justify-content: initial;
//                 -ms-flex-pack: initial;
//                 justify-content: initial;
//                 -webkit-flex-direction: column;
//                 -ms-flex-direction: column;
//                 flex-direction: column;
//                 -webkit-align-items: initial;
//                 -webkit-box-align: initial;
//                 -ms-flex-align: initial;
//                 align-items: initial;
//                 -webkit-box-flex: 1;
//                 -webkit-flex-grow: 1;
//                 -ms-flex-positive: 1;
//                 flex-grow: 1;
//             }

//             .keDYPe>.col,
//             .keDYPe .row {
//                 -webkit-box-pack: initial !important;
//                 -webkit-justify-content: initial !important;
//                 -ms-flex-pack: initial !important;
//                 justify-content: initial !important;
//                 -webkit-align-items: initial !important;
//                 -webkit-box-align: initial !important;
//                 -ms-flex-align: initial !important;
//                 align-items: initial !important;
//                 -webkit-flex-basis: auto !important;
//                 -ms-flex-preferred-size: auto !important;
//                 flex-basis: auto !important;
//                 -webkit-box-flex: 1 !important;
//                 -webkit-flex-grow: 1 !important;
//                 -ms-flex-positive: 1 !important;
//                 flex-grow: 1 !important;
//             }
//         }

//         .cZEkrD {
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-flex-direction: row;
//             -ms-flex-direction: row;
//             flex-direction: row;
//         }

//         .ccdkLC {
//             margin: 30px 0 25px 0;
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-flex-direction: row;
//             -ms-flex-direction: row;
//             flex-direction: row;
//         }

//         @media only screen and (max-width:1023px) {
//             .ccdkLC {
//                 -webkit-box-pack: initial;
//                 -webkit-justify-content: initial;
//                 -ms-flex-pack: initial;
//                 justify-content: initial;
//                 -webkit-flex-direction: column;
//                 -ms-flex-direction: column;
//                 flex-direction: column;
//                 -webkit-align-items: initial;
//                 -webkit-box-align: initial;
//                 -ms-flex-align: initial;
//                 align-items: initial;
//                 -webkit-box-flex: 1;
//                 -webkit-flex-grow: 1;
//                 -ms-flex-positive: 1;
//                 flex-grow: 1;
//             }

//             .ccdkLC>.col,
//             .ccdkLC .row {
//                 -webkit-box-pack: initial !important;
//                 -webkit-justify-content: initial !important;
//                 -ms-flex-pack: initial !important;
//                 justify-content: initial !important;
//                 -webkit-align-items: initial !important;
//                 -webkit-box-align: initial !important;
//                 -ms-flex-align: initial !important;
//                 align-items: initial !important;
//                 -webkit-flex-basis: auto !important;
//                 -ms-flex-preferred-size: auto !important;
//                 flex-basis: auto !important;
//                 -webkit-box-flex: 1 !important;
//                 -webkit-flex-grow: 1 !important;
//                 -ms-flex-positive: 1 !important;
//                 flex-grow: 1 !important;
//             }
//         }

//         /* sc-component-id: sc-btzYZH */
//         .bQzYOO {
//             display: none;
//         }

//         @media (max-width:1023px) {
//             .bQzYOO {
//                 width: 32px;
//                 height: 32px;
//                 display: inline-block;
//                 margin-right: 20px;
//             }
//         }
//         /* sc-component-id: sc-kgoBCf */
//         .gxeMNU {
//             background: #242326;
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             width: 100%;
//             -webkit-align-self: center;
//             -ms-flex-item-align: center;
//             align-self: center;
//             -webkit-flex-basis: auto;
//             -ms-flex-preferred-size: auto;
//             flex-basis: auto;
//         }

//         .fZMEGE {
//             background: white;
//             position: relative;
//             display: -webkit-box !important;
//             display: -webkit-flex !important;
//             display: -ms-flexbox !important;
//             display: flex !important;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             width: 100%;
//             -webkit-align-self: center;
//             -ms-flex-item-align: center;
//             align-self: center;
//             -webkit-flex-basis: auto;
//             -ms-flex-preferred-size: auto;
//             flex-basis: auto;
//             max-width: 1280px;
//         }
//         /* sc-component-id: sc-kjoXOD */
//         .cgqLXB .itens-list {
//             padding-top: 16px;
//         }

//         .cgqLXB .item {
//             -webkit-flex: none;
//             -ms-flex: none;
//             flex: none;
//             margin-right: 50px;
//         }

//         .cgqLXB .btn-item {
//             color: #909090;
//         }

//         .cgqLXB .btn-item:hover {
//             color: #d82482;
//             -webkit-text-decoration: none;
//             text-decoration: none;
//         }

//         @media(max-width:1023px) {
//             .cgqLXB .itens-list {
//                 -webkit-flex-direction: row !important;
//                 -ms-flex-direction: row !important;
//                 flex-direction: row !important;
//                 -webkit-flex-wrap: wrap;
//                 -ms-flex-wrap: wrap;
//                 flex-wrap: wrap;
//                 width: calc(100vw - 2rem);
//                 padding-bottom: 60px;
//                 padding-top: 30px;
//             }

//             .cgqLXB .item {
//                 margin-right: 0;
//                 width: calc(50vw - 1rem);
//                 padding: 10px 0 10px 0;
//             }
//         }
//         /* sc-component-id: sc-Rmtcm */
//         .fELZMf {
//             top: 0;
//             left: 0;
//             width: 100vw;
//             z-index: 999;
//             height: 100vh;
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             position: fixed;
//             -webkit-flex-direction: row;
//             -ms-flex-direction: row;
//             flex-direction: row;
//             -webkit-align-items: center;
//             -webkit-box-align: center;
//             -ms-flex-align: center;
//             align-items: center;
//             -webkit-transition: .3s ease;
//             transition: .3s ease;
//             -webkit-box-pack: center;
//             -webkit-justify-content: center;
//             -ms-flex-pack: center;
//             justify-content: center;
//             opacity: 0;
//             height: 0;
//             overflow-y: auto;
//         }

//         .fELZMf>div:not(.col):not(.row) {
//             z-index: 999;
//             background: white;
//             position: relative;
//             border-radius: 4px;
//             -webkit-transition: .3s ease;
//             transition: .3s ease;
//             min-width: calc(33vw);
//             min-height: calc(33vh);
//             padding: 2.5rem 2.7rem 2.7rem 2.7rem;
//             box-shadow: 0 2px 15px 10px rgba(0, 0, 0, 0.3);
//         }

//         @media (max-width:1023px) {
//             .fELZMf>div:not(.col):not(.row) {
//                 min-width: 90vw;
//             }
//         }

//         .fELZMf .fechar {
//             top: 20px;
//             right: 20px;
//             position: absolute;
//             z-index: 999;
//         }

//         .fELZMf .hideButtonModal {
//             opacity: 0;
//         }
//         /* sc-component-id: sc-hSdWYo */
//         .jRGhys {
//             top: 0;
//             left: 0;
//             z-index: 999;
//             position: fixed;
//             background: rgba(0, 0, 0, 0.6);
//             opacity: 0;
//             width: 0;
//             height: 0;
//             overflow: auto;
//         }
//         /* sc-component-id: sc-bdVaJa */
//         .lbySAP {
//             color: #d82482;
//             background: transparent;
//             -webkit-text-decoration: none;
//             text-decoration: none;
//             display: inline-block;
//             border-radius: 0;
//             text-align: left;
//             padding: 0;
//             border: 0;
//             font: inherit;
//             font-size: 0.875rem;
//             font-weight: inherit;
//             line-height: 1em;
//             -webkit-transition: 0.3s ease;
//             transition: 0.3s ease;
//             white-space: nowrap;
//         }

//         .lbySAP:hover {
//             -webkit-text-decoration: underline;
//             text-decoration: underline;
//         }

//         .lbySAP:disabled,
//         .lbySAP.disabled {
//             color: #909090;
//         }

//         .lbySAP:hover {
//             cursor: pointer;
//         }

//         .lbySAP:focus {
//             outline: none;
//         }

//         .lbySAP:disabled,
//         .lbySAP.disabled {
//             cursor: not-allowed;
//             pointer-events: none;
//         }

//         .kTvDzf {
//             color: #d82482;
//             background: transparent;
//             -webkit-text-decoration: none;
//             text-decoration: none;
//             display: inline-block;
//             border-radius: 0;
//             text-align: left;
//             padding: 0;
//             border: 0;
//             font: inherit;
//             font-size: 0.75rem;
//             font-weight: inherit;
//             line-height: 1em;
//             -webkit-transition: 0.3s ease;
//             transition: 0.3s ease;
//             white-space: nowrap;
//         }

//         .kTvDzf:hover {
//             -webkit-text-decoration: underline;
//             text-decoration: underline;
//         }

//         .kTvDzf:disabled,
//         .kTvDzf.disabled {
//             color: #909090;
//         }

//         .kTvDzf:hover {
//             cursor: pointer;
//         }

//         .kTvDzf:focus {
//             outline: none;
//         }

//         .kTvDzf:disabled,
//         .kTvDzf.disabled {
//             cursor: not-allowed;
//             pointer-events: none;
//         }

//         /* sc-component-id: sc-jzJRlG */
//         .gldQNC {
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-box-pack: justify;
//             -webkit-justify-content: space-between;
//             -ms-flex-pack: justify;
//             justify-content: space-between;
//             -webkit-align-content: center;
//             -ms-flex-line-pack: center;
//             align-content: center;
//             -webkit-align-items: center;
//             -webkit-box-align: center;
//             -ms-flex-align: center;
//             align-items: center;
//             -webkit-flex-wrap: nowrap;
//             -ms-flex-wrap: nowrap;
//             flex-wrap: nowrap;
//             -webkit-align-self: center;
//             -ms-flex-item-align: center;
//             align-self: center;
//             position: relative;
//             width: 100%;
//             height: calc(1.25em + 20px);
//             margin: 30px 0px;
//             padding: 0;
//             background-color: transparent;
//             background-size: cover;
//             border: none;
//             box-shadow: 0;
//             border-radius: 0;
//             -webkit-transition: all 0.3s ease;
//             transition: all 0.3s ease;
//             z-index: initial;
//             overflow-x: visible;
//             overflow-y: visible;
//         }

//         @media (max-width:800px) {
//             .gldQNC {
//                 background-size: cover;
//             }

//         }

//         @media (max-width:480px) {
//             .gldQNC {
//                 background-size: cover;
//             }

//         }

//         .gfayDG {
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             -webkit-flex-direction: column;
//             -ms-flex-direction: column;
//             flex-direction: column;
//             -webkit-box-pack: justify;
//             -webkit-justify-content: space-between;
//             -ms-flex-pack: justify;
//             justify-content: space-between;
//             -webkit-align-content: center;
//             -ms-flex-line-pack: center;
//             align-content: center;
//             -webkit-align-items: center;
//             -webkit-box-align: center;
//             -ms-flex-align: center;
//             align-items: center;
//             -webkit-flex-wrap: nowrap;
//             -ms-flex-wrap: nowrap;
//             flex-wrap: nowrap;
//             -webkit-align-self: center;
//             -ms-flex-item-align: center;
//             align-self: center;
//             position: relative;
//             width: 100%;
//             height: auto;
//             margin: 0;
//             padding: 0;
//             background-color: #fff;
//             background-size: cover;
//             border: 1px solid #d9d9d9;
//             box-shadow: 0;
//             border-radius: 0;
//             -webkit-transition: all 0.3s ease;
//             transition: all 0.3s ease;
//             z-index: initial;
//             overflow-x: hidden;
//             overflow-y: hidden;
//         }

//         @media (max-width:800px) {
//             .gfayDG {
//                 background-size: cover;
//             }

//         }

//         @media (max-width:480px) {
//             .gfayDG {
//                 background-size: cover;
//             }
//         }
//         /* sc-component-id: sc-cSHVUG */

//         .jVqgwu {
//             display: block;
//             width: 100%;
//             height: 1px;
//             position: static;
//             bottom: unset;
//             height: 1px;
//             background-color: #d7d7d7;
//             margin: 40px 0 0 0;
//             padding: 0;
//         }
//         /* sc-component-id: sc-brqgnP */
//         .hnymgt {
//             font-family: Simplon;
//             font-weight: 400;
//             font-size: 1.25rem;
//             color: #909090;
//             text-align: left;
//             line-height: 1em;
//             text-transform: none;
//             -webkit-letter-spacing: normal;
//             -moz-letter-spacing: normal;
//             -ms-letter-spacing: normal;
//             letter-spacing: normal;
//             margin: 0px;
//             padding: 0px;
//             width: 100%;
//             height: auto;
//             white-space: nowrap;
//             color: #909090;
//             width: 100%;
//         }
//         /* sc-component-id: sc-tilXH */
//         .jmCrCv .itens-list {
//             -webkit-box-pack: space-around;
//             -webkit-justify-content: space-around;
//             -ms-flex-pack: space-around;
//             justify-content: space-around;
//             padding-top: 16px;
//         }

//         @media(max-width:1023px) {
//             .jmCrCv .itens-list {
//                 -webkit-flex-direction: row !important;
//                 -ms-flex-direction: row !important;
//                 flex-direction: row !important;
//             }
//         }
//         /* sc-component-id: sc-dVhcbM */
//         .cEwmKG {
//             position: relative;
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             -webkit-flex-direction: row;
//             -ms-flex-direction: row;
//             flex-direction: row;
//             -webkit-flex-wrap: wrap;
//             -ms-flex-wrap: wrap;
//             flex-wrap: wrap;
//             -webkit-align-content: flex-start;
//             -ms-flex-line-pack: start;
//             align-content: flex-start;
//             -webkit-align-items: flex-start;
//             -webkit-box-align: flex-start;
//             -ms-flex-align: flex-start;
//             align-items: flex-start;
//             -webkit-align-self: flex-start;
//             -ms-flex-item-align: start;
//             align-self: flex-start;
//             position: absolute;
//             width: 100%;
//             padding: 0;
//             background-color: #fff;
//             max-height: calc(1.25em + 20px);
//             box-shadow: 0;
//             border: 1px solid #d9d9d9;
//             border-radius: 4px;
//             font-size: 0.875rem;
//             cursor: pointer;
//             box-sizing: border-box;
//         }

//         .cEwmKG:focus {
//             outline: 0;
//             border-color: #D82482;
//         }

//         .cEwmKG .selected {
//             -webkit-order: -1;
//             -ms-flex-order: -1;
//             order: -1;
//         }

//         .cEwmKG .select-list-scroll {
//             max-height: inherit;
//             overflow-y: hidden;
//             opacity: 0;
//         }

//         .cEwmKG .select-list-scroll>div {
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             -webkit-flex-wrap: wrap;
//             -ms-flex-wrap: wrap;
//             flex-wrap: wrap;
//         }
//         /* sc-component-id: sc-kGXeez */
//         .eQUOwe {
//             display: inline-block;
//             color: #909090;
//             box-sizing: border-box;
//             position: absolute;
//             top: calc(0.625em + 10px);
//             right: 1em;
//             width: 1rem;
//             height: 1rem;
//             margin: 0px;
//             -webkit-transform: translate(0, -50%);
//             -ms-transform: translate(0, -50%);
//             transform: translate(0, -50%);
//             -webkit-transition: all 0.3s ease-in-out;
//             transition: all 0.3s ease-in-out;
//             z-index: 1;
//             pointer-events: none;
//         }

//         .eQUOwe svg {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             -webkit-transform: translate(-50%, -50%);
//             -ms-transform: translate(-50%, -50%);
//             transform: translate(-50%, -50%);
//         }

//         .eQUOwe.nofill svg {
//             fill: #ffffff;
//         }

//         .eQUOwe svg :not([fill="none"]) :not([fill="#ffffff"]) {
//             fill: #D82482;
//         }
//         /* sc-component-id: sc-kGXeez */
//         .eQUOwe {
//             display: inline-block;
//             color: #909090;
//             box-sizing: border-box;
//             position: absolute;
//             top: calc(0.625em + 10px);
//             right: 1em;
//             width: 1rem;
//             height: 1rem;
//             margin: 0px;
//             -webkit-transform: translate(0, -50%);
//             -ms-transform: translate(0, -50%);
//             transform: translate(0, -50%);
//             -webkit-transition: all 0.3s ease-in-out;
//             transition: all 0.3s ease-in-out;
//             z-index: 1;
//             pointer-events: none;
//         }

//         .eQUOwe svg {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             -webkit-transform: translate(-50%, -50%);
//             -ms-transform: translate(-50%, -50%);
//             transform: translate(-50%, -50%);
//         }

//         .eQUOwe.nofill svg {
//             fill: #ffffff;
//         }

//         .eQUOwe svg :not([fill="none"]) :not([fill="#ffffff"]) {
//             fill: #D82482;
//         }
//         /* sc-component-id: sc-jwKygS */
//         .bjGKGY {
//             max-width: 1248px;
//             padding: 1rem 1rem;
//             margin: 0 auto;
//         }

//         .bjGKGY .itens-list {
//             -webkit-box-pack: justify;
//             -webkit-justify-content: space-between;
//             -ms-flex-pack: justify;
//             justify-content: space-between;
//         }

//         .bjGKGY .itens-list a:hover {
//             color: #909090;
//             -webkit-text-decoration: none !important;
//             text-decoration: none !important;
//         }

//         @media(max-width:1023px) {
//             .bjGKGY .item {
//                 align-items: center;
//                 padding: 7px 0 7px 0;
//                 display: -webkit-box;
//                 display: -webkit-flex;
//                 display: -ms-flexbox;
//                 display: flex;
//                 -webkit-align-items: center;
//                 -webkit-box-align: center;
//                 -ms-flex-align: center;
//                 align-items: center;
//             }
//         }

//         .bjGKGY .btn-item {
//             color: #909090;
//             font-weight: bold;
//             font-size: 1rem;
//             margin-bottom: 25px;
//         }

//         @media(max-width:1023px) {
//             .bjGKGY .btn-item {
//                 margin-top: 28px;
//             }
//         }

//         .bjGKGY .sub-item {
//             color: #909090;
//             margin-bottom: 25px;
//             font-size: 1rem;
//         }

//         @media(max-width:1023px) {

//             .bjGKGY .sub-item,
//             .bjGKGY .divider {
//                 display: none;
//             }
//         }
//         `}</style>
//     </section>
//     )
// }

export default footerPrimeiraCamada