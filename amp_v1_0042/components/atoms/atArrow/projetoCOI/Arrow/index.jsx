import PropTypes from 'prop-types';
import React from 'react';

import { primary } from '../../theme';
import StyledArrow from './styled';

// components/atoms/Arrow/index.jsx

const Arrow = props => (
  <StyledArrow {...props}>
    <svg width="12px" height="8px" viewBox="0 0 12 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <polygon id="chevron" points="7.41 8 12 12.9446694 16.59 8 18 9.52226721 12 16 6 9.52226721" />
      </defs>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Interface/Seta-expandir" transform="translate(-6.000000, -8.000000)">
          <mask id="mask-2" fill="white">
            <use xlinkHref="#chevron" />
          </mask>
          <use id="Seta-expandir" fill="#D82482" fillRule="nonzero" xlinkHref="#chevron" />
        </g>
      </g>
    </svg>
  </StyledArrow>
);

Arrow.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
};

Arrow.defaultProps = {
  theme: {
    primary,
  },
};

export default Arrow;
