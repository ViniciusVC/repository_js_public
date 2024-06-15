import React from 'react';
import Gradiente from '../gradiente.js';

const historico = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.28571 9C3.28571 5.13444 6.35619 2 10.1429 2C13.9295 2 17 5.13444 17 9C17 12.8656 13.9295 16 10.1429 16C8.24571 16 6.53905 15.2144 5.29714 13.9467L6.37905 12.8422C7.33905 13.83 8.67238 14.4444 10.1429 14.4444C13.0914 14.4444 15.4762 12.01 15.4762 9C15.4762 5.99 13.0914 3.55556 10.1429 3.55556C7.19429 3.55556 4.80952 5.99 4.80952 9H7.09524L4.01714 12.1344L3.96381 12.0256L1 9H3.28571ZM9.57143 9.95159V6.08333H10.7714V9.37135L13.5714 10.9805L12.9954 11.9167L9.57143 9.95159Z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export { historico };
export default historico;
