import React from "react";
import Gradiente from '../gradiente.js';

export const mobileB = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 30 51" xmlns="http://www.w3.org/2000/svg">
    <g class="icon-smartphone" fill={fillColor} fill-rule="evenodd">
      <path d="M1.535 40.467h26.93V10.196H1.535v30.271zm26.93 4.61c0 .163-.217 4.108-4.39 4.423H6.157c-.689 0-4.13-.21-4.62-4.275v-3.258h26.929v3.11zM1.535 5.864c.016-.163.309-3.974 4.084-4.365h18.747c.138 0 3.514.151 4.099 4.322v2.875H1.535V5.865zM24.381 0H5.53C1.397.435.107 3.975 0 5.822v39.493C.677 50.837 5.604 51 6.156 51h17.98c4.452-.33 5.786-3.974 5.864-5.895V5.717C29.232.137 24.44 0 24.381 0z"></path>
      <path d="M14.348 45.401c0-.685.586-1.242 1.305-1.242.72 0 1.304.557 1.304 1.242 0 .693-.584 1.245-1.304 1.245-.719 0-1.305-.552-1.305-1.245zM13.043 4.976h3.914V3.732h-3.914z"></path>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default mobileB;
