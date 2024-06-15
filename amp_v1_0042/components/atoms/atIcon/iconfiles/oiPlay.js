import React from 'react';
import Gradiente from '../gradiente.js';

export const vvcplay = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg fill={fillColor} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.4095 2.5H20.4995C21.6452 2.5 22.5045 3.35928 22.6 4.4095V14.8163C22.6 15.8665 21.6452 16.7258 20.595 16.7258H15.8213L16.3941 18.8262H19.6403V20.7357H4.36425V18.8262H7.70588L8.27873 16.8213H3.50498C2.35928 16.8213 1.5 15.962 1.5 14.9118V4.4095C1.5 3.35928 2.35928 2.5 3.4095 2.5ZM9.71086 18.6353H14.2937L13.8163 16.7258H10.1882L9.71086 18.6353ZM20.4995 14.8163H15.2484H8.75611L3.4095 14.9118V4.4095H20.595L20.4995 14.8163ZM15.8213 10.0425L10.0928 13.0977V6.98733L15.8213 10.0425Z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default vvcplay;
