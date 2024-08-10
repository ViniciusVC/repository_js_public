
import React from 'react';
import Arrow from './index.js';



export const atArrow = (modo) => {
  return(
    <div>
      <h2>atArrow</h2>
      <Arrow/>
      <p className="p">codigo : {'<Arrow/>'}</p>
      <Arrow color="#000"/>
      <p className="p">codigo : {'<Arrow color="#000"/>'}</p>
      <Arrow color="#ffffff"/>
      <p className="p">codigo : {'<Arrow color="#ffffff"/>'}</p>
      <p className="p">modo={modo}</p>
    <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
)
};

export default atArrow;
