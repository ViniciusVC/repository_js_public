import React from 'react'
import Gradiente from '../gradiente.js';

export const feat_wifi = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 84 60" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} transform="translate(-437 -354)">
      <path d="M517.98 375c-10.32-10.812-24.18-16.76-38.98-16.76-14.8 0-28.66 5.948-38.98 16.76l-3.02-2.958C448.133 360.408 463.03 354 479 354c15.97 0 30.9 6.408 42 18.042L517.98 375zM480 414c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm25.046-29c-6.893-7.044-16.136-10.943-26.046-10.943s-19.153 3.9-26.046 10.943L450 382.17c7.687-7.862 17.978-12.17 29-12.17 11.022 0 21.313 4.34 29 12.17l-2.954 2.83zm-12.082 14c-3.706-4.177-8.69-6.475-13.996-6.475-5.304 0-10.29 2.298-13.996 6.475L462 395.867c4.506-5.082 10.545-7.867 17-7.867s12.494 2.785 17 7.867L492.964 399z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default feat_wifi
