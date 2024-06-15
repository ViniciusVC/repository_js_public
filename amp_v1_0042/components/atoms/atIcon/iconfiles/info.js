import React from 'react';
import Gradiente from '../gradiente.js';

export const info = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2 2C6.6 2 2 6.6 2 12.1C2 17.7 6.6 22.2 12.2 22.2C17.8 22.2 22.4 17.7 22.4 12.1C22.4 6.6 17.8 2 12.2 2ZM13.5 6.5H11.3V8.4H13.5V6.5ZM13.5 9.5H11.3V17.9H13.5V9.5ZM4 12.1C4 16.6 7.7 20.2 12.2 20.2C16.7 20.2 20.4 16.6 20.4 12.1C20.4 7.6 16.7 4 12.2 4C7.7 4 4 7.6 4 12.1Z" fill={fillColor} />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default info;
