import React from 'react';
import Portabilidade from '../../../../components/templates/portabilidade/indice';
import { withAmp } from 'next/amp';

const RotaPortabilidade = function(props){
  var cidade = "Rio de Janeiro";
  if( props.url.query.cidade!=undefined){cidade=props.url.query.cidade};
  return(
    <Portabilidade  modo="amp" cidade={cidade} query={props.url.query} ajuda="selfie"></Portabilidade >
  )
}

// export const config = {
//   amp: true
// }
export default withAmp(RotaPortabilidade);