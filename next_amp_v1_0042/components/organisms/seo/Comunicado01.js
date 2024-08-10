// header do LP-ASSINE-POS - layout Portal Oi SEO
import React from 'react'

//import Recaptcha from '../components/organisms/seo/Comunicado01'

const Comunicado01 = function(props){
  console.log('Rodando /views/organisms/Comunicado01.jsx - layout Portal Oi SEO');
  return(
    <div className="warning">
        <div className="container">
          <p>Comunicado: De acordo com a Lei Geral de Telecomunicações 9.472, todo aparelho celular em uso no Brasil deve ser certificado ou ter sua certificação aceita pela Anatel. O projeto Celular Legal foi criado para inibir a comercialização de produtos irregulares utilizados nas redes das operadoras celulares. Como consequência, conscientizar a população para que utilizem apenas celulares em conformidade com a legislação brasileira. Para saber a situação do seu celular, <a href="http://www.anatel.gov.br/celularlegal/consulte-sua-situacao">consulte aqui</a>.
          </p>
        </div>
        <div class="container">
          <p><a href="https://secure-web.cisco.com/1EH1B-CLV31IF8vcULmniGDoJim0uL59SwzKlscoLeueHtIl9uJoz5RjL9Tvf-ob6T0NnEICsBlVygnHSJ9JOJn_Wh864Xja_tDA3-n_zSACAQLyCjI8IKhL7tmgG0Oo86Nulwacs7dmiyBCfG9_ot5lrEoKD3ARvmc3fIDIj4GLfvvzMFzPdNl_Uw5Jtsd0wQP4e7wS1-im491uGVbXNt_M9gAAcYxp6x2tdS587TVv6W2jeUh0PX3OjEiDcLumG8F1W__DbZUhK2p6QL_c3PxBoxmhciwy7QAdnyVqbY0CAD2omGxEaW0ixivc_R9lZ/https%3A%2F%2Fwww.oiconselhodeusuarios.com.br">Confira mais informações sobre as eleições para os Conselhos de Usuários</a></p>
        </div>
    <style jsx>{`
      .alert a{
        border-bottom:.05rem solid rgba(34,34,34,.3);
        padding-bottom:.05rem; color:rgba(34,34,34,.9)
       }   
      .alert a:hover{
        border-bottom-color:rgba(143,37,229,.55)  
      }
      .hovered .containerMenuWrapper{
        position:relative
      }
      .hovered .containerMenuWrapper .containerMenu{
        position:absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:11
      } 
    `}</style>
 </div>
)}

export default Comunicado01

/*

var React = require('react');
//var PropTypes = require('prop-types');

class Comunicado01 extends React.Component {
  render() {
    console.log('Rodando /views/organisms/Comunicado01.jsx - layout Portal Oi SEO');
    return (
      <div class="warning">
        <div class="container">
          <p>Comunicado: De acordo com a Lei Geral de Telecomunicações 9.472, todo aparelho celular em uso no Brasil deve ser certificado ou ter sua certificação aceita pela Anatel. O projeto Celular Legal foi criado para inibir a comercialização de produtos irregulares utilizados nas redes das operadoras celulares. Como consequência, conscientizar a população para que utilizem apenas celulares em conformidade com a legislação brasileira. Para saber a situação do seu celular, <a href="http://www.anatel.gov.br/celularlegal/consulte-sua-situacao">consulte aqui</a>.
          </p>
        </div>
        <div class="container">
          <p><a href="https://secure-web.cisco.com/1EH1B-CLV31IF8vcULmniGDoJim0uL59SwzKlscoLeueHtIl9uJoz5RjL9Tvf-ob6T0NnEICsBlVygnHSJ9JOJn_Wh864Xja_tDA3-n_zSACAQLyCjI8IKhL7tmgG0Oo86Nulwacs7dmiyBCfG9_ot5lrEoKD3ARvmc3fIDIj4GLfvvzMFzPdNl_Uw5Jtsd0wQP4e7wS1-im491uGVbXNt_M9gAAcYxp6x2tdS587TVv6W2jeUh0PX3OjEiDcLumG8F1W__DbZUhK2p6QL_c3PxBoxmhciwy7QAdnyVqbY0CAD2omGxEaW0ixivc_R9lZ/https%3A%2F%2Fwww.oiconselhodeusuarios.com.br">Confira mais informações sobre as eleições para os Conselhos de Usuários</a></p>
        </div>
      </div>
    );
  }
}
module.exports = Comunicado01;
*/