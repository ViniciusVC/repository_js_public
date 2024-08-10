import React from 'react'
import Gradiente from '../gradiente.js';

export const caret = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 7 15" height="15px" width="7px" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path d="M.198 12.566c-.33.443-.238 1.07.204 1.4.443.33 1.07.238 1.4-.204L6.73 7.15 1.808.41C1.482-.036.856-.133.41.192c-.446.326-.543.952-.218 1.398l4.053 5.548-4.047 5.428z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default caret
