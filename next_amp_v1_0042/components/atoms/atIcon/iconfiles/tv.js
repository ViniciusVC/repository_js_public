import React from 'react';
import Gradiente from '../gradiente.js';

export const tv = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M20.2 6.1H14.7L17.4 3.4L16 2L12.1 5.8L8.3 2L6.9 3.4L9.6 6.1H4C2.9 6.1 2 6.9 2 8V16.4C2 17.4 2.9 18.3 4 18.3H8.1L7.6 20.1H5.7V22.1H7.1H17.2H18.6V20.1H16.7L16.1 18.2H20.2C21.3 18.2 22.2 17.4 22.2 16.3V8C22.1 6.9 21.2 6.1 20.2 6.1ZM9.7 20.1L10.2 18.3H14L14.5 20.1H9.7ZM4.1 8.2V16.2H20.1V8.2H4.1Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default tv;
