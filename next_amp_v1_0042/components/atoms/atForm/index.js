import React from 'react'
import * as Util from '../../../controller/util.js';
//import { useAmp } from 'next/amp'

const Form = props => {
  //console.log('Rodadndo /componentes/atoms/atform/index.js');
  
  var action=Util.validaProps(props.action,"#");
  //if( props.action!=undefined){action=props.action};
  var method=Util.validaProps(props.method,"get");
  //if( props.method!=undefined){method=props.method};
  var id=Util.validaProps(props.id,"form");
  //if( props.id!=undefined){id=props.id};
  var name=Util.validaProps(props.name,"form");
  //if( props.name!=undefined){name=props.name};
  var encType=Util.validaProps(props.encType,"multipart/form-data");
  //if( props.encType!=undefined){encType=props.encType};
  var target=Util.validaProps(props.target,"_top");
  //if( props.target!=undefined){target=props.target};
  // var modo = "html";
  // if( props.modo!=undefined){modo=props.modo};
  // if(useAmp()){ 
  // if (modo=="amp" || modo=="AMP") {
  //   return(
  //     <form action={action} method={method} id={id} name={name} encType={encType} target={target}>
  //         {props.children}
  //     </form>
  //   )
  // }
  // else
  // {
    return(
      <form action={action} method={method} id={id} name={name} encType={encType} target={target}>
        {props.children}
      </form>
    )
  // }
};

export default Form
