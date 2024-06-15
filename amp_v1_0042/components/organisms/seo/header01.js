
import React from 'react'

import Nav01 from './Nav01';
import Acessibilidade01 from './Acessibilidade01';
import Mediumup01 from './Mediumup01';


//import Recaptcha from '../components/organisms/seo/Header01'

const Header01 = function(props){
  var cidade = "Rio de Janeiro";
  if(props.cidade!=undefined){
    cidade = props.cidade;
  }
  console.log('Rodando /views/organisms/Header01.jsx');
  return(
    <header>
          
    <div class="alert">
      <span>Informações sobre a <a class="hovered" data-context="" href="http://www.recjud.com.br/default_pt.asp?idioma=0&amp;conta=28">recuperação judicial da vvc.</a>
      </span>
    </div>

    <div class="containerMenuWrapper">
      <div class="containerMenu">
        <section class="hero">
          <h2 class="hidden">User</h2>
          <div class="container">
            <div class="profile">
              
              <div class="profile-wrapper">

                <Mediumup01></Mediumup01>
                <Acessibilidade01></Acessibilidade01>

              </div>
            
            <div class="region-info">



              <div>
                <h3 class="hidden">Regionalization</h3>
                  <a class="regionName" data-context="">
                  <span>cidade={cidade}</span></a>
              </div>


              <div class="fastBuy">
                <div class="small-only">
                  <div class="Modal__wrapper ">
                    <a class="small-only assine yellow" data-context="">
                      <span>Assine Já</span>
                    </a>
                  </div>
                </div>
                <div class="medium-up">
                  <a class="assine yellow" data-context="" href="#">Assine Já</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        </section>
        <div class="ctaMenuComp container"></div>
          <Nav01></Nav01>
        </div>
      </div>
    <style jsx>{`
      .alert a{
        border-bottom:.05rem solid rgba(34,34,34,.3);
        padding-bottom:.05rem; color:rgba(34,34,34,.9)
       }   
      .alert a:hover{
        border-bottom-color:rgba(143,37,229,.55)  
      }
      .hovered .containerMenuWrapper{
        position:relative
      }
      .hovered .containerMenuWrapper .containerMenu{
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:11
      } 
    `}</style>
 </header>
)}

export default Header01

/*

// header da HOME

var React = require('react');
//var PropTypes = require('prop-types');
var Nav01 = require('./Nav01');
var Acessibilidade01 = require('./Acessibilidade01')
var Mediumup01 = require('./Mediumup01')

class Header01 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Header01.jsx');
    return (
      <header>
          
          <div class="alert">
            <span>Informações sobre a <a class="hovered" data-context="" href="http://www.recjud.com.br/default_pt.asp?idioma=0&amp;conta=28">recuperação judicial da vvc.</a>
            </span>
          </div>

          <div class="containerMenuWrapper">
            <div class="containerMenu">
              <section class="hero">
                <h2 class="hidden">User</h2>
                <div class="container">
                  <div class="profile">
                    
                    <div class="profile-wrapper">

                      <Mediumup01></Mediumup01>
                      <Acessibilidade01></Acessibilidade01>

                    </div>
                  
                  <div class="region-info">
                    <h3 class="hidden">Regionalization</h3>
                    <div><a class="regionName" data-context="">
                      <span></span></a>
                    </div>
                    <div class="fastBuy">
                      <div class="small-only">
                        <div class="Modal__wrapper ">
                          <a class="small-only assine yellow" data-context="">
                            <span>Assine Já</span>
                          </a>
                        </div>
                      </div>
                      <div class="medium-up">
                        <a class="assine yellow" data-context="" href="#">Assine Já</a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              </section>
              
              <div class="ctaMenuComp container"></div>

                <Nav01></Nav01>

              </div>
            </div>
          </header>
    );
  }
}
module.exports = Header01;
*/