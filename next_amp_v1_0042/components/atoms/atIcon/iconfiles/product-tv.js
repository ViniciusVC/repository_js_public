import React from 'react';
import Gradiente from '../gradiente.js';

export const product_tv = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M28.6 4.81h-7.28l2.99-2.99L22.49 0l-3.64 3.64L15.21 0l-1.82 1.82 2.99 2.99H9.1c-5.07 0-9.1 4.03-9.1 9.1v14.3c0 4.94 4.03 8.97 8.97 9.1H28.6c5.07 0 9.1-4.03 9.1-9.1v-14.3c0-5.07-4.03-9.1-9.1-9.1zm0 29.9H9.23c-3.12 0-5.85-2.21-6.5-5.2h32.24c-.65 2.86-3.25 5.2-6.37 5.2zm6.5-7.8H2.6v-13c0-3.64 2.86-6.5 6.5-6.5h19.5c3.64 0 6.5 2.86 6.5 6.5v13zm-9.1 3.9h2.6v2.6H26v-2.6z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default product_tv;
