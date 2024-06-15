// import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const VERTICAL_DIRECTION = 'vertical';
const HORIZONTAL_DIRECTION = 'horizontal';

const ScrollbarTrack = styled.div`
  position: absolute;
  display: inline-block;
  border-radius: 5px;
  padding: ${({padding}) => `${padding}px`};

  box-sizing: content-box;

  pointer-events: none;

  ${({direction, size}) => {
    switch (direction) {
      case HORIZONTAL_DIRECTION:
        return css`
          height: ${size}px;
          left: 0;
          right: 0;
          bottom: 0;
        `;
      case VERTICAL_DIRECTION:
      default:
        return css`
          width: ${size}px;
          top: 0;
          bottom: 0;
          right: 0;
        `;
    }
  }}
`;

ScrollbarTrack.VERTICAL_DIRECTION = VERTICAL_DIRECTION;
ScrollbarTrack.HORIZONTAL_DIRECTION = HORIZONTAL_DIRECTION;

ScrollbarTrack.propTypes = {
  direction: PropTypes.oneOf([VERTICAL_DIRECTION, HORIZONTAL_DIRECTION])
    .required,
  size: PropTypes.number,
  padding: PropTypes.number
};

ScrollbarTrack.defaultProps = {
  size: 10,
  padding: 5
};

export default ScrollbarTrack;
