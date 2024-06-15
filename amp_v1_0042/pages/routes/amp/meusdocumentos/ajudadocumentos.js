import React from 'react';
import * as Util from '../../../../controller/util.js';
import { withAmp } from 'next/amp';

import Ajuda from '../../../../components/templates/documentoscopia/ajuda.js';

const RotaDocumentoscopiaAjuda = function(props){
  return(
    <Ajuda
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      query={props.url.query}
      ajuda="documentos"/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaDocumentoscopiaAjuda); // Usado para páginas AMP
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true });
//export default RotaDocumentoscopiaAjuda // Usado para páginas HTMP
