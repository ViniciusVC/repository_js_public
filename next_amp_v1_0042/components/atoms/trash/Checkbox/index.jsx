import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {setSizes, rem, resolveColor} from '../../../helpers';
import Check from '../Check';

const StyledCheckbox = styled.div`
  position: relative;

  width: ${({size}) => rem(size)};
  height: ${({size}) => rem(size)};
  border: 1px solid ${({color, theme}) => resolveColor(color, theme)};
  border-radius: 4px;
  margin: ${({margin}) => setSizes(margin)};

  box-sizing: border-box;
  outline: none;

  flex-shrink: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;

    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 2px solid ${({hoverColor, theme}) => resolveColor(hoverColor, theme)};
    border-radius: 4px;

    opacity: 0;
    transition: opacity .15s ease-in-out;
  }

  &:focus,
  &:hover {
    outline: 0;

    &:after{
      opacity: 1;
    }
  }

  ${({isHovered}) => isHovered && css`
    outline: 0;

    &:after{
      opacity: 1;
    }
  `}
`;

const Checkbox = ({
  checked, color, hoverColor, isHovered, ...props
}) => (
  <StyledCheckbox
    color={color}
    hoverColor={hoverColor}
    isHovered={isHovered}
    {...props}
  >
    {checked && <Check size="calc(1em - 1px)" style={{position: 'absolute', top: 0, left: 0}} color={isHovered ? hoverColor : color} />}
  </StyledCheckbox>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool,
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

Checkbox.defaultProps = {
  isHovered: false,
  color: '#aeaeae',
  hoverColor: '#909090'
};

export default Checkbox;
