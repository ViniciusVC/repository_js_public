
import React from 'react';
import Alerta from './index.js';

export const moAlerta = (modo) => {
  
  function enviar(){
      document.getElementById("divAlertaErro").style.display = "block";
      document.getElementById("AlertaErroInf").innerHTML = "Mensagem";
  }

  return(
    <div>
      <h2>moAlerta</h2>
      <a onClick={() => {enviar()}}>Abra aqui</a>
      <Alerta modo={modo}/>      
       <p>
        Exemplo do componente.
        codigo: {'<a onClick={() => {enviar()}}>Abra aqui</a>'}<br/>
        codigo: {'<Alerta modo={modo}/>'}<br/>
        modo={modo}
      </p>
    </div>
)
};

export default moAlerta;
