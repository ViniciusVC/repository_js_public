import React from 'react';
import vvcplay from '../../../components/templates/vvc-play/indexvvcplay';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'
import { withAmp } from 'next/amp';

const Rotavvcplay = function(props){
  //console.log('Rota amp/vvc-play');
  //console.log(props.url.query);
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")

  return(
    <vvcplay modo="amp" cidade={cidade}></vvcplay>
  )
}

// export const config = {
//   amp: true
// }

//export default withAmp(Rotavvcplay, { hybrid: true });
export default withAmp(Rotavvcplay);
//export default Rotavvcplay