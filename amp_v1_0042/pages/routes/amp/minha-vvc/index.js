import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';

import minhavvcHome from '../../../../components/templates/minha-oi/index.js';

const RotaIndexAMP = function(props){
  return(
    <minhavvcHome
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaIndexAMP); // Usado para páginas AMP
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true }); // Usado para páginas hibridas
//export default RotaDocumentoscopiaAjuda // Usado para páginas HTMP