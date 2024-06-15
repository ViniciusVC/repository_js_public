//Component atomo Price.js

import React from 'react'

function verificaValor(X,Y){
  if (X!=undefined){
    return X
  }else{
    return Y
  }
}

const bodyGTM = props => {
  //var codGTM = 'GTM-K89BB78';
  //var codGTM = 'GTM-KR9G4JB';
  //console.log('Rodando /componentes/atoms/atGTM/index.js');
  var codGTM = verificaValor(props.codGTM, 'GTM-K89BB78');
  var varSRC="https://www.googletagmanager.com/ns.html?id="+codGTM;
  //<!-- Google Tag Manager body (noscript) -->
  return(
          <iframe
            src={varSRC}
            height="0" 
            width="0">
          </iframe>
  )
}

export default bodyGTM

// BODY

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K89BB78"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR9G4JB"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->