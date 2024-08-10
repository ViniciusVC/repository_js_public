import React from 'react';
import Gradiente from '../gradiente.js';

export const tvSignal = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3 4V2C18.3 2 22.3 6 22.3 11H20.3C20.3 7.1 17.1 4 13.3 4ZM4.7 6.5C2.9 8.3 2 10.6 2 13.1C2 15.6 3 17.9 4.7 19.7C6.4 21.5 8.8 22.4 11.3 22.4C13.8 22.4 16.1 21.4 17.9 19.7L18.6 19L5.4 5.8L4.7 6.5ZM15.6 18.9C14.3 19.9 12.8 20.4 11.2 20.4C9.3 20.4 7.4 19.6 6.1 18.3C4.7 16.9 4 15.1 4 13.2C4 11.6 4.5 10.1 5.5 8.8L15.6 18.9ZM18.3 10.7C18.3 8.2 16.3 6.2 13.8 6.2V8.2C15.2 8.2 16.3 9.3 16.3 10.7H18.3ZM12.5838 9.0199L10.816 10.7876L13.5302 13.5018L15.298 11.7341L12.5838 9.0199Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default tvSignal;
