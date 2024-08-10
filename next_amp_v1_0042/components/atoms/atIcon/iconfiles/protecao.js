import React from 'react';
import Gradiente from '../gradiente.js';

export const protecao = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 36 45" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <polygon points="21.2732727 4.30390909 33.8787879 4.30390909 33.8787879 33.0800303 16.9771818 42.4188485 0 33.0800303 0 4.30390909 12.6615455 4.30390909 16.9667576 0" />
      <path fill="#fff" d="M25.8924848,29.4324848 C25.8924848,24.9552727 22.2635455,22 17.7837273,22 L17.1087576,22 C12.6315455,22 9,24.9552727 9,29.4324848 L25.8924848,29.4324848 Z"/>
      <path fill="#fff" d="M22.8112424,16.4049697 C22.8112424,19.3902121 20.3915152,21.8099394 17.4062727,21.8099394 C14.4210303,21.8099394 12,19.3902121 12,16.4049697 C12,13.4197273 14.4210303,11 17.4062727,11 C20.3915152,11 22.8112424,13.4197273 22.8112424,16.4049697 Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default protecao;
