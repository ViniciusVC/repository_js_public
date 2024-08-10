import React from 'react';
import DocumentoscopiaEmail from '../../../components/templates/documentoscopia/email.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

const RotaDocumentoscopiaEmail = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <DocumentoscopiaEmail modo="html" cidade={cidade} query={props.url.query}></DocumentoscopiaEmail>
  )
}

// export const config = {
//   amp: true
// }

//export default withAmp(RotaDocumentoscopia);
//export default withAmp(RotaDocumentoscopia, { hybrid: true });
export default RotaDocumentoscopiaEmail
