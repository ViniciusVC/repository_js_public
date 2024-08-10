import React from "react";
import Gradiente from '../gradiente.js';

export const comboC = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 42 41" xmlns="http://www.w3.org/2000/svg" fill={fillColor}>
    <g xmlns="http://www.w3.org/2000/svg">
      <path
        xmlns="http://www.w3.org/2000/svg"
        id="b"
        fill={fillColor}
        d="m.007 0-.007 39h5v-1.694h-3.3l.033-35.612 3.267-.05v-1.644zm34.993 0v1.697h3.334l.043 35.609h-3.377v1.694h4.991l.009-39z"
      />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default comboC;
