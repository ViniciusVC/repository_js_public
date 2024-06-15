import React from 'react';
import Gradiente from '../gradiente.js';

export const caret2 = (id,fillColor, ColorGradient1, ColorGradient2) => {
  return(
  <svg viewBox="0 0 320 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);
  }
export default caret2;

