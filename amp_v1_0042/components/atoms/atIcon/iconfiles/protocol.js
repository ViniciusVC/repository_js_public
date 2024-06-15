import React from 'react';
import Gradiente from '../gradiente.js';

export const protocol = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7.1H19V4C19 2.9 18.1 2 17 2H4C2.9 2 2 2.9 2 4V21C2 22.1 2.9 23 4 23H17C18.1 23 19 22.1 19 21V18H20C21.1 18 22 17.1 22 16V9.1C22 8 21.1 7.1 20 7.1ZM15.5 9.7H16.5L16.1 11.1H16.6V12.1H15.8L15.6 12.9H16.4V13.9H15.4L15 15.3H14L14.4 13.9H13.4L13 15.3H12L12.4 13.9H11.9V12.9H12.7L12.9 12.1H12.1V11.1H13.1L13.5 9.7H14.5L14.1 11.1H15.1L15.5 9.7ZM4 4V21H17V18H8C6.9 18 6 17.1 6 16V9.1C6 8 6.9 7.1 8 7.1H17V4H4ZM19 16H17H8V9.1H17H19H20V16H19Z" fill={fillColor} />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default protocol;
