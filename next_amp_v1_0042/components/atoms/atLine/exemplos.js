import React from 'react';
import Line from './index';

export const atLine = (modo) => (
  <div className="divExmploLine">
    <div>
      <h2>atLine</h2>
    </div>
    <div className="p">
      Linha 1 :
      <Line width="250px" color="red"/>
      codigo : {'<Line width="250px" color="red"/>'}
    </div>
    <div className="p">
      Linha 2 :
      <Line color="#000" width="1px" height="250px"/>
      codigo : {'<Line color="#000" width="1px" height="250px"/>'}
    </div>
    <div className="p">
      Linha linha Divisao do Minha VVC :
      <Line css="linhaDivisao"/>
      codigo : {'<Line css="linhaDivisao"/>'}
    </div>
    <div className="p">
      modo={modo}
    </div>
    <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000;
        margin-top:30px;
      }
    `}</style>
  </div> 
)

//<Line color="#000" width="1px" height="250px" margin={[15]} />
export default atLine
