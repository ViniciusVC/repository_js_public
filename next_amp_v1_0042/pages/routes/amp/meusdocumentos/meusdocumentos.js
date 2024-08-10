
import React from 'react';
import * as Util from '../../../../controller/util.js';
import { withAmp } from 'next/amp';

import Documentoscopia from '../../../../components/templates/documentoscopia/documentoscopia.js';

const RotaDocumentoscopiaAMP = function(props){
  return(
    <Documentoscopia
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      query={props.url.query}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaDocumentoscopiaAMP); // Usado para páginas AMP
//export default withAmp(RotaDocumentoscopiaAMP, { hybrid: true });
//export default RotaDocumentoscopiaAMP // Usado para páginas HTMP
