import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'


import Index from '../../../components/templates/index.js';

const RotaIndexAMP = function(props){
  return(
    <Index
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas
// export const config = {
//   amp: true
// }

export default withAmp(RotaIndexAMP); // Usado para páginas AMP
//export default withAmp(RotaIndexAMP, { hybrid: true }); // Usado para páginas hibridas
//export default RotaIndexAMP // Usado para páginas HTMP
