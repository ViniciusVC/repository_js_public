// content do Atendimento - Layout meuvvc
import React from 'react';
import * as Util from '../../../controller/util.js';
import HomeSession1 from '../../moleculas/meuvvc/moHomeSession1.js';
import HomeSession2 from '../../moleculas/meuvvc/moHomeSession2.js';
import HomeSession3 from '../../moleculas/meuvvc/moHomeSession3.js';


const contentHomeminhavvc = props => {
  var modo = Util.validaProps(props.modo,"html");
  //var cidade = Util.validaProps(props.cidade,"RJ");
  return(
      <div className="contentHomeminhavvc">
        <HomeSession1 modo={modo}/>
        <HomeSession2 modo={modo}/>
        <HomeSession3 modo={modo}/>
        <style jsx>{`
        .contentHomeminhavvc {
          margin:30px;
          max-width:1330px;
          justify-content: center;
          align-items: center
          /*margin: 70px 300px 40px 300px;*/
          /*margin-left: 30px;
            margin-right: 30px;*/
        }
      `}</style>
      </div>
  )
};
export default contentHomeminhavvc