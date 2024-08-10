// Usado em Documentoscopia - Projeto Piloto
import React from 'react';
import * as Util from '../../../controller/util.js';

const atCampoInvisivel = props => {
  var varId=Util.validaProps(props.id,"id");
  var varName=Util.validaProps(props.name,"nome");
  var varType="text";
  if( props.type!=undefined){varType=props.type};
  return(
    <span>
      <input type={varType} className="CampoInvisivel" id={varId} name={varName} accept="image/*" value={props.value}/>
    <style jsx>{`
        .CampoInvisivel{
          width: 92%;
          display : none;
        }
      `}</style>
    </span>
  )
}
//visibility: hidden;
export default atCampoInvisivel
