// menu Nav padrão portal vignette
import React from 'react';

const menuNav02C = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02C.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
    <nav>
    <h3><a href="#">Combo</a></h3>
    <ul>
      <li>
        <a href="/oi/vvc-pra-voce/planos-servicos/combo/vvc-conta-total/planos/conheca-os-planos" title="Oi Conta Total">Oi Conta Total</a>
      </li>
      <li>
        <a href="/oi/vvc-pra-voce/planos-servicos/combo/internet-tv-fibra/planos" title="Internet + TV Fibra">Internet + TV Fibra</a>
      </li>
    </ul>
  
    <style jsx>{`
        .a{
          width: 100%;
        }
    `}</style>
  </nav>
)};

export default menuNav02C
