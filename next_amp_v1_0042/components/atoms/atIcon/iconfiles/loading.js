import React from 'react';
import Gradiente from '../gradiente.js';

export const loading = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke={fillColor} strokeWidth="3px" fillRule="evenodd" strokeLinejoin="round">
      <path fill="none" d="M14,26 C20.627417,26 26,20.627417 26,14 C26,7.45771278 20.7645532,2.13822969 14.2547595,2.00265064 C14.1700525,2.00088646 14.0851298,2 14,2 C7.372583,2 2,7.372583 2,14" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default loading;
