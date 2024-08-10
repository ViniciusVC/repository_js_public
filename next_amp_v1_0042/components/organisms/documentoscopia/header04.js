

// header do Documentoscopia  - Projeto Piloto
import React from 'react';
import Img from '../../atoms/atImg/index.js';

//console.log('Instanciando /componentes/organisms/documentoscopia/header04.js');

const header04 = props => (
  <header>
    <div className="cabecalho">
      <div className="logooi">
        <Img
          src="/static/assetsv5/img/documentoscopia/Controle-logo.svg"
          width="40px"
          height="43px"
          alt="Logo Oi"
          title="Logo Oi"
          modo={props.modo}>
        </Img>
      </div>
      {/* <div className="ajuda">
        <a href="/documentoscopia/ajudadocumentos">
          <Img src="../static/assetsv5/img/documentoscopia/btn-Ajuda.png"
            width='20px'
            height='20px'
            alt='Ajuda'
            title='Ajuda'
            modo={props.modo}>
          </Img>
        </a>
      </div> */}
    </div>
    <style jsx>{`
      .cabecalho{
        padding-top: 10px;
        margin: 0;
        padding: 0;
        width: 96%;
        display: flex;
        flex-wrap: wrap;
      }
      .logooi{
        transition: all 0.8s;
        margin: 0;
        padding: 0;
        width:50%;
        height: 50px;
        animation: abreJanela 1s ease 0s 1 normal none running;
      }
      @keyframes abreJanela{
        0% {
          padding-left: 50px;
          opacity: 0;
        }
        100% {
          padding-left: 0px;
          opacity: 1;
        }
      }
    `}</style>
  </header>
)

export default header04


/*
// header do Documentoscopia - Projeto Piloto
import React, { Component } from 'react';
import Img from '../../atoms/Imagem.js';
var varmodo = 'html';
class header04 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/header04.jsx');
    return (
      <header>
        <div className="cabecalho">
          <div className="logooi">
            <Img
             src="../assetsv5/img/documentoscopia/logo-laranja.jpg"
             width={'32px'}
             height={'35px'}
             alt={'Logo Oi'}
             title={'Documentoscopia'}
             modo={varmodo}>
            </Img>
          </div>
          <div className="ajuda">
            <a>
              <Img src="../assetsv5/img/documentoscopia/btn-Ajuda.png"
                width={'20px'}
                height={'20px'}
                alt={'Ajuda'}
                title={'Ajuda'}
                modo={varmodo}>
              </Img>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
module.exports = header04;
*/