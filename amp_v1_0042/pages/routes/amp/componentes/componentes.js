
import React from 'react';
import Componentes from '../../../../components/templates/componentes.js';
import * as Util from '../../../../controller/util.js';
import { withAmp } from 'next/amp';

const RotaComponentesAMP = function(props){
  return(
    <Componentes
      modo="amp"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}
      id={Util.validaProps(props.url.query.id,"atArrow")}
    />
  )
}

// //Usado para páginas hibridas (Gerou problemas com canonical)
// export const config = {
//   amp: true
// }

export default withAmp(RotaComponentesAMP); // Usado para páginas AMP
//export default withAmp(RotaComponentes, { hybrid: true });
//export default RotaComponentes // Usado para páginas HTMP