// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import TextoDestaque from './atTextoDestaque.js';
//import BtSubmit from '../../atoms/atBtSubmit/index.js';
import Img from '../../atoms/atImg/index.js';
import BtLink from '../../atoms/atBtLink/index.js'

//console.log('Instanciando /componentes/organisms/documentoscopia/contentajuda04.js');
const ajuda04 = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  var ajuda = "selfie";
  if( props.ajuda!=undefined){ajuda=props.ajuda};

  if(ajuda=="selfie"){
    return(
      <div>
        <div className="cabecalhoB">
          <div>
            <Img
              class="introductimg"
              src="/static/assetsv5/img/documentoscopia/foto-icone.jpg"
              width="66px"
              height="90px"
              modo={modo}>
            </Img>
          </div>
          <div className="introducttext">
            <TextoDestaque texto="pra cadastrar seus documentos" />
            <TextoDestaque texto="Siga as dicas pra enviar e ser aprovado mais rápido." />
          </div>
        </div>
        <ul>
        <li>1 O documento precisa aparecer inteiro</li>
        <li>2 Procure locais com muita luz</li>
        <li>3 Evite reflexo e sombras no documento</li>
        <li>4 Evite fundo estampados</li>
        </ul>
        <BtLink href="/meusdocumentos/" value="Voltar" estilo="laranja"/>
        <style jsx>{`
          .cabecalhoB{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
          .introducttext {
            width: 75%;
            height: 76px;
            margin-left: 15px;
            /*font-family: SimplonBP;*/
            font-family: SimplonBP-Regular;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #909090;
          }
        `}</style>
      </div>
      
    )
  }else{
    return(
      <div>
        <div className="cabecalhoB">
          <div>
                      <Img
                      class="introductimg"
                      src="/static/assetsv5/img/documentoscopia/carteira-icone.jpg"
                      width="66px"
                      height="90px"
                      modo={modo}>
                      </Img>
          </div>
          <div className="introducttext">
            <TextoDestaque texto="pra cadastrar seus documentos" />
            <TextoDestaque texto="Siga as dicas pra enviar e ser aprovado mais rápido." />
          </div>
        </div>
        <ul>
        <li>1 O documento precisa aparecer inteiro</li>
        <li>2 Procure locais com muita luz</li>
        <li>3 Evite reflexo e sombras no documento</li>
        <li>4 Evite fundo estampados</li>
        </ul>
        <BtLink href="/meusdocumentos/" value="Voltar" estilo="laranja"/>
        <style jsx>{`
            .cabecalhoB{
              width: 100%;
              display: flex;
              flex-wrap: wrap;
            }
            .introducttext {
              width: 75%;
              height: 76px;
              margin-left: 15px;
              font-family: SimplonBP-Regular;
              font-size: 16px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: 1.5;
              letter-spacing: normal;
              color: #909090;
            }
          `}</style>
      </div>
     )
    }
};
export default ajuda04