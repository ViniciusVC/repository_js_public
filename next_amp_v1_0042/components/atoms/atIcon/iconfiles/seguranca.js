import React from 'react'
import Gradiente from '../gradiente.js';

export const seguranca = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 31 39" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} fillRule="evenodd">
      <polygon points="0.62 38.390625 30.38372 38.390625 30.38372 9.126 0.62 9.126"/>
      <path fill="#fff" d="M19.57712,21.6768094 C19.57712,23.8864031 17.75184,25.6804031 15.50248,25.6804031 C13.25188,25.6804031 11.4266,23.8864031 11.4266,21.6768094 C11.4266,19.4672156 13.25188,17.6719969 15.50248,17.6719969 C17.75184,17.6719969 19.57712,19.4672156 19.57712,21.6768094 Z" />
      <path d="M6.834508,9.12636563 C6.834508,4.42442812 10.716948,0.609740625 15.503348,0.609740625 C20.289748,0.609740625 24.169708,4.42442812 24.169708,9.12636563"/>
      <path fill="#fff" d="M15.502356,25.6806469 L15.502356,31.0650844"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default seguranca
