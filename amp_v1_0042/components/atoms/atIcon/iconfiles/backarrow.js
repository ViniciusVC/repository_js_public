import React from 'react';
import Gradiente from '../gradiente.js';

export const backarrow = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill={fillColor} fillRule="evenodd">
          <polygon id="path-backarrow" points="16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default backarrow;
