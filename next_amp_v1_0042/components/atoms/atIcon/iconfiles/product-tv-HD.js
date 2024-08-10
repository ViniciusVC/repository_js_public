import React from 'react';
import Gradiente from '../gradiente.js';

export const product_tvhd = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M76.8,12.5H54l8.4-8.4l-2.5-2.5l-9.5,9.5l-9.5-9.5l-2.5,2.5l8.6,8.6H23.2C10.5,12.6,0,22.9,0,35.9v39.3   c0,12.6,10.1,23.1,23.1,23.2h53.7c12.8,0,23.2-10.3,23.2-23.2V35.7C100,22.8,89.7,12.5,76.8,12.5z M21.5,94.4   c-8.1-0.8-15-6.6-17.2-14.2h17.2V94.4z M37.6,94.4H25.1V80h12.5V94.4z M76.9,94.4H41V80h54.9C93.6,88.5,86,94.4,76.9,94.4z    M96.7,74.7c0,0.8,0,1.7-0.2,2.5v-0.6H3.9c0-0.6-0.2-1.2-0.2-1.9V35.4c0-11.1,8.9-19.7,19.7-19.7h53.7c11.1,0,19.7,8.9,19.7,19.7   V74.7z" />
      <circle cx="75.2" cy="87.4" r="2.7" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default product_tvhd;

