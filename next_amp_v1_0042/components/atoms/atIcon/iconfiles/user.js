import React from 'react';
import Gradiente from '../gradiente.js';

export const user = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M13.1 11.3C14.9 10.8 16.2 9.2 16.2 7.2C16.2 4.9 14.3 3 12 3C9.7 3 7.8 4.9 7.8 7.2C7.8 9.2 9.1 10.8 10.9 11.3C6.6 11.9 3 15.8 3 20.2V21.2H21V20.2C21 15.8 17.4 11.9 13.1 11.3Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default user;
