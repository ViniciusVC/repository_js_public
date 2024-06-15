
// O Mediumup01 é usado no header da HOME - layout do Portal Oi SEO.
import React from 'react'

//import Recaptcha from '../components/organisms/seo/Mediumup01'

const Mediumup01 = function(props){
  console.log('Rodando views/Mediumup01.jsx');
  return(
      <ul class="medium-up">
        <li>
            <a className="active Mediumup01" href="https://www.vvc.com.br/">Você</a>
        </li>
        <li>
            <a className="false Mediumup01" href="https://www.vvc.com.br/empresas/">Empresas</a>
        </li>
        <li>
            <a className="false Mediumup01" href="https://www.vvc.com.br/lp/franquias/">Franquias</a>
        </li>
        <li>
            <a classname="false Mediumup01" href="https://www.vvc.com.br/ri/">Investidores</a>
        </li>
        <li class="pipe">
        </li>
    <style jsx>{`
      .Mediumup01{
        border-bottom:.05rem solid rgba(34,34,34,.3);
        padding-bottom:.05rem; color:rgba(34,34,34,.9)
       }   
    `}</style>
 </ul>
)}

export default Mediumup01

/*

// O Mediumup01 é usado no header da HOME.

var React = require('react');
var PropTypes = require('prop-types');


var JsonRoterHome = [
  {"Link":"https://www.vvc.com.br/",
  "label":"Você"},
  {"Link":"https://www.vvc.com.br/empresas/",
  "label":"Empresas"},
  {"Link":"https://www.vvc.com.br/lp/franquias/",
  "label":"Franquias"},
  {"Link":"https://www.vvc.com.br/ri/",
  "label":"Investidores"}
  ];


class Mediumup01 extends React.Component {
  render() {
    console.log('Rodando views/Mediumup01.jsx');
    return (
          <ul class="medium-up">
                  <li>
                      <a class="active" data-context="" href="https://www.vvc.com.br/">Você</a>
                  </li>
                  <li>
                      <a class="false" data-context="" href="https://www.vvc.com.br/empresas/">Empresas</a>
                  </li>
                  <li>
                      <a class="false" data-context="" href="https://www.vvc.com.br/lp/franquias/">Franquias</a>
                  </li>
                  <li>
                      <a class="false" data-context="" href="https://www.vvc.com.br/ri/">Investidores</a>
                  </li>
                  <li class="pipe">
                  </li>
          </ul>
    );
  }
}

Mediumup01.propTypes = {
  title: PropTypes.string,
};

module.exports = Mediumup01;
*/