import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'

import PageLpAssinePos from '../../../components/templates/lp_assine_pos.js';

const RotaLpAssinePosAMP = function(props){
  return(
    <PageLpAssinePos
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas
// export const config = {
//   amp: true
// }

export default withAmp(RotaLpAssinePosAMP); // Usado para páginas AMP
//export default withAmp(RotaLpAssinePos, { hybrid: true }); // Usado para páginas hibridas
//export default RotaLpAssinePos // Usado para páginas HTMP