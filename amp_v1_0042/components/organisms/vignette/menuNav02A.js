// menu Nav padrão portal vignette
import React from 'react';


const menuNav02A = props => {
  var modo = "html";
  if( props.modo!=undefined){modo=props.modo};
  console.log('Rodando /views/organisms/menuNav02A.jsx - layout Portal Oi VIGNETTE. modo:'+modo);
  return(
      <div>
        <div>
          <nav>
            <ul>
              <li className="active">
                <a href="/oi/vvc-pra-voce" title="Oi Pra Você">Oi Pra Você</a>
              </li>
              <li className="">
                <a href="/oi/vvc-pra-empresas" title="Oi pra Empresas">Oi pra Empresas</a>
              </li>
              <li className="">
                <a href="/oi/sobre-a-oi" title="Sobre a Oi">Sobre a Oi</a>
              </li>
              <li className="">
                <a href="http://ri.vvcestudio.com.br" title="Investidores | Investors">Investidores | Investors</a>
              </li>
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

export default menuNav02A

/*
var React = require('react');


class menuNav02A extends React.Component {
  render() {
    console.log('Rodando /views/organisms/menuNav02A.jsx - layout Portal Oi VIGNETTE');
    return (
      <div>
        <div>
          <nav>
            <ul>
              <li class="active">
                <a href="/oi/vvc-pra-voce" title="Oi Pra Você">Oi Pra Você</a>
              </li>
              <li class="">
                <a href="/oi/vvc-pra-empresas" title="Oi pra Empresas">Oi pra Empresas</a>
              </li>
              <li class="">
                <a href="/oi/sobre-a-oi" title="Sobre a Oi">Sobre a Oi</a>
              </li>
              <li class="">
                <a href="http://ri.vvcestudio.com.br" title="Investidores | Investors">Investidores | Investors</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}


module.exports = v;
*/