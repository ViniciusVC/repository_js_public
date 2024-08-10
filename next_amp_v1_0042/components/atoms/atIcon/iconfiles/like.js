import React from 'react';
import Gradiente from '../gradiente.js';

export const like = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19">
    <g fill={fillColor} fillRule="evenodd">
      <path d="M0 19h1.976c.544 0 .989-.475.989-1.056v-9.5c0-.58-.445-1.055-.989-1.055H0V19zm19.596-7.516c.109-.263.168-.548.168-.844V9.5c0-1.161-.89-2.111-1.976-2.111h-5.435l.909-4.908c.05-.233.02-.486-.08-.697a5.072 5.072 0 0 0-.869-1.288L11.86 0 5.524 6.766c-.375.401-.583.94-.583 1.499v8.276C4.941 17.89 5.98 19 7.253 19h8.015c.692 0 1.344-.39 1.7-1.024l2.628-6.492z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default like;
