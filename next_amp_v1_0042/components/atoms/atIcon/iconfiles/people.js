import React from 'react';
import Gradiente from '../gradiente.js';

export const people = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.984 9.8C15.984 12.456 13.856 14.6 11.2 14.6C8.544 14.6 6.4 12.456 6.4 9.8C6.4 7.144 8.544 5 11.2 5C13.856 5 15.984 7.144 15.984 9.8ZM27.184 12.2C27.184 14.408 25.408 16.2 23.2 16.2C20.992 16.2 19.2 14.408 19.2 12.2C19.2 9.992 20.992 8.2 23.2 8.2C25.408 8.2 27.184 9.992 27.184 12.2ZM23.2 19.4C20.272 19.4 14.4 20.872 14.4 23.8V27.4H32V23.8C32 20.872 26.128 19.4 23.2 19.4ZM0 23.4C0 19.672 7.472 17.8 11.2 17.8C12.256 17.8 13.6 17.96 14.992 18.248C11.728 20.056 11.2 22.44 11.2 23.8V27.4H0V23.4Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default people;
