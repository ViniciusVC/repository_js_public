// Portal Oi SEO - Menu principal (NAV01)

import React from 'react';
import Logo from '../../atoms/atLogo/index.js';
import Btnminhavvc from '../../atoms/atBtLink/atBtnMinhavvc.js';

const Nav01 = function(props){
  console.log('Rodando views/organisms/Nav01.jsx - Portal Oi SEO - Menu principal');
  return(
    <section class="nav01 menu container undefined">
                <h2 className="hidden">Navigation</h2>
                <div className="containerMainMenu">
                  <nav className="main-menu">
                    <h3 className="hidden">Main Menu</h3>
                    <h2 className="logo">
                      <a data-context="" href="https://www.vvc.com.br">
                        <span>
                          <Logo type="roxo01" width="40px"/>
                        </span>
                      </a>
                    </h2>
                    <ul>
                      <li className="small-only"><div className="Modal__wrapper"><a className="menuMobile small-only" data-context=""><span>Menu do Portal da Oi</span></a></div></li>
                      
                      <li className="primary medium-up"><a data-context="" href="/combo/">Combo</a></li>
                      <li className="primary medium-up"><a data-context="" href="/tv-hd/">TV HD</a></li>
                      <li className="primary medium-up"><a data-context="" href="/celular/">Celular</a></li>
                      <li className="primary medium-up"><a data-context="" href="/internet/">Internet</a></li>
                      <li className="primary medium-up"><a data-context="" href="/fixo/">Fixo</a></li>
                      
                      <li className="secondary large-up"><a data-context="" href="/recarga/">Recarga</a></li>
                      <li className="secondary large-up"><a data-context="" href="/minha-oi/segunda-via/">2ª via</a></li>
                      
                      <li className="secondary extra-large-up"><a data-context="" href="/minha-oi/conta-online/">Conta Digital</a></li>
                      <li className="secondary extra-large-up"><a data-context="" href="https://www.vvc.com.br/loja/">Smartphones</a></li>
                      <li className="secondary extra-large-up"><a data-context="" href="/oi/celular-legal/">Celular Legal</a></li>
                      
                      <li className="medium-up search">
                        <span className="icon-menu-search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 692 10 10" enable-background="new -10 692 10 10"><path d="M-9.8 701.8c.3.3.8.3 1.1 0l1.6-1.6.2-.2c.7.5 1.6.8 2.5.8 2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4s-4.4 2-4.4 4.4c0 .9.3 1.8.8 2.5-.1 0-.2.1-.2.2l-1.6 1.6c-.3.3-.3.8 0 1.1zm1.7-5.4c0-2 1.6-3.7 3.7-3.7s3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7-3.7-1.7-3.7-3.7z"/>
                        </svg>
                        </span>
                        <a data-context="" href="https://www.vvc.com.br/faq/">BUSCA</a>
                      </li>
                      <Btnminhavvc></Btnminhavvc>
                      <li>
                        <div className="tooltip-0800 hide">
                          <span className="label">
                            <span>Assine pelo Telefone</span>
                            <span className="ico">
                              <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m1.41556284 6.43900493c-.17024058.31381671-1.10080077 2.31945708.93691936 5.49557407l.02358197.0404711c.00861139.0165865.90525594 1.7065524 2.49014938 3.261836 1.53680212 1.5280817 3.15574367 2.3864665 3.17190659 2.3949588l.03934744.0226904c3.16276532 2.0234211 5.16378762 1.1010786 5.48863582.9244655l1.2796527-1.2815398c.1706381-.1662632.0597498-.4983914.0046369-.6326757l-2.6527059-2.6567603c-.268013-.2408361-.4921742-.1230055-.590609-.0449826l-1.4414144 2.122144-.34246839-.0660807c-.79264545-.1531266-2.45795603-1.5714719-3.37990482-2.4033184l-.04014233-.0402057c-.82536873-.9231386-2.23485475-2.5894854-2.40085588-3.3795339l-.07273314-.34672433 2.10647878-1.44621068c.10784112-.13813242.17765963-.34871471-.04133467-.59353155l-2.66727908-2.65755643c-.13102563-.05440374-.46408774-.16812083-.62651183-.00053076zm10.46363526 13.56099507c-1.1151089 0-2.59560582-.3184609-4.35418439-1.439178-.21290009-.1142479-1.83502123-1.0088577-3.40308933-2.568122-1.6263606-1.5958873-2.55493354-3.2822706-2.67297584-3.5029375-2.55122402-3.99230576-.97136493-6.55644698-.90273877-6.66379485l.03100101-.04829991 1.36907872-1.37137236c.61061388-.62909302 1.50858326-.39887231 1.94206745-.16254776l.0667714.03622493 2.81314279 2.80378306c.71805755.78328119.39744883 1.67616601.00688912 2.08512292l-.03802261.03980761-1.56290126 1.07294796c.30245855.5338201 1.06516285 1.5177317 1.99956504 2.5645393 1.15326401 1.0388461 2.06554155 1.7249967 2.55201891 1.9994038l1.07364176-1.5810258.0404073-.0387461c.4085774-.3911761 1.2999226-.7122909 2.0819694.0069l.0162954.0156577 2.7826718 2.7870639.0365652.0674075c.2358197.4343011.4659426 1.3338205-.1675909 1.9504405l-1.3639119 1.3660647-.0483562.0311826c-.0597498.038348-.885781.5493451-2.2983141.5494778z" fill="#909090" fill-rule="evenodd" transform="translate(0 -4)"/>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
    <style jsx>{`
      .nav01{
        color: rgb(0, 0, 0);
        display: block;
        font-family: oiTextRegular, sans-serif;
        font-size: 19.2px;
        height: 57px;
        letter-spacing: -0.255936px;
        margin-bottom: 0px;
        margin-left: 32.5px;
        margin-right: 32.5px;
        margin-top: 0px;
        max-width: 960px;
        padding-bottom: 22.72px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 22.72px;
        visibility: visible;
        width: 960px;
        -webkit-font-smoothing: antialiased;
      }
      .menu .logo{ 
        width:4.59rem; position:absolute; top:1.5rem  
      }
      .menu .logo span svg{ 
        width:4.12rem; height:4.12rem  
      }
      @media screen and (min-width:734px){
        .menu .logo{ 
          position:relative; 
          top:0; 
          margin-right:1.88rem  
        }     
      }
      @media (min-width:1250px){
        .ComboCommonTheme-page .menu.blackfriday{ 
          padding:0  
        }     
      }   
      .main-menu-mobile .headerMenuMobile{ 
        min-height:3.75rem; 
        width:88%; 
        border-bottom:.05rem solid rgba(34,34,34,.25); 
        padding:.75rem 1.5rem  
      }   
      .main-menu-mobile .headerMenuMobile .logo{ width:50%; float:left  }   
      .main-menu-mobile .headerMenuMobile .logo span svg{ width:4.12rem; height:4.12rem  }   
      .main-menu-mobile .headerMenuMobile .logo span svg .ameba *{ fill:#fff  }   
      .main-menu-mobile .headerMenuMobile .logo span svg .oi{ fill:transparent  }   
      .main-menu-mobile .headerMenuMobile .wrapperButton{ text-align:right; padding-top:.75rem  }   
      .main-menu-mobile .headerMenuMobile .wrapperButton .cancel span{ opacity:.5  }   
      .main-menu-mobile .headerMenuMobile .wrapperButton .cancel span svg{ fill:#fff; width:1.35rem; height:1.35rem  }   
      .main-menu-mobile ul{ padding:1.5rem 2.25rem  }
      .main-menu-mobile ul li{ font-size:2.62rem; font-family:oiTextLight; padding-bottom:1.5rem  }   
      .main-menu-mobile ul li.secondary{
        font-size:1.04rem;
        padding-right:1.5rem
      }
      .main-menu-mobile ul li a{
        color:#fff
      }
      .main-menu-mobile ul .wrapperGroup{
        width:100%;
        border-bottom:.05rem solid rgba(34,34,34,.25)
      }
      .main-menu-mobile ul .wrapperGroup .group{
        width:50%;
        float:left;
        padding-top:1.12rem
      }
      .icon-menu-search{
        margin-right:.22rem
      }
      .icon-menu-search svg{
        fill:#8f25e5; 
        width:.56rem; 
        height:.56rem
      }
      .icon-menu-search .menu{
        background-color:#fff
      }
    `}</style>
  </section>
)}

