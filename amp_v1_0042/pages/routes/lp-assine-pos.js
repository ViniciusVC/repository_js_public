import React from 'react';
import * as Util from '../../controller/util.js';

import PageLpAssinePos from '../../components/templates/lp_assine_pos.js';

const RotaLpAssinePos = function(props){
  return(
    <PageLpAssinePos
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

export default RotaLpAssinePos