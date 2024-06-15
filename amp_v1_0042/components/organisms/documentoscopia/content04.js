// content do Documentoscopia - Projeto Piloto
import React from 'react';
import ContentAbaA from './contentAbaA.js';
import ContentAbaB from './contentAbaB.js';
import ContentAbaC from './contentAbaC.js';
import ContentAbaD from './contentAbaD.js';

//console.log('Instanciou /componentes/organisms/documentoscopia/content04.js');

const content04 = props => {

  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  var passo = "1";
  if( props.query.passo!=undefined){passo=props.query.passo};

  if(passo=="2"){
    return(
    <ContentAbaB modo={modo} query={props.query}></ContentAbaB>
    )
  }else if(passo=="3"){
    return(
    <ContentAbaC modo={modo} query={props.query}></ContentAbaC>
    )
  }else if(passo=="4"){
    //Carregando
    return(
    <ContentAbaD modo={modo} query={props.query}></ContentAbaD>
    )
  }else{
    return(
      <ContentAbaA modo={modo} query={props.query}></ContentAbaA>    
     )
    }
};
export default content04