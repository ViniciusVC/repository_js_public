import React from 'react';
import * as Util from '../../../controller/util.js';

import Ajuda from '../../../components/templates/documentoscopia/ajuda.js';

const RotaMeusDocumentosAjuda = function(props){
  return(
    <Ajuda
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      query={props.url.query}
      ajuda="selfie"/>
  )
}

export default RotaMeusDocumentosAjuda