
import React from 'react';
import CampoInvisivel from './index.js';

export const atCampoInvisivel = (modo) => (
    <div>
      <h2>CampoInvisivel</h2>
      <CampoInvisivel/>
      <p className="p">
        Codigo : {'import CampoInvisivel from ""./atoms/index.js";'}<br/>
        Codigo : {'<CampoInvisivel/>'}<br/>
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

export default atCampoInvisivel;
