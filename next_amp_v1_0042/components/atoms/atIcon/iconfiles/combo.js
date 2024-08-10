import React from 'react';
import Gradiente from '../gradiente.js';

export const combo = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <path d="M-2.35367281e-14,0 L4.8056872,0 L4.8056872,2.67298578 L2.7014218,2.67298578 L2.7014218,21.3270142 L4.8056872,21.3270142 L4.8056872,24 L-2.35367281e-14,24 L-2.35367281e-14,0 Z M23.8056872,0 L23.8056872,24 L19,24 L19,21.3270142 L21.1042654,21.3270142 L21.1042654,2.67298578 L19,2.67298578 L19,0 L23.8056872,0 Z" id="path-combo" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default combo;

