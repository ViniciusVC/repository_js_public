import React from 'react';
import Gradiente from '../gradiente.js';

export const money = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M13.8 10.3L11.1 9.6C10.2 9.4 9.4 8.9 9.4 8C9.4 6.8 10.4 6.3 11.7 6.3C12.8 6.3 13.9 6.8 14.2 7.9H17.5C17.2 5.6 15.7 3.8 13.4 3.3V1H10.7V3.1C8.3 3.4 6.2 5 6.2 7.9C6.2 10.4 7.5 12.2 10 12.8L12.9 13.6C14.1 13.9 14.6 14.4 14.6 15.4C14.6 16.5 13.6 17.1 12.2 17.1C10.6 17.1 9.5 16.2 9.3 14.8H6C6.1 17.6 7.9 19.6 10.8 20.1V22.2H13.5V20.1C16.3 19.7 17.9 18 17.9 15.3C17.8 12.6 16.4 11 13.8 10.3Z" fill={fillColor} />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default money;
