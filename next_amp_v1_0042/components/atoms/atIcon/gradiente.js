import React from 'react';
import * as Util from "../../../controller/util.js";


const gradiente = props => {
//const gradiente = (id, Color1, Color2) => {
  var varid=Util.validaProps(props.id, "");
  var varColor1=Util.validaProps(props.Color1, "#f8562c");
  var varColor2=Util.validaProps(props.Color2, "#e92555");
  if (varid!=""){
    return(
      <linearGradient xmlns="http://www.w3.org/2000/svg" id={varid}>
        <stop offset="0" stop-color={varColor1} />
        <stop offset="1" stop-color={varColor2} />
      </linearGradient>
    )
  }else{
    <g></g>
  }
};

export default gradiente;
export { gradiente };