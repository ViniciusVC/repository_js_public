import React from 'react'
import Gradiente from '../gradiente.js';

export const feat_antivirus = (id,fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg">
    <g fill={fillColor} transform="translate(-588 -348)">
      <path d="M645.716 368.675v-13.307h-20.262l-8.53-7.368-8.533 7.368h-20.26v49.268l28.793 16.196 7.206-3.993c3.166 1.363 6.69 2.142 10.34 2.142 14.51 0 26.306-11.847 26.306-26.42 0-10.548-6.173-19.636-15.06-23.887zm-28.793 48.067l-25.27-14.216v-43.588h18.03l7.24-6.232 7.24 6.232h18.03v8.34c-2.423-.746-5.008-1.167-7.69-1.167-14.51 0-26.306 11.847-26.306 26.42 0 9.347 4.88 17.59 12.216 22.297l-3.49 1.915zm17.547-1.363c-12.538 0-22.75-10.257-22.75-22.85 0-12.593 10.212-22.85 22.75-22.85 12.54 0 22.75 10.257 22.75 22.85 0 12.625-10.21 22.85-22.75 22.85zm6.043-37.877l1.228 1.233-3.553 3.57-3.103-3.116-2.068 2.078 1.97 1.98-14.218 14.28 3.36 3.376-4.588 4.608 2.07 2.077 4.587-4.61 3.36 3.376 14.22-14.28 1.972 1.98 2.067-2.078-3.102-3.116 3.554-3.57 1.227 1.233 2.07-2.077-8.985-9.023-2.07 2.078zm-10.955 24.73l-4.685-4.705 12.183-12.236 4.685 4.706-12.182 12.236zm13.088-15.415l-2.423-2.435 3.554-3.57 2.424 2.434-3.554 3.57z" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

export default feat_antivirus
