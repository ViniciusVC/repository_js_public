import React from 'react';
import SegundaVia from '../../../../components/templates/minha-oi/segunda-via.js';
import { withAmp } from 'next/amp';

const RotaDocumentoscopiaAjuda = function(props){
  var cidade = "Rio de Janeiro";
  if( props.url.query.cidade!=undefined){cidade=props.url.query.cidade};
  return(
    <SegundaVia  modo="amp" cidade={cidade} query={props.url.query} ajuda="selfie"></SegundaVia >
  )
}

// export const config = {
//   amp: true
// }

export default withAmp(RotaDocumentoscopiaAjuda);
//export default withAmp(RotaDocumentoscopiaAjuda, { hybrid: true });
//export default RotaDocumentoscopiaAjuda