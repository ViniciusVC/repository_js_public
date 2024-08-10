import React from 'react';
import Gradiente from '../gradiente.js';

export const plus = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <polygon id="path-1" points="13.2 0 10.5333333 0 10.5333333 10.5333333 0 10.5333333 0 13.2 10.5333333 13.2 10.5333333 23.7333333 13.2 23.7333333 13.2 13.2 23.7333333 13.2 23.7333333 10.5333333 13.2 10.5333333" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default plus;
