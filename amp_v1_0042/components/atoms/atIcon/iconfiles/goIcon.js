import React from 'react'
import Gradiente from '../gradiente.js';

export const goIcon = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.6 489.6" fill={fillColor}>
	<g>
		<ellipse fill={fillColor} cx="245" cy="245" rx="245" ry="245" />
		<path fill="white" d="M210,326.1c1.9,1.9,4.5,2.9,7,2.9s5.1-1,7-2.9l74.3-74.3c1.9-1.9,2.9-4.4,2.9-7s-1-5.1-2.9-7
			L224,163.5c-3.9-3.9-10.1-3.9-14,0s-3.9,10.1,0,14l67.3,67.3L210,312.1C206.2,316,206.2,322.3,210,326.1z"/>
	</g>
  <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
</svg>
);

export default goIcon
