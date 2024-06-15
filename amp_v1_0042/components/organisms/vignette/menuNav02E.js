// menu Nav padrão portal vignette
import React from 'react';

const menuNav02E = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02E.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
<nav>
  <h3><a  href="#">Internet</a></h3>
  <ul>
    <li>
      <a  href="/oi/vvc-pra-voce/planos-servicos/internet/internet-pra-casa/vvc-velox-banda-larga" title="Internet pra Casa">Internet pra Casa</a>	   
    </li>
    <li>
      <a  href="/oi/vvc-pra-voce/planos-servicos/internet/internet-movel" title="Internet Móvel">Internet Móvel</a>	   
    </li>
    <li>
       <a  href="/oi/vvc-pra-voce/planos-servicos/internet/internet-movel/vvc-4g" title="4G">4G</a>	   
    </li>
    <li>
       <a  href="/oi/vvc-pra-voce/planos-servicos/internet/servicos/rede-vvc-wifi" title="Oi WiFi">Oi WiFi</a>	   
    </li>
    <li>
       <a  href="/oi/vvc-pra-voce/planos-servicos/acompanhe-seu-pedido" title="Acompanhe seu Pedido">Acompanhe seu Pedido</a>	   
    </li>
    <li>
      <a  href="/oi/vvc-pra-voce/planos-servicos/internet/servicos" title="Serviços pra sua Internet">Serviços pra sua Internet</a>	   
    </li>
    <li>
      <a  href="/oi/vvc-pra-voce/planos-servicos/cobertura" title="Consulta de Cobertura">Consulta de Cobertura</a>	   
    </li>
  </ul>

    <style jsx>{`
    .a{
      width: 100%;
    }
`}</style>
</nav>
)};

export default menuNav02E