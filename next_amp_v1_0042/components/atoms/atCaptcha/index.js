// Codigo Captcha Mocado
import React from 'react';
import Img from '../atImg/index.js';
import * as Util from '../../../controller/util.js';
//import svgCaptcha from 'svg-captcha';

function validaProps(X,Y){
  if(X!=undefined){
    return X;
  }else{
    return Y;
  };
}
const Captcha = props => {
  //var svgCaptcha = require('svg-captcha');
  //var captcha = svgCaptcha.create({size: 6, ignoreChars: '0o1i', noise: 2});
  //var varcaptcha = svgCaptcha.create();
  //console.log(captcha);
  //console.log('Captcha='+varcaptcha.text);
  // console.log(captcha.data);
  var modo = Util.validaProps(props.modo,"html");
  //if( props.modo!=undefined){modo=props.modo};
  var sessao = Util.validaProps(props.sessao,"");
  //if( props.sessao!=undefined){sessao="?sessao="+props.sessao};
  
  return(
    <Img
    class="svgCaptcha"
    src={"/api1/captcha/"+sessao}
    width="150px"
    height="50px"
    modo={modo}>
    </Img>
  )
}

export default Captcha
