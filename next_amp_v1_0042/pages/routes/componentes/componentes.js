
import React from 'react';
import * as Util from '../../../controller/util.js';

import Componentes from '../../../components/templates/componentes.js';

const RotaComponentes = function(props){
  return(
    <Componentes
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      id={Util.validaProps(props.url.query.id,"atArrow")}
    />
  )
}

export default RotaComponentes