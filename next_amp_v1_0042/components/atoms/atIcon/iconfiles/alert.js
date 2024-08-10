import React from 'react';
import Gradiente from '../gradiente.js';

export const alert = (id, fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill={fillColor}>
          <path d="M15,0 C6.72,0 0,6.72 0,15 C0,23.28 6.72,30 15,30 C23.28,30 30,23.28 30,15 C30,6.72 23.28,0 15,0 Z M16.5,22.5 L13.5,22.5 L13.5,19.5 L16.5,19.5 L16.5,22.5 Z M16.5,16.5 L13.5,16.5 L13.5,7.5 L16.5,7.5 L16.5,16.5 Z" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default alert;
