import React from 'react';
import * as Util from '../../controller/util.js';

import PageLpAssine from '../../components/templates/lp_assine_pos.js';

const RotaLpAssine = function(props){
  return(
    <PageLpAssine
      modo="html"
      cidade={Util.validaProps(props.url.query.cidade,"Rio de Janeiro")}/>
  )
}

export default RotaLpAssine