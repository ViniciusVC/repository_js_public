import React from 'react';
import Gradiente from '../gradiente.js';

export const google_plus = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path
        d="M168.7,365.1c-74.6,0-135-60.4-135-135c0-74.6,60.4-135,135-135c36.5,0,66.8,13.3,90.4,35.4l-36.6,35.2
        c-9.9-9.6-27.4-20.8-53.8-20.8c-46,0-83.6,38.1-83.6,85.2c0,47.1,37.6,85.2,83.6,85.2c53.4,0,73.5-38.5,76.6-58.2h-76.6v-46.4
        h127.4c1.3,6.8,2.2,13.6,2.2,22.5C298.3,310.4,246.6,365.1,168.7,365.1z M457.9,249.4h-38.5v38.5h-38.7v-38.5h-38.5v-38.7h38.5
        v-38.5h38.7v38.5h38.5V249.4z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
    </svg>
);

export default google_plus;
