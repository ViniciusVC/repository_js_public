import React from 'react';
import Gradiente from '../gradiente.js';

export const close = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M9.99105747,8.22720779 L16.2272078,14.4633581 L14.4633581,16.2272078 L8.22720779,9.99105747 L1.99105747,16.2272078 L0.227207794,14.4633581 L6.46335812,8.22720779 L0.227207794,1.99105747 L1.99105747,0.227207794 L8.22720779,6.46335812 L14.4633581,0.227207794 L16.2272078,1.99105747 L9.99105747,8.22720779 Z" id="path-close" />
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-close" />
      </mask>
      <use id="Mask" fill={fillColor} fillRule="nonzero" xlinkHref="#path-close" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
)

export default close;
