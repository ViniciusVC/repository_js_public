import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'

import Home from '../../../components/templates/home.js';

const RotaHomeAMP = function(props){
  return(
    <Home
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas
// export const config = {
//   amp: true
// }

export default withAmp(RotaHomeAMP); // Usado para páginas AMP
//export default withAmp(RotaHomeAMP, { hybrid: true }); // Usado para páginas hibridas
//export default RotaHomeAMP // Usado para páginas HTMP