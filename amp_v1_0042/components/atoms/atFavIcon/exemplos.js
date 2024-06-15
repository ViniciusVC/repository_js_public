
import React from 'react';
//import FavIcon from '../atFavIcon/index.js';

export const atFavIcon = (modo) => (
    <div>
      <h2>atFavIcon</h2>
      <p className="p">
        O atFavIcon não é um componente de formataçao.<br/>
        codigo : {'<FaviIcon/>'}<br/>
        modo={modo}
      </p>
      <style jsx>{`
          .p{ 
            background-color: #ffffff;
            color: #000000
          }
        `}</style>
    </div>
);

export default atFavIcon;
