import React from 'react';
import Portabilidade from '../../../components/templates/portabilidade/indice';


const  RoutaPortabilidade = function(props){
  var cidade = "Rio de Janeiro";
  if( props.url.query.cidade!=undefined){cidade=props.url.query.cidade};
  return(
    <Portabilidade  modo="html" cidade={cidade} query={props.url.query} ajuda="selfie"></Portabilidade>
  )
}

export default RoutaPortabilidade;