export default Nav01

/*
import React, { Component } from 'react';
import Img from '../../atoms/Imagem.jsx';
//var PropTypes = require('prop-types');
var VarModo = "html";

class Nav01 extends React.Component {
  render() {
    console.log('Rodando views/organisms/Nav01.jsx - Portal Oi SEO - Menu principal');
    return (
              <section class="menu container undefined">
                <h2 class="hidden">Navigation</h2>
                <div class="containerMainMenu">
                  <nav class="main-menu">
                    <h3 class="hidden">Main Menu</h3>
                    <h2 class="logo">
                      <a data-context="" href="https://www.vvc.com.br">
                      <span>
                      <Img src="/fontesoi/logo-vvc.svg" width="48" height="45" alt="Logo da Oi" title="Logo da Oi" class="" modo={VarModo}></Img>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 528.1" enable-background="new 0 0 612 528.1">
                          <linearGradient id="purple-gradient" gradientUnits="userSpaceOnUse" x1="34.582" y1="264.026" x2="568.693" y2="264.026">
                            <stop offset="0" style="stop-color:#E9278B"/>
                            <stop offset=".062" style="stop-color:#D528AB"/>
                            <stop offset=".136" style="stop-color:#C129C9"/>
                            <stop offset=".214" style="stop-color:#B229E1"/>
                            <stop offset=".297" style="stop-color:#A72AF2"/>
                            <stop offset=".387" style="stop-color:#A12AFC"/>
                            <stop offset=".5" style="stop-color:#9F2AFF"/>
                            <stop offset=".598" style="stop-color:#9C2DFF"/>
                            <stop offset=".676" style="stop-color:#9237FF"/>
                            <stop offset=".748" style="stop-color:#8248FF"/>
                            <stop offset=".816" style="stop-color:#6A60FF"/>
                            <stop offset=".881" style="stop-color:#4C7FFF"/>
                            <stop offset=".943" style="stop-color:#28A4FF"/>
                            <stop offset="1" style="stop-color:#00CDFF"/>
                          </linearGradient>
                          <path fill="url(#purple-gradient)" d="M568.7 310.3c0 83.3-109 186.3-251.2 186.3-155.6 0-283-90.6-283-241.1 0-103.1 69.7-224.1 202.1-224.1 117.9 0 161.7 82.8 219 120.8 63.9 42.3 113.1 80 113.1 158.1z"/><path fill="#FFFFFF" d="M349.5 215.4c11.9 0 21.5-9.6 21.5-21.5 0-11.8-9.6-21.5-21.5-21.5-11.8 0-21.4 9.6-21.4 21.5-.1 11.9 9.5 21.5 21.4 21.5zm.3 15.9c-12.1 0-21.9 28.7-21.9 64.1 0 35.4 9.8 64.1 21.9 64.1 12.1 0 21.9-28.7 21.9-64.1-.1-35.4-9.9-64.1-21.9-64.1zm-97.5-.1c-36 0-59.9 28.5-59.9 64.1 0 35.7 23.9 64.1 59.9 64.1 35.9 0 59.7-28.4 59.7-64.1 0-35.6-23.9-64.1-59.7-64.1zm0 98.1c-16.5 0-25.6-16.9-25.6-34.1 0-17.2 9.1-33.6 25.6-33.6 16.4 0 25.5 16.5 25.5 33.6s-9.1 34.1-25.5 34.1z"/>
                        </svg>
                      </span>
                      </a>
                    </h2>
                    <ul>
                      <li class="small-only"><div class="Modal__wrapper"><a class="menuMobile small-only" data-context=""><span>Menu do Portal da Oi</span></a></div></li>
                      
                      <li class="primary medium-up"><a data-context="" href="/combo/">Combo</a></li>
                      <li class="primary medium-up"><a data-context="" href="/tv-hd/">TV HD</a></li>
                      <li class="primary medium-up"><a data-context="" href="/celular/">Celular</a></li>
                      <li class="primary medium-up"><a data-context="" href="/internet/">Internet</a></li>
                      <li class="primary medium-up"><a data-context="" href="/fixo/">Fixo</a></li>
                      
                      <li class="secondary large-up"><a data-context="" href="/recarga/">Recarga</a></li>
                      <li class="secondary large-up"><a data-context="" href="/minha-oi/segunda-via/">2ª via</a></li>
                      
                      <li class="secondary extra-large-up"><a data-context="" href="/minha-oi/conta-online/">Conta Digital</a></li>
                      <li class="secondary extra-large-up"><a data-context="" href="https://www.vvc.com.br/loja/">Smartphones</a></li>
                      <li class="secondary extra-large-up"><a data-context="" href="/oi/celular-legal/">Celular Legal</a></li>
                      
                      <li class="medium-up search">
                        <span class="icon-menu-search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 692 10 10" enable-background="new -10 692 10 10"><path d="M-9.8 701.8c.3.3.8.3 1.1 0l1.6-1.6.2-.2c.7.5 1.6.8 2.5.8 2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4s-4.4 2-4.4 4.4c0 .9.3 1.8.8 2.5-.1 0-.2.1-.2.2l-1.6 1.6c-.3.3-.3.8 0 1.1zm1.7-5.4c0-2 1.6-3.7 3.7-3.7s3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7-3.7-1.7-3.7-3.7z"/>
                        </svg>
                        </span>
                        <a data-context="" href="https://www.vvc.com.br/faq/">BUSCA</a>
                      </li>
                      <li class="minhavvc oiPurple"><a data-context="" href="/minha-oi/"><span>Minha VVC</span></a></li>
                      <li>
                        <div class="tooltip-0800 hide">
                          <span class="label">
                            <span>Assine pelo Telefone</span>
                            <span class="ico">
                              <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m1.41556284 6.43900493c-.17024058.31381671-1.10080077 2.31945708.93691936 5.49557407l.02358197.0404711c.00861139.0165865.90525594 1.7065524 2.49014938 3.261836 1.53680212 1.5280817 3.15574367 2.3864665 3.17190659 2.3949588l.03934744.0226904c3.16276532 2.0234211 5.16378762 1.1010786 5.48863582.9244655l1.2796527-1.2815398c.1706381-.1662632.0597498-.4983914.0046369-.6326757l-2.6527059-2.6567603c-.268013-.2408361-.4921742-.1230055-.590609-.0449826l-1.4414144 2.122144-.34246839-.0660807c-.79264545-.1531266-2.45795603-1.5714719-3.37990482-2.4033184l-.04014233-.0402057c-.82536873-.9231386-2.23485475-2.5894854-2.40085588-3.3795339l-.07273314-.34672433 2.10647878-1.44621068c.10784112-.13813242.17765963-.34871471-.04133467-.59353155l-2.66727908-2.65755643c-.13102563-.05440374-.46408774-.16812083-.62651183-.00053076zm10.46363526 13.56099507c-1.1151089 0-2.59560582-.3184609-4.35418439-1.439178-.21290009-.1142479-1.83502123-1.0088577-3.40308933-2.568122-1.6263606-1.5958873-2.55493354-3.2822706-2.67297584-3.5029375-2.55122402-3.99230576-.97136493-6.55644698-.90273877-6.66379485l.03100101-.04829991 1.36907872-1.37137236c.61061388-.62909302 1.50858326-.39887231 1.94206745-.16254776l.0667714.03622493 2.81314279 2.80378306c.71805755.78328119.39744883 1.67616601.00688912 2.08512292l-.03802261.03980761-1.56290126 1.07294796c.30245855.5338201 1.06516285 1.5177317 1.99956504 2.5645393 1.15326401 1.0388461 2.06554155 1.7249967 2.55201891 1.9994038l1.07364176-1.5810258.0404073-.0387461c.4085774-.3911761 1.2999226-.7122909 2.0819694.0069l.0162954.0156577 2.7826718 2.7870639.0365652.0674075c.2358197.4343011.4659426 1.3338205-.1675909 1.9504405l-1.3639119 1.3660647-.0483562.0311826c-.0597498.038348-.885781.5493451-2.2983141.5494778z" fill="#909090" fill-rule="evenodd" transform="translate(0 -4)"/>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
    );
  }
}

//Nav01.propTypes = {title: PropTypes.string};
module.exports = Nav01;
*/