import React from 'react';
import Gradiente from '../gradiente.js';

export const check2 = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.95673L3.4 7.63462L9.57143 13.6058L22.6 1L25 3.32212L9.57143 18.25L1 9.95673Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
)

export default check2;
