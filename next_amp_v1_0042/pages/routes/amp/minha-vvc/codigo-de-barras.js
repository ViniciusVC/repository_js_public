import React from 'react';
import Ajuda from '../../../../components/templates/meuvvc/codigo-de-barras.js';
import { withAmp } from 'next/amp';

const RotaDocumentoscopiaAjuda = function(props){
  var cidade = "Rio de Janeiro";
  if( props.url.query.cidade!=undefined){cidade=props.url.query.cidade};
  return(
    
    <Ajuda modo="amp" cidade={cidade} query={props.url.query} ajuda="selfie"></Ajuda>
  )
}

// export const config = {
//   amp: true
// }

export default withAmp(RotaDocumentoscopiaAjuda);
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true });
//export default RotaDocumentoscopiaAjuda