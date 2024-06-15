
import React from 'react';
import Gradiente from '../gradiente.js';

export const bell = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill={fillColor} fillRule="evenodd">
          <path id="a" d="M12 22c1.1 0 2-.923 2-2.051h-4c0 1.128.89 2.051 2 2.051zm6-6.154v-5.128c0-3.149-1.64-5.785-4.5-6.482v-.698C13.5 2.688 12.83 2 12 2s-1.5.687-1.5 1.538v.698C7.63 4.933 6 7.559 6 10.718v5.128l-2 2.051v1.026h16v-1.026l-2-2.05z" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default bell;
