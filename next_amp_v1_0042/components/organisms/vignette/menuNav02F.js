// menu Nav padrão portal vignette
import React from 'react';

const menuNav02F = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02F.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <nav>
        <h3>
          <a href="#">Fixo</a>
        </h3>
        <ul>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/planos/conheca-os-planos" title="Conheça os Planos">Conheça os Planos</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/servicos-pro-seu-vvc-fixo" title="Serviços pro seu Oi Fixo">Serviços pro seu Oi Fixo</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-fixo/servicos/orelhao" title="Orelhão">Orelhão</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido" title="Acompanhe seu pedido">Acompanhe seu pedido</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/31" title="DDD e DDI 31">DDD e DDI 31</a>
          </li>
        </ul>
     <style jsx>{`
    .a{
      width: 100%;
    }
`}</style>
</nav>
)};

export default menuNav02F
