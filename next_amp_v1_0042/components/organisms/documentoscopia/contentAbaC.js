// layout de Documentoscopia - Projeto Piloto
import React from 'react';
import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
import Alerta from '../../moleculas/moAlerta.js'
import TextoDestaque from './atTextoDestaque.js';
import AtCampotexto from '../../atoms/atCampoTexto/index.js';
import BtSubmit from '../../atoms/atBtSubmit/index.js';
import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
import Captcha from '../../moleculas/moCaptcha.js';
import ContentCamposDoc from './contentCamposDoc.js'
import AtLabelCampo from './atLabelCampo.js';
//import Compress from 'compress.js';

//console.log('Instanciando /componentes/organisms/documentoscopia/ContentAbaC.js');

const ContentAbaC = props => {
  //console.log('Rodando /componentes/organisms/documentoscopia/ContentAbaC.js');
  //console.log(props.query);

  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};

  var camposValidados = true;
  var MenssagemValida = " campos";

  var cpf = "000000";
  if(props.query.cpf!=undefined){
    cpf=props.query.cpf;
  }else{
    camposValidados = false;
    MenssagemValida += ", CPF";
  };

  var tipoDocumento = "Outros";
   if(props.query.tipoDocumento!=undefined && props.query.tipoDocumento!=""){
    tipoDocumento=props.query.tipoDocumento;
   }else{
     camposValidados = false;
     MenssagemValida += ", tipo de documento ";
  };

  function enviar(){
    //const compress = new Compress()

     document.getElementById("divAlertaErro").style.display = "block";
     document.getElementById("AlertaErroInf").innerHTML = "Preparando para enviar...";
     

      var mensagemFinal = "";
      //mensagemFinal += validaImagens(nomeDasImagens);
      mensagemFinal += validaCampos();
      console.log(document.getElementById('formdocumentoscopia'))

      if (mensagemFinal==""){
        if(tipoDocumento=="identidade"){
          document.getElementById('Selfie').disabled = "true";
          document.getElementById('imgdoc2').disabled = "true";
          document.getElementById('imgdoc3').disabled = "true";
          document.getElementById('imgdoc4').disabled = "true";
        }else{
            document.getElementById('Selfie').disabled = "true";
            document.getElementById('imgdoc2').disabled = "true";
        }
        document.getElementById('formdocumentoscopia').submit()
      }else{
        //alert(mensagem);
        document.getElementById("AlertaErroInf").innerHTML = mensagemFinal;
      }
    //})
  }

  // function validaImagens(nomeDasImagens){
  //   var tamanhoTotal = 0;
  //   //for(var i = 0; i < tamanhoTotal.length; i++){
  //     tamanhoTotal += tamanhosImg(nomeDasImagens[0]);
  //     tamanhoTotal += tamanhosImg(nomeDasImagens[1]);
  //     tamanhoTotal += tamanhosImg(nomeDasImagens[2]);
  //     tamanhoTotal += tamanhosImg(nomeDasImagens[3]);
  //   //}
  //   //if(tamanhoTotal>3900000){
  //   if(tamanhoTotal>15900000){
  //     var TotalMB =  Math.trunc(tamanhoTotal/1000000);
  //     if(TotalMB<5){
  //       TotalMB=5;
  //     }
  //     //var nota = "<br/>Selfie=" + tamanhosImg('Selfie') + "<br/>imgdoc2=" + tamanhosImg('imgdoc2') + "<br/>imgdoc3=" + tamanhosImg('imgdoc3')+" <br/>imgdoc4=" + tamanhosImg('imgdoc4');
  //     //nota = nota + "<br/>tamanhoTotal=" + tamanhoTotal + "<br/>arredondado=" + TotalMB
  //     return "Tamanho total das imagens não pode ser maior que 4 Megabytes. <br/>O peso atual das imagens está em " + TotalMB + " Megabytes.<br/>";
  //   }else{
  //     //"Tamanho total das imagens está ok. O peso atual das imagens está em " + TotalMB + " Megabytes."
  //     return "";
  //   }
  // }

  function tamanhosImg(idimg){
    if(document.getElementById(idimg)!=undefined){
      if(document.getElementById(idimg).value!=""){

        return document.getElementById(idimg).files[0].size
      }else{
        return 0
      }
    }else{
      return 0
    }
  }

  function campObrigatorio(idcampo, nomeCampo){
    if(document.getElementById(idcampo)!=undefined){
      if(document.getElementById(idcampo).value==""){
        return "Campo " + nomeCampo + " é obrigatório.<br/><br/>";
      }else{
        return "";
      }
    }else{
      return "";
    }
  }

  function validaCampos(){
    var mensagemC = "";
    mensagemC += campObrigatorio('Selfie', 'Selfie (Sua foto)');
    mensagemC += campObrigatorio('imgdoc2', 'Frente do Documento');
    mensagemC += campObrigatorio('imgdoc3','Foto Verso' );
    mensagemC += campObrigatorio('imgdoc4', 'Foto CPF');
    mensagemC += campObrigatorio('codigo', 'Codigo de Verificação');
    return mensagemC;
  }
    
  if(camposValidados){
  return(
  <div>
    <form action="/api1/meusdocumentos/" method="post" id="formdocumentoscopia" name="formdocumentoscopia" encType="multipart/form-data">

    <TextoDestaque texto="Selfie ( Foto da câmera ou álbum )" />
    <AtLabelCampo for="imgdoc2" value="Foto de rosto"/>
    <EnviaArquivo
      id="Selfie"
      name="Selfie"
      value="Frente de documento"
      img="../static/assetsv5/img/documentoscopia/foto.jpg"
      modo={modo}/>
    <TextoDestaque texto="Agora é só adicionar os documentos abaixo:" />
    <ContentCamposDoc tipoDocumento={tipoDocumento} modo={modo} />
    <AtLabelCampo for="imgdoc4" value="Envie fotos legiveis dos seus documentos. O peso total das imagens não deve ultrapassar 4 MB."/>
    <TextoDestaque texto="Digite o código abaixo" />
    
    <div className="grupodecampos">
      <Captcha modo={modo} sessao={cpf}/>
      <AtCampotexto type="text" id="codigo" name="codigo" autocomplete="off" placeholder="Texto de verificação"/>
    </div>
    <span id="erro"></span>
    <a onClick={() => {enviar()}} className="btLinklaranja">Enviar</a>
    <AtCampoInvisivel type="text" id="cpf" name="cpf" value={cpf}/>
    <AtCampoInvisivel type="text" id="tipoDocumento" name="tipoDocumento" value={tipoDocumento}/>
    <AtCampoInvisivel type="text" id="passo" name="passo" value="4"/>
    </form>
    <Alerta modo={modo}/>
    <style jsx>{`
        .btLinklaranja {
          font-family: oiTextRegular, sans-serif;
          background-color: #f8562c;
          background-image: linear-gradient(260deg, #fb851c, #f8562c); 
          border-radius:6px;
          color: #ffffff;
          display: block;
          font-size: 16px;
          height: 3.2rem;
          text-align: center;
          width: 280px;
          text-decoration: none;
          border-bottom: solid 1px #dbdbdb;
          cursor: pointer;
          outline: 0;
          margin: 0;
          margin: 10px;
          padding: 1.2rem ;
          box-sizing: border-box;
          font-style: normal;
          transition-duration: 1s;
        }
        .btLinklaranja:hover{
          transition-duration: 1s;
          color: #f8562c;
          border: solid 1px #fb851c;
          background-color: #ffffff;
          background-image: none;
        }
    `}</style>
  </div>
    )
  }else{
    return(
      <form action="/meusdocumentos/" method="get" id="formdocumentoscopia" name="formdocumentoscopia" encType="multipart/form-data">
        <TextoDestaque texto={"Volte a etapa anterior e preencha o "+MenssagemValida+" , corretamente."} />
        <AtCampoInvisivel type="text" id="cpf" name="cpf" value={cpf}/>
        <AtCampoInvisivel type="text" id="tipoDocumento" name="tipoDocumento" value={tipoDocumento}/>
        <AtCampoInvisivel type="text" id="passo" name="passo" value="1"/>
        <BtSubmit value="Voltar"/>
      </form>
    )
  }
}

export default ContentAbaC


  
