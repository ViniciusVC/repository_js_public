import React from 'react';
import Gradiente from '../gradiente.js';

export const power = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <path d="M18,1.63586599 C21.5770743,3.73387832 24,7.62756703 24,12 C24,18.6534653 18.5882353,24 12,24 C5.41176471,24 0,18.6534653 0,12 C0,7.23131892 2.88197586,3.03208551 7,1.11069655 L7,3.92244273 C4.30635402,5.59265899 2.5,8.57392554 2.5,12 C2.5,17.2777778 6.78658537,21.5 12,21.5 C17.2134146,21.5 21.5,17.2777778 21.5,12 C21.5,9.01767441 20.131265,6.37239468 18,4.63552659 L18,1.63586599 Z M11,0 L14,0 L14,13 L11,13 L11,0 Z" id="path-1" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default power;
