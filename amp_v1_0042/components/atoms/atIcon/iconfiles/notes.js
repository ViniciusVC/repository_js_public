
import React from 'react';
import Gradiente from '../gradiente.js';

export const notes = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill={fillColor} fillRule="evenodd">
    <path xmlns="http://www.w3.org/2000/svg" id="a" d="M10.91 4.364h6.326v2.181H10.91V4.364zm-5.546 0h2.363a1 1 0 0 1 1 1v2.363a1 1 0 0 1-1 1H5.364a1 1 0 0 1-1-1V5.364a1 1 0 0 1 1-1zm5.545 6.545h6.327v2.182H10.91v-2.182zm-5.545 0h2.363a1 1 0 0 1 1 1v2.364a1 1 0 0 1-1 1H5.364a1 1 0 0 1-1-1v-2.364a1 1 0 0 1 1-1zM20.727 0H1.091C.436 0 0 .436 0 1.09v21.82C0 23.563.436 24 1.09 24h12.983c.327 0 .545-.11.763-.327l6.655-7.31c.218-.218.327-.436.327-.763V1.09c0-.545-.545-1.09-1.09-1.09zm-1.09 15.164l-6 6.654H2.181V2.182h17.454v12.982z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default notes;
