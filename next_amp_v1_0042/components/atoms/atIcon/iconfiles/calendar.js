import React from 'react';
import Gradiente from '../gradiente.js';

export const calendar = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 24 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path d="M22.9090909,2 C23.5636364,2 24,2.59375 24,3.1875 L24,19.8125 C24,20.525 23.5636364,21 22.9090909,21 L1.09090909,21 C0.436363636,21 0,20.525 0,19.8125 L0,3.1875 C0,2.59375 0.436363636,2 1.09090909,2 L22.9090909,2 Z M22,19 L22,7 L2,7 L2,19 L22,19 Z M4,0 L6,0 L6,5 L4,5 L4,0 Z M7,0 L9,0 L9,5 L7,5 L7,0 Z M18,0 L20,0 L20,5 L18,5 L18,0 Z M15,0 L17,0 L17,5 L15,5 L15,0 Z M4.5,9 L8.5,9 L8.5,13 L4.5,13 L4.5,9 Z" id="path-calendar" />
        </defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-calendar" />
          </mask>
          <use id="Mask" fill={fillColor} fillRule="nonzero" xlinkHref="#path-calendar" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default calendar;