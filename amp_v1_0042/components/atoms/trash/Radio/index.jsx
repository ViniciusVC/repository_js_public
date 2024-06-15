import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {rem, resolveColor} from '../../../helpers';
import Check from '../Check';

const StyledRadio = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({size}) => rem(size)};
  height: ${({size}) => rem(size)};
  margin-right: 0.5em;
  border: 1px solid ${({color, theme}) => resolveColor(color, theme)};
  border-radius: 50%;

  flex-shrink: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;

    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 2px solid
      ${({hoverColor, theme}) => resolveColor(hoverColor, theme)};
    border-radius: 50%;

    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  &:hover,
  &:focus,
  input[type='radio']:focus + & {
    outline: 0;

    &::after {
      opacity: 1;
    }
  }

  ${({isHovered}) => isHovered
    && css`
      outline: 0;

      &::after {
        opacity: 1;
      }
    `}
`;

const Radio = ({
  checked, color, hoverColor, isHovered, ...props
}) => (
  <StyledRadio
    color={color}
    hoverColor={hoverColor}
    isHovered={isHovered}
    {...props}
  >
    {checked && <Check size="0.9em" color={isHovered ? hoverColor : color} />}
  </StyledRadio>
);

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  isHovered: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radio.defaultProps = {
  isHovered: false,
  color: '#aeaeae',
  hoverColor: '#909090',
  size: 16
};

export default Radio;
