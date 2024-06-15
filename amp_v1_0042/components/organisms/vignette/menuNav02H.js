// menu Nav padrão portal vignette
import React from 'react';

const menuNav02H = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02H.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <nav>
      <h3>
        <a  href="#">Peça Já</a>
      </h3>
      <ul>
        <li>
          <a  href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/aparelhos/conheca-os-aparelhos" title="Aparelhos">Aparelhos</a>	   
        </li>
        <li>
          <a  href="/oi/vvc-pra-voce/planos-servicos/vvc-tv/planos" title="TV">TV</a>	   
        </li>
        <li>
          <a  href="/oi/vvc-pra-voce/planos-servicos/internet/internet-pra-casa/vvc-velox-banda-larga" title="Internet Pra Casa">Internet Pra Casa</a>	   
        </li>
        <li>
          <a  href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/planos/conheca-os-planos" title="Fixo">Fixo</a>	   
        </li>
        <li>
          <a  href="/oi/vvc-pra-voce/planos-servicos/combo/internet-tv-fibra/planos" title="Internet + TV Fibra">Internet + TV Fibra</a>	   
        </li>
      </ul>
    <style jsx>{`
    .a{
      width: 100%;
    }
`}</style>
</nav>
)};

export default menuNav02H