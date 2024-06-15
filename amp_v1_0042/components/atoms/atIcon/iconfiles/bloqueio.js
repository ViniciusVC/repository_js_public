import React from 'react';
import Gradiente from '../gradiente.js';

export const bloqueio = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
        <g fill={fillColor} fillRule="evenodd">
          <path d="M12 0C5.376 0 0 5.6 0 12.5S5.376 25 12 25s12-5.6 12-12.5S18.624 0 12 0zM2.4 12.578C2.4 7.01 6.73 2.5 12.074 2.5c2.238 0 4.293.794 5.926 2.129L4.444 18.75A10.22 10.22 0 0 1 2.4 12.578zm9.526 9.922A9.317 9.317 0 0 1 6 20.371L19.556 6.25a10.22 10.22 0 0 1 2.044 6.172c0 5.568-4.33 10.078-9.674 10.078z" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default bloqueio;
