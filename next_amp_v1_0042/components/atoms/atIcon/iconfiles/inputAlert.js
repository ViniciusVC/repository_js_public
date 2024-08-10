import React from 'react';
//import PropTypes from 'prop-types';
import Gradiente from '../gradiente.js';

export const inputAlert = (id, fillColor, ColorGradient1, ColorGradient2) => (
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" strokeWidth="1" fill={fillColor} fillRule="evenodd">
      <path d="M12,0 C18.6167324,0 24,5.38336219 24,12 C24,18.6168081 18.6167324,24 12,24 C5.38326761,24 0,18.6168081 0,12 C0,5.38336219 5.38326761,0 12,0 Z M2.38888889,12 C2.38888889,17.2996048 6.70046384,21.6111111 12,21.6111111 C17.2995362,21.6111111 21.6111111,17.2996048 21.6111111,12 C21.6111111,6.7005491 17.2995362,2.38888889 12,2.38888889 C6.70046384,2.38888889 2.38888889,6.7005491 2.38888889,12 Z M11.2658808,13.9985896 L11.2658808,4.46682795 L13.1120347,4.46682795 L13.1120347,13.9985896 L11.2658808,13.9985896 Z M11.2658808,18.9985896 L11.2658808,16.466828 L13.1120347,16.466828 L13.1120347,18.9985896 L11.2658808,18.9985896 Z" id="path-alert" />
    </g>
    <Gradiente id={id} Color1={ColorGradient1} Color2={ColorGradient2}/>
  </svg>
);

// inputAlert.propTypes = {
//   fillColor: PropTypes.string.isRequired
// };

export default inputAlert;
