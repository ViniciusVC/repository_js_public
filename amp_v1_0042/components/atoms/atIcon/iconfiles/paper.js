import React from 'react';
import Gradiente from '../gradiente.js';

export const paper = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M10,0 L16,6 L16,18 C16,19.1 15.1,20 14,20 L1.99,20 C0.89,20 0,19.1 0,18 L0.01,2 C0.01,0.9 0.9,0 2,0 L10,0 Z M12,16 L12,14 L4,14 L4,16 L12,16 Z M12,12 L12,10 L4,10 L4,12 L12,12 Z M9,7 L14.5,7 L9,1.5 L9,7 Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default paper;
