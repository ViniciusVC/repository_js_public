import React from 'react'
import Gradiente from '../gradiente.js';

export const lupa = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M9.5,5 C8.12,5 7,6.12 7,7.5 C7,8.88 8.12,10 9.5,10 C10.88,10 12,8.88 12,7.5 C12,6.12 10.88,5 9.5,5 Z M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 Z M14.79,14.21 L11.88,11.3 C11.19,11.74 10.37,12 9.49,12 C7.01,12 5,9.99 5,7.5 C5,5.01 7.01,3 9.5,3 C11.99,3 14,5.01 14,7.5 C14,8.38 13.74,9.19 13.3,9.89 L16.21,12.79 L14.79,14.21 Z" id="path-lupa"/>
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Interface/Lupa" transform="translate(-2.000000, -4.000000)">
        <g id="↳-Cor" transform="translate(2.000000, 4.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-lupa"/>
          </mask>
          <use id="Mask" fill={fillColor} fillRule="nonzero" xlinkHref="#path-lupa"/>
        </g>
      </g>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default lupa
