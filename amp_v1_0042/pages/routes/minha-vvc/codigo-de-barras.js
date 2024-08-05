import React from 'react';
import Home from '../../../components/templates/meuvvc/codigo-de-barras.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp'; //para exportar AMP

const codigoDeBarras = function(props){
  // console.log('Rota home');
  // console.log(props.url.query);
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <Home modo="html" cidade={cidade}></Home>
  )
}
//export default withAmp(codigoDeBarras, { hybrid: true }); // Para exportar pagina hybrida. Não usado neste projeto
//export default withAmp(codigoDeBarras); //para exportar AMP
export default codigoDeBarras
