import React from "react";
import Gradiente from '../gradiente.js';

export const arrowdown = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 16 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g fill={fillColor} fillRule="evenodd">
          <polygon
            id="path-arrowdown"
            points="1.88 0 8 6.59289249 14.12 0 16 2.02968961 8 10.6666667 0 2.02968961"
          />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default arrowdown;
