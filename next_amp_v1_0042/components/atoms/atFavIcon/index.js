//Component atomo atFavIcon.js
import React from 'react'
import * as Util from '../../../controller/util.js';

const atFavIcon = props => {
  var href = Util.validaProps(props.href,"/static/assetsv5/img/favicon_laranja.ico");
  return(
    <link rel="icon" href={href} />
  )
}
export default atFavIcon
