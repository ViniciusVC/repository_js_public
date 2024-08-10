// Content01 é usado na HOME - layout Portal Oi SEO.

import React, { Component } from 'react';
import Img from '../../atoms/atImg/index.js';

//import Recaptcha from '../components/organisms/seo/content01'

const content01 = function(props){
  console.log('Rodando /views/organisms/content01.jsx - layout Portal Oi SEO');
  return(
      <div class="teste sliderss carousel">

        Hero01 - Hero01

        <div class="controls-wrapper">
          <div class="controls-mobile">
            <div class="items">
              <div role="button" tabindex="0" class="item arrow" data-reactid="303">
                <span class="arrow--icon left" data-reactid="304">
                <Img src="" width="" height="" alt="Icone seta SVG" title="Icone seta SVG" class="imgseta" modo={props.modo}></Img>
                  </span>
              </div>
              <div class="item active" data-reactid="305">
                <div class="wrap" role="button" tabindex="1" data-label="Oi Controle" data-slide="0" data-reactid="306">
                  <div class="slider--mobile progressbar-mobile" data-reactid="307">
                    <div data-reactid="308"></div>
                  </div>
                </div>
              </div>
              <div class="item " data-reactid="309">
                <div class="wrap" role="button" tabindex="2" data-label="Internet Oi Fibra" data-slide="1" data-reactid="310"></div>
              </div>
              <div class="item " data-reactid="311">
                <div class="wrap" role="button" tabindex="3" data-label="Pós-pago" data-slide="2" data-reactid="312"></div>
              </div>
            </div>

            <div class="item " data-reactid="313">
              <div class="wrap" role="button" tabindex="4" data-label="Whatsapp da Oi" data-slide="3" data-reactid="314"></div>
            </div>
            <div class="item " data-reactid="315">
              <div class="wrap" role="button" tabindex="5" data-label="Pré-pago" data-slide="4" data-reactid="316"></div>
            </div>
            <div role="button" tabindex="6" class="item arrow" data-reactid="317">
              <span class="arrow--icon right" data-reactid="318">
              <Img src="" width="" height="" alt="Icone seta SVG" title="Icone seta SVG" class="imgseta" modo={props.modo}></Img>
                </span>
            </div>
          </div>
        </div>
    <style jsx>{`
      .a{
        border-bottom:.05rem solid rgba(34,34,34,.3);
        padding-bottom:.05rem; color:rgba(34,34,34,.9)
       }   
    `}</style>
 </div>
)}

export default content01

/*
var Hero01 = require('./Hero01');
var VarModo = "html";
class Index extends React.Component {
  render() {
    console.log('Rodando /views/organisms/content01.jsx - layout Portal Oi SEO');
    return (
      <div class="teste sliderss carousel">
        <Hero01></Hero01>
        <div class="controls-wrapper">
          <div class="controls-mobile">
            <div class="items">
              <div role="button" tabindex="0" class="item arrow" data-reactid="303">
                <span class="arrow--icon left" data-reactid="304">
                <Img src="" width="" height="" alt="Icone seta SVG" title="Icone seta SVG" class="" modo={VarModo}></Img>
                  </span>
              </div>
              <div class="item active" data-reactid="305">
                <div class="wrap" role="button" tabindex="1" data-label="Oi Controle" data-slide="0" data-reactid="306">
                  <div class="slider--mobile progressbar-mobile" data-reactid="307">
                    <div data-reactid="308"></div>
                  </div>
                </div>
              </div>
              <div class="item " data-reactid="309">
                <div class="wrap" role="button" tabindex="2" data-label="Internet Oi Fibra" data-slide="1" data-reactid="310"></div>
              </div>
              <div class="item " data-reactid="311">
                <div class="wrap" role="button" tabindex="3" data-label="Pós-pago" data-slide="2" data-reactid="312"></div>
              </div>
            </div>
            <div class="item " data-reactid="313">
              <div class="wrap" role="button" tabindex="4" data-label="Whatsapp da Oi" data-slide="3" data-reactid="314"></div>
            </div>
            <div class="item " data-reactid="315">
              <div class="wrap" role="button" tabindex="5" data-label="Pré-pago" data-slide="4" data-reactid="316"></div>
            </div>
            <div role="button" tabindex="6" class="item arrow" data-reactid="317">
              <span class="arrow--icon right" data-reactid="318">
              <Img src="" width="" height="" alt="Icone seta SVG" title="Icone seta SVG" class="" modo={VarModo}></Img>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Index.propTypes = {title: PropTypes.string};
module.exports = Index;
*/