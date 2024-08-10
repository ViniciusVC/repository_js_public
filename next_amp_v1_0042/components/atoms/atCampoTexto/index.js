// layout de Documentoscopia(/meusdocumentos/) - Projeto Piloto
import React from 'react';
import * as Util from '../../../controller/util.js';

const AtCampoTexto = props => {
  var varId=Util.validaProps(props.id,"id");
  var varName=Util.validaProps(props.name,"nome");
  var varPlaceholder=Util.validaProps(props.placeholder,"--");
  var varType=Util.validaProps(props.type,"text");
  var varAutocomplete=Util.validaProps(props.autocomplete,"on");
  var varSize=Util.validaProps(props.size,"6");
  if( props.maxlength!=undefined){varSize=props.maxlength};
  
  return(
    <span>
      <input
        type={varType}
        className="campotexto"
        id={varId}
        name={varName}
        accept="image/*"
        placeholder={varPlaceholder}
        autocomplete={varAutocomplete}
        size={varSize}
        maxlength={varSize}
        required/>
      <style jsx>{`
        .campotexto{
          width: 280px;
          height: 48px;
          border-radius: 4px;
          border: solid 1px #dbdbdb;
          text-indent: 10px;
          margin: 10px;
          font-family: SimplonBP-Regular
          background-color: #ffffff;
          font-size: 16px;
        }
      `}</style>
    </span>
  )
}

//font-family: 'Simplon-Headline';
export default AtCampoTexto
