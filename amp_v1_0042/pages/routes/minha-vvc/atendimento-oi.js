import React from 'react';
import Home from '../../../components/templates/minha-oi/atendimento-vvc.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHome = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <Home modo="html" cidade={cidade} query={props.url.query}></Home>
  )
}
//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaHome
