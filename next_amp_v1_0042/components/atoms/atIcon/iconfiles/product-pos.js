import React from 'react';
import Gradiente from '../gradiente.js';

export const product_pos = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 25 34" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M19.924 0c2.792 0 4.95 2.242 5.076 4.982v24.036C25 31.758 22.716 34 19.924 34H5.076C2.284 34 0 31.758 0 29.018V4.982C0 2.242 2.284 0 5.076 0h14.848zm2.41 29.018V4.982c0-1.37-1.14-2.49-2.537-2.49H4.95c-1.397 0-2.54 1.12-2.54 2.49v24.036c0 1.37 1.143 2.49 2.54 2.49h14.847c1.396 0 2.538-1.12 2.538-2.49zM11 26h3v3h-3v-3z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default product_pos;
