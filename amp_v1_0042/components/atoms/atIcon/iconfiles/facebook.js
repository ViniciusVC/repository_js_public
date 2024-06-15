import React from 'react';
import Gradiente from '../gradiente.js';

export const facebook = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M331.6,120.6h-28.9c-22.6,0-26.9,10.9-26.9,26.5v34.8h53.9l-7.2,54.5h-46.8v139.7h-56.3V236.4h-46.9v-54.5h46.9v-40.1 c0-46.6,28.5-72,70.1-72c19.9,0,37,1.5,42,2.2V120.6z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default facebook;
