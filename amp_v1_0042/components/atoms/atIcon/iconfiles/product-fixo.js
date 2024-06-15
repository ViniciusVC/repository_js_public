import React from 'react';
import Gradiente from '../gradiente.js';

export const product_fixo = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 34 39" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M24.63 20.645h-2.593V3.87H9.074V0H6.48v21.032C2.723 22.194 0 25.548 0 29.677c0 5.033 4.02 9.033 9.074 9.033H24.63c5.055 0 9.074-4 9.074-9.033 0-4.903-4.02-9.032-9.074-9.032zm-5.186-7.742H9.074v-6.45h10.37v6.45zm5.186 15.484h2.592v2.58H24.63v-2.58zM9.074 15.484h10.37v12.903H9.074V15.485zM24.63 36.13H9.074c-3.63 0-6.48-2.84-6.48-6.453 0-2.58 1.554-4.903 3.887-5.935v7.226h15.557v-7.742h2.593c3.63 0 6.48 2.84 6.48 6.45 0 3.614-2.85 6.453-6.48 6.453zM12.963 23.225h2.593v2.58h-2.593v-2.58zm0-5.16h2.593v2.58h-2.593v-2.58z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default product_fixo;
