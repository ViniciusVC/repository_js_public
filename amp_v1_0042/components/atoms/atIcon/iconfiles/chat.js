import React from 'react'
import Gradiente from '../gradiente.js';

export const chat = (id,fillColor, ColorGradient1, ColorGradient2) => {
  return(
  <svg viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M17 1H1v12h2.88l1.656 1.657L7.192 13H17V1zM7.607 14l-2.07 2.07L3.463 14H0V0h18v14H7.607zm11.48-5.963l7.92.014v9.9h-3.413l-2.06 2.06-2.055-2.056h-6.433v-2.898h.99v1.913h5.866l1.64 1.64 1.634-1.635h2.85V8.97h-6.94v-.933z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);
  }
export default chat
