import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'

import PageLpAssine from '../../../components/templates/lp_assine_pos.js';

const RotaLpAssineAMP = function(props){
  return(
    <PageLpAssine
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas
// export const config = {
//   amp: true
// }

export default withAmp(RotaLpAssineAMP); // Usado para páginas AMP
//export default withAmp(RotaLpAssine, { hybrid: true }); // Usado para páginas hibridas
//export default RotaLpAssine // Usado para páginas HTMP