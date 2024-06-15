
// content do Documentoscopia - Projeto Piloto
import React from 'react';
import Img from '../../atoms/atImg/index.js';
import TextoDestaque from './atTextoDestaque.js';
import AtCampotexto from '../../atoms/atCampoTexto/index.js';
import BtSubmit from '../../atoms/atBtSubmit/index.js';
import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
import AtLabelCampo from './atLabelCampo.js';
import Div from '../../atoms/atDiv/index.js';
//import Link from 'next/link';
//import Form from '../../atoms/atForm.js';

//console.log('Instanciou /componentes/organisms/documentoscopia/contentAbaA.js');


// layout de Documentoscopia - Projeto Piloto

const contentAbaA = props => {
  var modo = "html";
  if(props.modo!=undefined){modo=props.modo};

  return(
    <div>
        <form action="/meusdocumentos/" method="get" id="formdocumentoscopia" name="formdocumentoscopia" encType="multipart/form-data" target="_top">
                  <h1>Oi! Falta pouco pra curtir seu novo produto.</h1>
                    <div className="cabecalhoB">
                    <div>
                      <Img
                      class="introductimg"
                      src="/static/assetsv5/img/documentoscopia/carteira-icone.jpg"
                      width="33px"
                      height="45px"
                      modo={modo} />
                    </div>
                    <div className="introducttext">
                      <p>É necessário incluir seus documentos pra comprovar seus dados pessoais.</p>
                    </div>
                  </div>
                  <div className="cabecalhoB">
                    <div>
                      <Img
                      class="introductimg"
                      src="/static/assetsv5/img/documentoscopia/foto-icone.jpg"
                      width="33px"
                      height="45px"
                      modo={modo} />
                    </div>
                    <div className="introducttext">
                      <p>Também precisaremos de uma foto sua (selfie).</p>
                    </div>
                  </div>
                    <TextoDestaque texto="Pra começar, preencha seu CPF:" />
                      <Div vardisplay="vertical">
                        <AtLabelCampo for="cpf" value="CPF"/>
                        <AtCampotexto type="number" id="cpf" name="cpf" placeholder="00000000000" size="11"/>
                      </Div>
                  <AtCampoInvisivel type="text" id="passo" name="passo" value="2"/>
                  <BtSubmit value="Avançar"/>
        </form>
        <style jsx>{`
          h1{
            font-family: 'Simplon-Headline';
            font-size: 32px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: normal;
            color: #303030;
          }
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
};

export default contentAbaA


/*font-family: SimplonBP;*/
/*
                  <div className="grupodecampos">                    
                    <label className="labelcampo" for="Nascimento">Data Nascimento</label><br/>
                    <AtCampotexto type="date" id="nascimento" name="nascimento" placeholder="dd/mm/aaaa"/>
                  </div>
*/

