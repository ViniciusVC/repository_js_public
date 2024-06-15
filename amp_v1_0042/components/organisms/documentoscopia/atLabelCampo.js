// content do Documentoscopia - Projeto Piloto
import React from 'react';

//console.log('Instanciou /componentes/organisms/documentoscopia/atLabelCampo.js');

const atLabelCampo = props => {
  var varValue = "label";
  if( props.value!=undefined){varValue=props.value};
  var varFor = "label";
  if( props.for!=undefined){varFor=props.for};
  return(
   <div>
      <label className="labelcampo" for={varFor}>{varValue}</label><br/>
      <style jsx>{`
       .labelcampo{
         font-family: SimplonBP-Regular;
         font-size: 15px;
         color: #909090;
        }
      `}</style>
    </div>
)};

export default atLabelCampo
