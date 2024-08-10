import React from 'react';
import Gradiente from '../gradiente.js';

export const help = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM14.4 27.2V24H17.6V27.2H14.4ZM19.472 16.272L20.912 14.8C21.824 13.888 22.4 12.608 22.4 11.2C22.4 7.664 19.536 4.8 16 4.8C12.464 4.8 9.6 7.664 9.6 11.2H12.8C12.8 9.44 14.24 8 16 8C17.76 8 19.2 9.44 19.2 11.2C19.2 12.08 18.848 12.88 18.256 13.456L16.272 15.472C15.12 16.64 14.4 18.24 14.4 20V20.8H17.6C17.6 18.4 18.32 17.44 19.472 16.272Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default help;

