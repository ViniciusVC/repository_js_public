import React from 'react';
import * as Util from '../../../controller/util.js';

import Home from '../../../components/templates/meuvvc/index.js';

const RotaHome = function(props){
  return(
    <Home
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

export default RotaHome