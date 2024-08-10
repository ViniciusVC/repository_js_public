import React from 'react';
import Gradiente from '../gradiente.js';

export const charts = (id,fillColor, ColorGradient1, ColorGradient2) => {
  return(
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.55556 0H28.4444C30.4 0 32 1.6 32 3.55556V28.4444C32 30.4 30.4 32 28.4444 32H3.55556C1.6 32 0 30.4 0 28.4444V3.55556C0 1.6 1.6 0 3.55556 0ZM7.11111 24.8889H10.6667V12.4444H7.11111V24.8889ZM17.7778 24.8889H14.2222V7.11111H17.7778V24.8889ZM21.3333 24.8889H24.8889V17.7778H21.3333V24.8889Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);
  }
export default charts;
