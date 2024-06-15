import React from 'react'
import Gradiente from '../gradiente.js';

export const consumptionProfile = (id,fillColor, ColorGradient1, ColorGradient2) => (
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="14" viewBox="0 0 16 14">
        <defs>
            <path id="a" d="M10.667 9.333v-4h2v4h-2zm-3.334 0V2.667h2v6.666h-2zm-4 0v-6h2v6h-2zM15.266 0H.734C.294 0 0 .296 0 .74v11.853c0 .444.294.74.734.74h14.532c.44 0 .734-.296.734-.74V.74C16 .296 15.706 0 15.266 0zm-.933 11.667H1.667v-10h12.666v10z" />
        </defs>
        <g fill={fillColor} fill-rule="evenodd" transform="translate(0 .333)">
            <mask id="b" fill="#fff">
            </mask>
            <use fill={fillColor} fill-rule="nonzero" href="#a" />
            <g fill={fillColor}  mask="url(#b)">
                <path d="M-.727-2.182h17v17h-17z" />
            </g>
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
    </svg>
);

export default consumptionProfile