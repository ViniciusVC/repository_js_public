
import React from 'react';
import Price from './index.js';

export const atPrice = (modo) => (
    <div className="divExmploPrice">
      <h2>atPrice</h2>
       <div>
          Componente atPrice:
          <Price 
            divreal="R$"
            divvalor="34"
            divcents="56"
            mes="mes"
            modo={modo} />
            <p className="p">
              Codigo : {'<Price divreal="R$" divvalor="34" divcents="56" mes="mes" modo="mtml" />'}<br/>
              modo={modo}
            </p>
        </div>
        <div>
          Componente atPrice Sem parametros:
            <Price/>
            <p className="p">
              Codigo : {'<Price/>'}<br/>
              modo={modo}
            </p>
        </div>
        <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atPrice;
