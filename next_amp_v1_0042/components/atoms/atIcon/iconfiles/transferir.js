import React from 'react';
import Gradiente from '../gradiente.js';

export const transferir = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g fill={fillColor} fillRule="evenodd">
      <path
        d="M11.216,19.4 L0,19.4 L0,22.6 L11.216,22.6 L11.216,27.4 L17.6,21 L11.216,14.6 L11.216,19.4 Z M20.784,17.8 L20.784,13 L32,13 L32,9.8 L20.784,9.8 L20.784,5 L14.4,11.4 L20.784,17.8 Z"
      />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default transferir;
