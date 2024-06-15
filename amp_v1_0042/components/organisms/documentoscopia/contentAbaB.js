// content do Documentoscopia - Projeto Piloto
import React from 'react';
//import BtLink from '../../atoms/atBtLink/index.js';
import TextoDestaque from './atTextoDestaque.js';
import BtSubmit from '../../atoms/atBtSubmit/index.js';
import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
import EscolhaDoc from '../../moleculas/moEscolhaDoc.js';


function soNumero(str) {
  str = str.toString();
  //return str.replace(/\D/g, ”);
  return str.replace(/[^0-9]/g,'');
}

function ValidaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "") return false;
  if (strCPF == "00000000000") return false;
  var i;
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}

//import Img from '../../atoms/Imagem.js';
// console.log('Instanciando /componentes/organisms/documentoscopia/ContentAbaB.js');

const ContentAbaB = props => {
  // var modo = "html";
  // if(props.modo!=undefined){modo=props.modo};
  
  //var camposValidados = true;
  //var MenssagemValida = " campos";

  var cpf = "";
  if(props.query.cpf!=undefined){cpf=soNumero(props.query.cpf)};
  //if(cpf!=""){
  //  camposValidados = false;
  //};
  
  // var nascimento = "01-01-2000";
  // if(props.query.nascimento!=undefined && props.query.nascimento!=""){
  //   nascimento=props.query.nascimento;
  // }else{
  //   camposValidados = false;
  //   MenssagemValida += ", data de nascimento ";
  // };

  if(ValidaCPF(cpf)){
      return(
      <div>
         <h1>QUAL DOCUMENTO QUE VOCÊ QUER ENVIAR?</h1>
         <h2>Escolha uma das três opções. Prefira uma que tenha o seu CPF.</h2> 
         <div className="divTipoDocumento">
         <EscolhaDoc href={"?cpf="+cpf+"&tipoDocumento=identidade&passo=3"} value="Carteira de identidade (RG)" nota="Selfie e Documento Frente e verso"/>
         </div>
         <div className="divTipoDocumento">
         <EscolhaDoc href={"?cpf="+cpf+"&tipoDocumento=cnh&passo=3"} value="Carteira de Habilitação (CNH)" nota="Selfie/ Aberta/ Frente"/>
         </div>
         <div className="divTipoDocumento">
         <EscolhaDoc href={"?cpf="+cpf+"&tipoDocumento=outros&passo=3"} value="Outros (OAB, Passaporte e etc)" nota="Selfie/ Aberta/ Frente"/>
         </div>
    <style jsx>{`
      h1{
        font-family: Simplon-Headline;
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #f96132;
      }
      h2{
        font-family: SimplonBP-Regular;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: #000000;
      }
      .divTipoDocumento{
        width: 100%;
        margin-top: 18px;
      }
      `}</style>
    </div>
  )
  }else{
    return(
      <form action="/meusdocumentos/" method="get" id="formdocumentoscopia" name="formdocumentoscopia" encType="multipart/form-data">
        <TextoDestaque texto="Volte a etapa anterior e preencha o campo CPF corretamente." />
        <AtCampoInvisivel type="text" id="cpf" name="cpf" value={cpf}/>
        <AtCampoInvisivel type="text" id="passo" name="passo" value="1"/>
        <BtSubmit value="Voltar"/>
      </form>
    )

  }
}
export default ContentAbaB

//<AtCampoInvisivel type="text" id="nascimento" name="nascimento" value={nascimento}/>
/*         <div className="grupodecampos">
            <ul type="1" className="radio_ul">

              <li className="radio_li">
                <input className="radio_style" type="radio" name="identidade" id="identidade"/>
                <label for="identidade" className="radio_label">
                  <img className="imgradio" id="imgidentidade" src="../assetsv5/img/documentoscopia/radio.jpg" />
                  Carteira de identidade e CPF
                </label>
              </li>
              <li className="radio_li">
                <input className="radio_style" type="radio" name="cnh" id="cnh"/>
                <label for="cnh" className="radio_label">
                  <img className="imgradio" id="imgcnh" src="../assetsv5/img/documentoscopia/radio.jpg" />
                  Carteira Habilitação(CNH)
                </label>
              </li>
              <li className="radio_li">
                <input className="radio_style" type="radio" name="outros" id="outros"/>
                <label for="outros" className="radio_label">
                  <img className="imgradio" id="imgoutros" src="../assetsv5/img/documentoscopia/radio.jpg"/>
                  Outros(Passaporte e etc)
                </label>
              </li>
            </ul>
        </div>
        <AtCampoInvisivel type="text" id="cpf" name="cpf" value={cpf}/>
        <AtCampoInvisivel type="text" id="passo" name="passo" value="3"/>
        <BtSubmit value="Avançar"/>
*/