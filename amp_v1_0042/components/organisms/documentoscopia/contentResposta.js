// content do Documentoscopia - Projeto Piloto
import React from 'react';
import * as Util from '../../../controller/util.js';

//console.log('Instanciou /componentes/organisms/documentoscopia/contentEmail.js');
const contentResposta = props => {
    var cod = Util.validaProps(props.cod,"");
    var titulo = "TUDO CERTO!";
    var texto = "Seus documentos foram enviados com sucesso.";
    var imagen = "/static/assetsv5/img/documentoscopia/iconok.png";
    if(cod!=""){
      titulo = "Ops!";
      texto = "Houve um problema no envio dos arquivos.";
      imagen = "/static/assetsv5/img/documentoscopia/erro_ico.png";
    }
    return(
    <center>
      <div class="div">
        <img src={imagen} width="45px" height="45px" />
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <p>{cod}</p>
      </div>
    <style jsx>{`
      @font-face {
        font-family: 'SimplonBP-Regular';
        src: url('https://www.vvc.com.br/publicV2/fonts/simplonbp-regular-webfont.woff');
      } 
      @font-face {
        font-family: 'Simplon-Headline';
        src: url('https://www.vvc.com.br/publicV2/fonts/simplonvvc-headline-webfont.woff');
      }
      h1{
        font-family: Simplon-Headline;
        font-size: 26px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #f8562c;
      }
      p{
        font-family: SimplonBP-Regular;
        font-size: 22px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }
      div{
        margin:10px;
        margin-top:50px;
      }
      .geral{
        margin: 10px;
        width: 100%; 
      }
      body{
        margin: 0px;
        padding: 0px;
        background-color: #ffffff;
      }     
    `}</style>
    </center>
    )
};

export default contentResposta
