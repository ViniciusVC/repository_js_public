import React from 'react'
import Gradiente from '../gradiente.js';

export const lupa_thin = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="-10 692 10 10" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M-9.8,701.8c0.3,0.3,0.8,0.3,1.1,0l1.6-1.6c0.1-0.1,0.1-0.1,0.2-0.2c0.7,0.5,1.6,0.8,2.5,0.8 c2.4,0,4.4-2,4.4-4.4c0-2.4-2-4.4-4.4-4.4s-4.4,2-4.4,4.4c0,0.9,0.3,1.8,0.8,2.5c-0.1,0-0.2,0.1-0.2,0.2l-1.6,1.6 C-10.1,701-10.1,701.5-9.8,701.8z M-8.1,696.4c0-2,1.6-3.7,3.7-3.7s3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7S-8.1,698.4-8.1,696.4z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default lupa_thin
