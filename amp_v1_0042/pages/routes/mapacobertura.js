import React from 'react';
import * as Util from '../../controller/util.js';

import Index from '../../components/templates/mapacobertura.js';

const RotaMapaCobertura = function (props) {
  return (
    <Index
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade, "Rio de Janeiro")} />
  )
}

export default RotaMapaCobertura