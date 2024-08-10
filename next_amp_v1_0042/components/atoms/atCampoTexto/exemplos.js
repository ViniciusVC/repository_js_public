
import React from 'react';
import CampoTexto from './index.js';

export const atCampoTexto = (modo) => (
    <div>
      <h2>atCampoTexto</h2>
      <CampoTexto/>
      <p className="p">
        Código : {'<Arrow color="#ffffff"/>'}<br/>
        modo : {modo}
      </p>
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
);

export default atCampoTexto;
