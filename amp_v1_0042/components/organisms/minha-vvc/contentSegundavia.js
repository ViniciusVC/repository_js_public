import React from 'react';
import * as Util from '../../../controller/util.js';
import Session1 from '../../moleculas/minha-oi/moSegundaVia/moSegundaViaSession';
import Session2 from '../../moleculas/minha-oi/moSegundaVia/moSegundaViaSession2';
import Session3 from '../../moleculas/minha-oi/moSegundaVia/moSegundaViaSession3';
import Session4 from '../../moleculas/minha-oi/moSegundaVia/moSegundaViaSession4';

// import { Container } from './styles';

const  contentSegundavia=  props => {
  var modo = Util.validaProps(props.modo,"html");
  return (
   <div className="conteinerSegundavia">
      <Session1 modo={modo} />
      <Session2 modo={modo} />
      <Session3 modo={modo} />
      <Session4 modo={modo} />
    <style jsx>{`
            .conteinerSegundavia{
                margin: 0 auto;
                max-width:1330px;
                width: 100%;       
            }
        `}
    </style>
   </div>
  );
}
export default contentSegundavia;