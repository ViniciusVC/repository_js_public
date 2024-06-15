import React from 'react';
import { withAmp } from 'next/amp';
import * as Util from '../../../../controller/util.js';

import AtendimentoOi from '../../../../components/templates/minha-oi/atendimento-vvc.js';

const RotaAtendimentoOiAjuda = function(props){
  return(
    <AtendimentoOi
      modo="amp"
      cidade={Util.validaProps(props.cidade,"Rio de Janeiro")}/>
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaAtendimentoOiAjuda);
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true }); // Usado para páginas hibridas
//export default RotaDocumentoscopiaAjuda // Usado para páginas HTMP