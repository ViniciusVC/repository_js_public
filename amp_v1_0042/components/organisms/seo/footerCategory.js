
// Usado no Footer da HOME - layout Portal Oi SEO.

import React from 'react';
import Icon from '../../atoms/atIcon/index.js';
import Div from '../../atoms/atDiv/index.js';


const footerCategory = function(props){
  var cidade = "Rio de Janeiro";
  if(props.cidade!=undefined){
    cidade = props.cidade
  }
  console.log('Rodando /views/organisms/footer01.jsx - layout Portal Oi SEO');
  return(
    <div>
          <div className="IconFooterCategory">
                <a href="/combo/">
                  <Icon type="comboB" color="#000000" width="30px" heigth="30px"/>
                  Combo
                </a>
          </div>
          <div className="IconFooterCategory">
                <a href="/tv-hd/">
                  <Icon type="product_tvhd" color="#000000" width="30px" heigth="30px"/>
                  TV HD
                </a>
              </div>
              <div className="IconFooterCategory">
                <a href="/celular/">
                    <Icon type="mobileB" color="#000000" width="30px" heigth="10px"/>
                    Celular
                </a>
              </div>
              <div className="IconFooterCategory">
                <a href="/internet/">
                    <Icon type="internet" color="#000000" width="30px" heigth="30px"/>
                    Internet
                </a>
          </div>
          <div className="IconFooterCategory">
                <a href="/fixo/">
                  <Icon type="product_fixo" color="#000000" width="30px" heigth="30px"/>
                  Fixo
                </a>
          </div>
      <Div display="horizontal">
          <div className="ColfooterCategory">
            <div class="link-title"><a class="medium-up" href="/combo/">Combo</a></div>
            <div class="link-item"><a href="/combo/">Planos</a></div>
            <div class="link-item"><a href="/meuvvc/combo/">Atendimento</a></div>
            <div class="link-item"><a href="/meuvvc/combo/">Serviços Adicionais</a></div>
          </div>
          <div className="ColfooterCategory">
            <div class="link-title"><a class="medium-up" data-context="" href="/tv-hd/">TV HD</a></div>
            <div class="link-item"><a href="/tv-hd/">Planos</a></div>
            <div class="link-item"><a href="/meuvvc/tv-hd/">Atendimento</a></div>
            <div class="link-item"><a href="/meuvvc/tv-hd/">Serviços Adicionais</a></div>
          </div>
          <div className="ColfooterCategory">
            <div class="link-title"> <a class="medium-up" data-context="" href="/celular/">Celular</a></div>
            <div class="link-item"><a href="/celular/">Planos</a></div>
            <div class="link-item"><a href="/meuvvc/celular/">Atendimento</a></div>
            <div class="link-item"><a href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">Serviços pra Celular</a>
            </div>
          </div>
          <div className="ColfooterCategory">
            <div class="link-title"><a class="medium-up" data-context="" href="/internet/">Internet</a></div>
            <div class="link-item"><a data-context="" href="/internet/">Planos</a></div>
            <div class="link-item"><a data-context="" href="/meuvvc/internet/">Atendimento</a></div>
            <div class="link-item"><a data-context="" href="https://servicos.vvcestudio.com.br/?utm_source=Portal+Oi&amp;utm_medium=Link&amp;utm_content=Servicos+Adicionais&amp;utm_campaign=Rodape">Serviços pra Internet</a></div>
          </div>
          <div className="ColfooterCategory">
            <div class="link-title"><a class="medium-up" data-context="" href="/fixo/">Fixo</a></div>
            <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/fixo/">Planos</a></div>
            <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/meuvvc/fixo/">Atendimento</a></div>
            <div class="link-item"><a data-context="" href="https://www.vvcestudio.com.br/meuvvc/fixo/">Serviços Adicionais</a></div>
          </div>
      </Div>
      <style jsx>{`
        .IconFooterCategory{
          padin-left:0px;
          display:none;
        }
        .IconFooterCategory:hover{
          transition-duration: 1s;
          padin-left:10px;
        }
        .ColfooterCategory{
          pading:10px;
          
        }
        @media only screen and (max-width : 720px) {
          .IconFooterCategory{
            padin-left:0px;
            display:block;
          }
          .ColfooterCategory{
            display:none;
          }
        }
      `}</style>
    </div>
)}

export default footerCategory

