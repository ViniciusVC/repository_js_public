import React from 'react';
import Gradiente from '../gradiente.js';

export const cart = (id,fillColor, ColorGradient1, ColorGradient2) => {
  return(
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.6 7C21.9 7 22.2 7.1 22.3 7.4C22.5 7.6 22.6 8 22.6 8.3L20.6 15.3C20.4 15.7 20 16 19.6 16H8.6C8.1 16 7.7 15.7 7.6 15.3L4.3 5H2V3H5C5.5 3 5.9 3.3 6 3.7L9.3 14H18.8L20.2 9H10V7H21.6ZM11 21.5C12.1046 21.5 13 20.6046 13 19.5C13 18.3954 12.1046 17.5 11 17.5C9.89543 17.5 9 18.3954 9 19.5C9 20.6046 9.89543 21.5 11 21.5ZM17 21.5C18.1046 21.5 19 20.6046 19 19.5C19 18.3954 18.1046 17.5 17 17.5C15.8954 17.5 15 18.3954 15 19.5C15 20.6046 15.8954 21.5 17 21.5Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>

);
  }
export default cart;
