import React from 'react';
import * as Util from '../../../controller/util.js';

import Documentoscopia from '../../../components/templates/documentoscopia/documentoscopia.js';

const RotaDocumentoscopia = function(props){
  var cidade = Util.validaProps(props.url.query.cidade,"Rio de Janeiro")
  return(
    <Documentoscopia modo="html" cidade={cidade} query={props.url.query}></Documentoscopia>
  )
}

export default RotaDocumentoscopia