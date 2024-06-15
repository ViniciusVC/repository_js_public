import React from 'react';
import Gradiente from '../gradiente.js';

export const check = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} fillRule="evenodd">
      <path d="M15,0 C23.28,0 30,6.72 30,15 C30,23.28 23.28,30 15,30 C6.72,30 0,23.28 0,15 C0,6.72 6.72,0 15,0 Z M12,22.5 L25.5,9 L23.385,6.87 L12,18.255 L6.615,12.885 L4.5,15 L12,22.5 Z" id="Sucesso" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default check;
