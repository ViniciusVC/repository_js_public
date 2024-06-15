import React from 'react';
import Home from '../../../components/templates/minha-oi/segunda-via.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaHome = function(props){
  // console.log('Rota home');
  // console.log(props.url.query);
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <Home modo="html" cidade={cidade}></Home>
  )
}
//export default withAmp(RotaHome, { hybrid: true });
//export default withAmp(RotaHome);
export default RotaHome
