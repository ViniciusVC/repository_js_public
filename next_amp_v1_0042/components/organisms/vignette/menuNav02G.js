// menu Nav padrão portal vignette
import React from 'react';

const menuNav02G = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02G.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <nav>
        <h3>
          <a href="#">Móvel</a>
        </h3>
        <ul>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/planos#planos-vvc-conta" title="Móvel Pós-Pago">Móvel Pós-Pago</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/planos/vvc-cartao" title="Móvel Pré-Pago">Móvel Pré-Pago</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/planos/vvc-controle" title="Móvel Controle">Móvel Controle</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/vvc-galera" title="Oi Galera">Oi Galera</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/recarga" title="Recarga">Recarga</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/servicos/servicos-vvc-cartao/" title="Serviços pro seu Móvel">Serviços pro seu Móvel</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/aparelhos/conheca-os-aparelhos" title="Aparelhos">Aparelhos</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/cobertura" title="Consulta de Cobertura">Consulta de Cobertura</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido" title="Acompanhe seu Pedido">Acompanhe seu Pedido</a>
          </li>
          <li>
            <a href="/oi/vvc-pra-voce/planos-servicos/vvc-movel/servicos/servicos-pro-seu-vvc-movel/roaming-internacional/" title="Roaming Internacional">Roaming Internacional</a>
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

export default menuNav02G