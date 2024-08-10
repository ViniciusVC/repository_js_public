import React from 'react';
import {withTheme} from 'styled-components';
import {resolveColor} from '../../../helpers';

const Caret = withTheme(({
  color, theme, size, ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{...props.style, pointerEvents: 'none'}}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8L12.5 16L20 8H5Z"
        fill={resolveColor(color, theme)}
      />
    </g>
  </svg>
));

Caret.defaultProps = {
  size: 24
};

export default Caret;
