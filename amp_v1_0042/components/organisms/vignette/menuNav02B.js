// menu Nav padrão portal vignette
import React from 'react';

const menuNav02B = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02B.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <div>
        <div>
          <nav>
            <h6>Mais:</h6>
            <ul>
              <li><a href="/oi/vvc-pra-voce/vvc-para-comprar"
                title="Oi Pra Comprar"
                target="_self"> Oi Pra Comprar </a></li>
              <li><a href="/oi/vvc-pra-voce/102"
                title="102"
                target="_self"> 102 </a></li>
              <li><a href="/oi/vvc-pra-voce/31"
                title="DDD DDI 31"
                target="_self"> DDD DDI 31 </a></li>
              <li><a href="/oi/vvc-pra-voce/planos-servicos/vvc-pontos"
                title="Oi Pontos"
                target="_self"> Oi Pontos </a></li>
              <li><a href="/oi/vvc-pra-voce/planos-servicos/vvc-pre-paid-kit"
                title="Visitor"
                target="_self"> Visitor </a></li>
            </ul>
          </nav>
        </div>
    <style jsx>{`
        .a{
          width: 100%;
        }
    `}</style>
  </div>
)};

export default menuNav02B

