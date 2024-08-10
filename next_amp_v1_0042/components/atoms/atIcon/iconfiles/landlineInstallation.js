import React from 'react';
import Gradiente from '../gradiente.js';

export const landlineInstallation = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.2 3C18.5 3 19.7 3.5 20.6 4.4C21.5 5.3 22 6.6 22 7.8C22 9 21.5 10.2 20.6 11.1L19.2 9.7C19.7 9.2 20 8.6 20 7.8C20 7 19.7 6.3 19.1 5.8C18 4.7 16.3 4.7 15.2 5.8L13.8 4.4C14.7 3.5 15.9 3 17.2 3ZM17.9 7.2L16.3 11.4L15.7 9.4L13.7 8.8L17.9 7.2ZM18.3 14.6C17.4 14.1 14.7 13.2 12.9 13.3C12.2 13.3 11.6 13.6 11.2 14.2C10.6 13.7 10 13.1 9.5 12.5C10.1 12.1 10.4 11.7 10.5 10.8C10.5 10.8 11 3.4 6.8 4.5C3.9 5.3 2 7.7 2 10.5C2 10.8314 2.06863 11.0941 2.14903 11.4019C2.16569 11.4657 2.18284 11.5314 2.2 11.6C2.7 13.6 6.9 20.5 12.2 21.7C12.6 21.8 13 21.8 13.4 21.8C16.3 21.8 18.7 19.8 19.4 17V16.8C19.6 15.9 19.2 15.1 18.3 14.6ZM7.5 16.4C8.7 17.6 11.1 19.8 13.4 19.9C16.9 20.1 17.4 16.4 17.4 16.4C15.1 15 13.1 15.3 13.1 15.3L12.3 17.1C9.9 16 8 14.1 6.9 11.7L8.7 10.8C8.8 10 8.2 6.1 7.4 6.3C5.7 6.7 4.2 8.4 4.2 10.4C4.2 12.6 6.3 15.2 7.5 16.4Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default landlineInstallation;
