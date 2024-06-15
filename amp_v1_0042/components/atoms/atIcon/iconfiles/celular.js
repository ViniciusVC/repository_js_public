import React from 'react';
import Gradiente from '../gradiente.js';

export const celular = (id,fillColor, ColorGradient1, ColorGradient2) => {
  return(
  <svg viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} fillRule="evenodd">   
      <path d="M20,15.5 C18.75,15.5 17.55,15.3 16.43,14.93 C16.08,14.82 15.69,14.9 15.41,15.17 L13.21,17.37 C10.38,15.93 8.06,13.62 6.62,10.78 L8.82,8.57 C9.1,8.31 9.18,7.92 9.07,7.57 C8.7,6.45 8.5,5.25 8.5,4 C8.5,3.45 8.05,3 7.5,3 L4,3 C3.45,3 3,3.45 3,4 C3,13.39 10.61,21 20,21 C20.55,21 21,20.55 21,20 L21,16.5 C21,15.95 20.55,15.5 20,15.5 Z M19,12 L21,12 C21,7.03 16.97,3 12,3 L12,5 C15.87,5 19,8.13 19,12 Z M15,12 L17,12 C17,9.24 14.76,7 12,7 L12,9 C13.66,9 15,10.34 15,12 Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);
  }
export default celular;
