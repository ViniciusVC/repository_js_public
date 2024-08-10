
import React from 'react';
//import Form from './index.js';

export const atForm = (modo) => (
    <div>
      <h2>atForm</h2>
      <div>
        <p className="p">O atForm não é um componente Visual. <br/>
        modo={modo}</p>
      </div>
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atForm;
