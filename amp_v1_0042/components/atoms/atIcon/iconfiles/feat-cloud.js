import React from 'react'
import Gradiente from '../gradiente.js';

export const feat_cloud = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 95 65" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} transform="translate(-276 -356)">
      <path d="M357.07 421H297.12c-11.64 0-21.122-9.536-21.122-21.245 0-8.887 5.58-16.834 13.737-19.915-.096-.876-.16-1.72-.16-2.595 0-11.71 9.48-21.245 21.12-21.245 8.643 0 16.318 5.287 19.543 13.17 3.45-2.272 7.48-3.504 11.64-3.504 11.642 0 21.123 9.536 21.123 21.245 0 2.4-.387 4.736-1.16 6.942 5.416 1.978 9.157 7.2 9.157 13.136 0 7.752-6.256 14.012-13.93 14.012zm-46.372-61.075c-9.513 0-17.252 7.784-17.252 17.352 0 1.2.13 2.368.354 3.536l.355 1.784-1.74.486c-7.418 2.076-12.578 8.952-12.578 16.704 0 9.57 7.74 17.353 17.253 17.353h59.947c5.547 0 10.06-4.54 10.06-10.12 0-4.897-3.45-9.05-8.254-9.925l-2.483-.454 1.064-2.302c1.096-2.335 1.645-4.833 1.645-7.395 0-9.568-7.74-17.353-17.254-17.353-4.16 0-8.19 1.525-11.35 4.282l-2.355 2.076-.773-3.05c-1.902-7.654-8.77-12.973-16.64-12.973z"/>
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default feat_cloud;
