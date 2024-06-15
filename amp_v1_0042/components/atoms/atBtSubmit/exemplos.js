
import React from 'react';
import BtSubmit from './index.js';

export const atBtSubmit = (modo) => (
    <div>
      <h2>atBtSubmit</h2>
      <div>
      <BtSubmit value="Enviar"/>
      <p className="p">Codigo:{'<BtSubmit value="Enviar"/>'}</p>
      <p className="p">modo={modo}</p>
      </div>
      <div>
      <BtSubmit/>
      <p className="p">Codigo:{'<BtSubmit/>'}</p>
      <p className="p">modo={modo}</p>
      </div>
      <style jsx>{`
      .p{ 
        background-color: #ffffff;
        color: #000000
      }
    `}</style>
    </div>
);

export default atBtSubmit;
