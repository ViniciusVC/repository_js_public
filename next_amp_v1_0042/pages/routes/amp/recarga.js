import React from 'react';
import Home from '../../../components/templates/recarga.js';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'
import { withAmp } from 'next/amp';

const RotaHomeAMP = function(props){
  //console.log('Rota Home AMP');
  //console.log(props.url.asPath);
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  
  return(
    <Home modo="amp" cidade={cidade}></Home>
  )
}

export const config = {
  amp: true
}

//export default withAmp(RotaHomeAMP, { hybrid: true });
export default withAmp(RotaHomeAMP);
//export default RotaHomeAMP
