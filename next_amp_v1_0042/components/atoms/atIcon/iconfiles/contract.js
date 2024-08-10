import React from 'react';
import Gradiente from '../gradiente.js';

export const contract = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21 1H3C2.4 1 2 1.4 2 2V22C2 22.6 2.4 23 3 23H14.9C15.2 23 15.4 22.9 15.6 22.7L21.7 16C21.9 15.8 22 15.6 22 15.3V2C22 1.5 21.5 1 21 1ZM17.8 5H6V7H17.8V5ZM6 9H17.8V11H6V9ZM17.8 13H6V15H17.8V13ZM10 18.05C9.975 18 9.95 17.95 9.9 17.9C9.4 18 7.8 18.7 6.3 19.5L5.3 17.8C6.3 17.2 8.8 15.9 9.9 15.9C10.9636 15.9 11.4662 16.7414 11.7695 17.2491L11.8 17.3C11.85 17.35 11.9 17.425 11.95 17.5C12 17.575 12.05 17.65 12.1 17.7C12.4 17.8 12.8 17.8 13.1 17.8L13.2 19.8H12.9C12.5686 19.8 12.2373 19.7314 11.8491 19.651L11.8491 19.651L11.849 19.651L11.8487 19.6509L11.848 19.6508C11.7679 19.6342 11.6854 19.6171 11.6 19.6C10.8031 19.4229 10.4766 18.8538 10.204 18.3787C10.1687 18.3172 10.1344 18.2573 10.1 18.2C10.05 18.15 10.025 18.1 10 18.05ZM14.5 21L20 14.9V3H4V21H14.5Z" fill={fillColor}/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default contract;
