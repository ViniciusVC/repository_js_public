
import React from 'react';
import Gradiente from '../gradiente.js';

export const book = (id,fillColor, ColorGradient1, ColorGradient2) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill={fillColor} fillRule="evenodd">
        <path id="a" d="M14.286 8.724h6.325v2.181h-6.325v-2.18zm0 3.272h3.053v2.18h-3.053v-2.18zm0-6.543h6.325v2.18h-6.325v-2.18zm-9.924 0h4.144v7.524H4.362V5.453zM21.811.109h-7.634c-.327 0-.545.11-.763.327l-1.418 1.309L10.578.327C10.36.11 10.142 0 9.815 0H2.18C.981 0 0 .981 0 2.181v14.177c0 1.2.981 2.181 2.181 2.181H9.27l1.962 1.854c.219.218.437.327.764.327.218 0 .545-.109.763-.327l1.963-1.854h7.089c1.2 0 2.18-.981 2.18-2.181V2.181c.11-1.2-.872-2.072-2.18-2.072zM9.706 16.358H2.18V2.181H9.38l1.526 1.527v13.304l-.436-.327c-.218-.218-.436-.327-.763-.327zm12.105 0h-7.634c-.327 0-.545.109-.763.327l-.328.327V3.708l1.527-1.527h7.307l-.11 14.177c.11 0 .11 0 0 0z"/>
        </g>
        <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
      </svg>
      )

export default book;
