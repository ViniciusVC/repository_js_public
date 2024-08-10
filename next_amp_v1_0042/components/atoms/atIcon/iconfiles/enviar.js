import React from 'react'
import Gradiente from '../gradiente.js';

export const enviar = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M28.8,3 L3.2,3 C1.44,3 0.016,4.44 0.016,6.2 L0,25.4 C0,27.16 1.44,28.6 3.2,28.6 L28.8,28.6 C30.56,28.6 32,27.16 32,25.4 L32,6.2 C32,4.44 30.56,3 28.8,3 Z M28.8,25.4 L3.2,25.4 L3.2,9.4 L16,17.4 L28.8,9.4 L28.8,25.4 Z M16,14.2 L3.2,6.2 L28.8,6.2 L16,14.2 Z" id="path-enviar" />
    </defs>
    <g id="icone/produtos/email" transform="translate(0.000000, -3.000000)">
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-enviar" />
      </mask>
      <use id="Mask" fill={fillColor} fillRule="nonzero" xlinkHref="#path-enviar" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default enviar
