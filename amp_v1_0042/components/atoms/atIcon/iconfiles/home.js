import React from 'react';
import Gradiente from '../gradiente.js';

export const home = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.2941 10.3529L24 12.9412L22.4706 14.5882L21.4118 13.6471V20.8235C21.4118 21.5294 20.9412 22 20.2353 22H14.3529C13.6471 22 13.1765 21.5294 13.1765 20.8235V16.1176H10.8235V20.8235C10.8235 21.5294 10.3529 22 9.64706 22H3.76471C3.52941 22 3.17647 21.8824 2.94118 21.6471C2.70588 21.4118 2.58824 21.1765 2.58824 20.8235V13.6471L1.64706 14.7059L0 12.9412L2.82353 10.3529C2.82353 10.2353 2.94118 10.1176 3.05882 10L10.5882 2.94118L11.1765 2.35294C11.4118 2.11765 11.7647 2 12 2C12.2353 2 12.5882 2.11765 12.8235 2.35294L21.0588 10C21.1176 10.0588 21.1471 10.1176 21.1765 10.1765C21.2059 10.2353 21.2353 10.2941 21.2941 10.3529ZM15.5294 19.6471H19.0588V11.5294L12 4.82353L4.94118 11.4118V19.6471H8.47059V14.9412C8.47059 14.2353 8.94118 13.7647 9.64706 13.7647H14.3529C15.0588 13.7647 15.5294 14.2353 15.5294 14.9412V19.6471Z" fill={fillColor} />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default home;
