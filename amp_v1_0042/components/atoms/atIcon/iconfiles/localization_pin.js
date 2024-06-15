import React from 'react';
import Gradiente from '../gradiente.js';

export const localization_pin = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 11.2C5 5.008 10.008 0 16.2 0C22.392 0 27.4 5.008 27.4 11.2C27.4 19.6 16.2 32 16.2 32C16.2 32 5 19.6 5 11.2ZM12.2 11.2C12.2 13.408 13.992 15.2 16.2 15.2C18.408 15.2 20.2 13.408 20.2 11.2C20.2 8.992 18.408 7.2 16.2 7.2C13.992 7.2 12.2 8.992 12.2 11.2Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default localization_pin;
