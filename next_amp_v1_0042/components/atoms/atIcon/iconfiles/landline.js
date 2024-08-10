import React from 'react';
import Gradiente from '../gradiente.js';

const landline = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 22 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <path d="M8.4,14.4 L9.6,14.4 L9.6,15.6 L8.4,15.6 L8.4,14.4 Z M8.4,12 L9.6,12 L9.6,13.2 L8.4,13.2 L8.4,12 Z M15.6,16.8 L16.8,16.8 L16.8,18 L15.6,18 L15.6,16.8 Z M15.6,12.12 L14.4,12.12 L14.4,3.48 C14.4,2.76 13.92,2.28 13.2,2.28 L6,2.28 L6,0 L3.6,0 L3.6,3.48 L3.6,4.32 L3.6,12.48 C1.44,13.44 0,15.6 0,18 C0,21.24 2.64,24 6,24 L15.6,24 C18.96,24 21.6,21.36 21.6,18 C21.6,14.64 18.84,12.12 15.6,12.12 Z M6,10.8 L12,10.8 L12,16.92 L6,16.92 L6,10.8 Z M12,8.4 L6,8.4 L6,4.68 L12,4.68 L12,8.4 Z M15.6,21.6 L6,21.6 C3.96,21.6 2.4,20.04 2.4,18 C2.4,16.92 2.88,15.96 3.6,15.36 L3.6,18.12 C3.6,18.84 4.08,19.32 4.8,19.32 L13.2,19.32 C13.92,19.32 14.4,18.84 14.4,18.12 L14.4,14.52 L15.6,14.52 C17.64,14.52 19.2,16.08 19.2,18.12 C19.2,20.16 17.52,21.6 15.6,21.6 Z" id="path-landline" />
    </defs>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-landline" />
      </mask>
      <use id="Mask" fill={fillColor} fillRule="nonzero" xlinkHref="#path-landline" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export {landline};
export default landline;
