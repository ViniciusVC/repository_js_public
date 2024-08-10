import React from 'react';
import Gradiente from '../gradiente.js';

export const comboB = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="-255 347 100 100"  xmlns="http://www.w3.org/2000/svg" >
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <polygon points="-255,443 -222,443 -222,441 -253,441 -253,355 -222,355 -222,353 -255,353"></polygon>
      <polygon points="-156,353 -189,353 -189,355 -158,355 -158,441 -189,441 -189,443 -156,443"></polygon>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default comboB;

