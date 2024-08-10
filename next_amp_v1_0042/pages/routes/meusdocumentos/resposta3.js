import React from 'react';
import Documentoscopia from '../../../components/templates/documentoscopia/resposta3.js';
import * as Util from '../../../controller/util.js';
//import { withAmp } from 'next/amp';

//OK

const RotaDocumentoscopia = function(props){
  // Tudo ok
  return(
    <Documentoscopia modo="html" cod=""></Documentoscopia>
  )
}

// export const config = {
//   amp: true
// }

//export default withAmp(RotaDocumentoscopia);
//export default withAmp(RotaDocumentoscopia, { hybrid: true });
export default RotaDocumentoscopia
