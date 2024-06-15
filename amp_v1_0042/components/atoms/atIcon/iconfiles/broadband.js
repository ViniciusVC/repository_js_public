import React from 'react';
import Gradiente from '../gradiente.js';

export const broadband = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
          <path d="M12.5,0.5 C5.9,0.5 0.5,5.9 0.5,12.5 C0.5,19.1 5.9,24.5 12.5,24.5 C19.1,24.5 24.5,19.1 24.5,12.5 C24.5,5.9 19.1,0.5 12.5,0.5 Z M21.98,11.3 L17.54,11.3 C17.42,8.42 16.94,5.66 15.98,3.62 C19.22,4.82 21.62,7.82 21.98,11.3 Z M12.5,22.1 C11.78,22.1 10.1,19.22 9.86,13.7 L15.14,13.7 C14.9,19.22 13.22,22.1 12.5,22.1 Z M9.86,11.3 C10.1,5.78 11.78,2.9 12.5,2.9 C13.22,2.9 14.9,5.78 15.14,11.3 L9.86,11.3 Z M9.02,3.62 C8.06,5.66 7.58,8.42 7.46,11.3 L3.02,11.3 C3.38,7.82 5.78,4.82 9.02,3.62 Z M3.02,13.7 L7.46,13.7 C7.58,16.58 8.06,19.46 9.02,21.38 C5.78,20.18 3.38,17.18 3.02,13.7 Z M15.98,21.38 C16.94,19.34 17.42,16.58 17.54,13.7 L21.98,13.7 C21.62,17.18 19.22,20.18 15.98,21.38 Z" id="path-broadband" />
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
)

export default broadband;
