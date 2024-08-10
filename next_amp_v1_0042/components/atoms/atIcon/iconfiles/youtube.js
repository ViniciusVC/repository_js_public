import React from 'react';
import Gradiente from '../gradiente.js';

export const youtube = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path
        d="M363.5,117.4c6.4,0.7,20.6,0.7,33.1,14c0,0,10.1,9.9,13.1,32.8c3.5,26.7,3.3,53.4,3.3,53.4v25c0,0,0.2,26.7-3.3,53.4
        c-2.9,22.6-13.1,32.8-13.1,32.8c-12.5,13.1-26.7,13.1-33.1,13.8c0,0-46,3.5-115.4,3.5c-85.8-0.7-112.1-3.3-112.1-3.3
        c-7.4-1.3-23.9-0.9-36.5-14c0,0-10.1-10.1-13.1-32.8c-3.5-26.7-3.3-53.4-3.3-53.4v-25c0,0-0.2-26.7,3.3-53.4
        c2.9-22.8,13.1-32.8,13.1-32.8c12.5-13.3,26.7-13.3,33.1-14c0,0,46-3.3,115.4-3.3S363.5,117.4,363.5,117.4z M303.1,226.8L214,180.2
        v92.6L303.1,226.8z"
      />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default youtube;
