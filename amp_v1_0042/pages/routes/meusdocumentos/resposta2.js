import React from 'react';
import * as Util from '../../../controller/util.js';

import Documentoscopia from '../../../components/templates/documentoscopia/resposta2.js';

//Erro

const RotaDocumentoscopia = function(props){
  // Erro
  return(
    <Documentoscopia
      modo="html"
      cod={Util.validaProps(props.url.query.cod,"")}/>
  )
}

export default RotaDocumentoscopia