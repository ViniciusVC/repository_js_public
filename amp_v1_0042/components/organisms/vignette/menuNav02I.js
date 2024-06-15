// menu Nav padrão portal vignette
import React from 'react';

const menuNav02I = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02I.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <nav>
        <h3>
          <a  href="#">Simuladores</a>
        </h3>
        <ul>
          <li>
            <a  href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/planos/conheca-os-planos#simuladorBox" title="Fixo">Fixo</a>	   
          </li>
          <li>
            <a  href="/oi/vvc-pra-voce/31/simulador" title="Longa  Distância">Longa  Distância</a>	   
          </li>
        </ul>
    <style jsx>{`
    .a{
      width: 100%;
    }
`}</style>
</nav>
)};

export default menuNav02I
