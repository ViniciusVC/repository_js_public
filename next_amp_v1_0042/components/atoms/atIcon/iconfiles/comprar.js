import React from 'react';
import Gradiente from '../gradiente.js';

export const comprar = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}fillRule="evenodd">
      <path d="M16.21 6.9873L11.8301 0.42041C11.7593 0.315918 11.6704 0.230957 11.5701 0.165527C11.4014 0.0551758 11.2007 0 11 0C10.6799 0 10.3601 0.140137 10.1699 0.43042L5.79004 6.9873H1C0.449951 6.9873 0 7.43774 0 7.98853C0 8.07861 0.0100098 8.1687 0.0400391 8.25879L2.58008 17.5386C2.81006 18.3794 3.58008 19 4.5 19H17.5C18.4199 19 19.1899 18.3794 19.4299 17.5386L21.97 8.25879L22 7.98853C22 7.43774 21.55 6.9873 21 6.9873H16.21ZM8 7L11 3L14 7H8ZM9 13C9 14.1001 9.8999 15 11 15C12.1001 15 13 14.1001 13 13C13 11.8999 12.1001 11 11 11C9.8999 11 9 11.8999 9 13Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default comprar;
