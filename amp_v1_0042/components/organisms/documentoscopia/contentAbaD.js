
// content do Documentoscopia - Projeto Piloto
import React from 'react';
import Img from '../../atoms/atImg/index.js';
// import TextoDestaque from './atTextoDestaque.js';
// import AtCampotexto from '../../atoms/atCampotexto.js';
// import BtSubmit from '../../atoms/atBtSubmit.js';
// import AtCampoInvisivel from './atCampoInvisivel.js';
// import AtLabelCampo from './atLabelCampo.js';
// import Div from '../../atoms/atDiv.js';


// Tentando resolver o ERRO de FS
 import cache from 'memory-cache'; // Instanciar o memory-cache (Variavel global)

// console.log('Instanciou /componentes/organisms/documentoscopia/contentAbaA.js');

// layout de Documentoscopia - Projeto Piloto
const contentAbaD = props => {
  

  
  // window.onload = function(){	iniciarCronometro() }
  // function iniciarCronometro() {
	// 	control = setInterval(cronometro,10);
  // } 

  var segundos = 0;
  
  // function iniciarCronometro(){
  //   var control = setInterval(cronometro,10);
  // } 

  function iniciarCronometro() {
	 	var control = setInterval(() => {		segundos ++;
       if (segundos > 1000) { segundos = 0 }
       document.getElementById("tempo").innerHTML  = segundos;
     },10);
  } 


  // function cronometro() {
	//  	segundos ++;
  //    if (segundos > 1000) { segundos = 0 }
  //    document.getElementById("tempo").innerHTML  = segundos;
  // }
  
  var modo = "html";
  if(props.modo!=undefined){modo=props.modo};
  var varSession = "";
  if(props.query.session!=undefined){varSession=props.query.session};
    var cod=cache.get(varSession); // variavel global
    var imgIcone="/static/assetsv5/img/documentoscopia/carregando.png";
    var vartitulo="Enviando..."
    var vartexto="Enviando seus dados. Aguarde.("+cod+")";

  if(varSession==""){
    imgIcone="/static/assetsv5/img/documentoscopia/erro_ico.png";
    vartitulo="Sessão expirou!"
    vartexto="Sua sessão expirou. Volte ao inicio do formulário." 
  }else if(cod=="2"){
    imgIcone="/static/assetsv5/img/documentoscopia/erro_ico.png";
    vartitulo="Erro!"
    vartexto="Houve um problema no envio dos dados. Volte ao inicio do formulário."
  }else if (cod=="1"){
    imgIcone="/static/assetsv5/img/documentoscopia/carregando.png";
    vartitulo="Enviando..."
    vartexto="Enviando seus dados. Aguarde."
  }else if (cod=="3"){
    imgIcone="/static/assetsv5/img/documentoscopia/v.jpg";
    vartitulo="Documentos enviados."
    vartexto="Obrigado por se cadastrar."
  }

    //setTimeout("location.reload(true);", 3000);
  
  return(
      <div>
        <center>
          <Img
            class="introductimg"
            src={imgIcone}
            width="45px"
            height="45px"
            modo={modo} />
          <h1>{vartitulo}</h1>
          <p>{vartexto}</p>
          <a onClick={()=>{setTimeout(function(){ location.reload(); }, 1000);}}>click para recarregar</a><br/>
          <a onLoad={()=>{setTimeout(function(){ location.reload(); }, 1000);}}>recarregar em 1000ms</a><br/>
          <a onClick={()=>{var control=setInterval(()=>{segundos++;if(segundos>1000){segundos=0;}document.getElementById("tempo").innerHTML=segundos;},1000);}}>iniciar contagem</a>
          <div id="tempo" onLoad={()=>{var control=setInterval(()=>{segundos++;if(segundos>1000){segundos=0;}document.getElementById("tempo").innerHTML=segundos;},10);}}>00</div>
        </center>
        {/* {setTimeout(location.reload(true),3000)} */}
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
      `}</style>
    </div>
    )
};

export default contentAbaD
