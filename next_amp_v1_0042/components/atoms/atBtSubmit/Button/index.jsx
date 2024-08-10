import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {ifProp} from 'styled-tools';
import {darken, lighten} from 'polished';

import Icon from '../Icon';
import * as mixins from '../../../helpers/styles_mixins';

const StyledButton = styled.button`
  position: relative;

  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  justify-content: center;
  align-content: center;
  align-items: center;

  margin: ${({margin}) => mixins.setSizes(margin)};
  padding: ${({padding}) => mixins.setSizes(padding)};
  width: ${({width}) => width};
  min-width: ${({minwidth}) => minwidth};
  max-width: ${({maxwidth}) => maxwidth};
  height: ${({height}) => height};
  min-height: ${({minheight}) => minheight};
  max-height: ${({maxheight}) => maxheight};
  
  border: 0;
  border-radius: ${({radius}) => mixins.setSizes(radius)};
  
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
  font-size: ${({fontSize}) => mixins.rem(fontSize)};
  text-transform: ${ifProp('uppercase', 'uppercase', 'none')};
  text-decoration: none;

  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  overflow: none;
  outline: 0;
  
  ${({
    theme, color, inverted, fontcolor, gradient, radius
  }) => (inverted
    ? css`
      background-color: transparent;
      color: ${mixins.resolveColor(color, theme)};
      
      &:after {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: ${mixins.setSizes(radius)};

        transition: all 0.2s ease-in-out;
        
        border: 1px solid ${mixins.resolveColor(color, theme)}; 

        ${gradient && css`
          border-image: linear-gradient(${mixins.gradient('to right', theme.gradients[color])});
          border-image-slice: 1;
        `}
      }


      &:hover {
        color: ${lighten(0.1, mixins.resolveColor(color, theme))};  

        &:after {
          border-width: 3px;
        
          border-color: ${lighten(0.1, mixins.resolveColor(color, theme))};
        }
      }

      &:active {
        color: ${darken(0.1, mixins.resolveColor(color, theme))};  
        
        &:after {
          border-color: ${darken(0.1, mixins.resolveColor(color, theme))};
        }
      }
    `
    : css`
      border: 0;
      color: ${fontcolor};

      ${gradient ? css`
        background: linear-gradient(${mixins.gradient('348.69deg', {0: '#f8562c', 35: '#f8562c', 100: '#e92555'})});
        background-size: 200% 100%;
        transition: background-position 0.3 ease-in-out;

        &:hover{
          background-position-x: 50%;
        }

        &:active{
          background-position-x: 100%;
        }
      ` : css`
        background-color: ${mixins.resolveColor(color, theme)};

        &:hover{
          background-color: ${lighten(0.1, mixins.resolveColor(color, theme))};
        }

        &:active{
          background-color: ${darken(0.1, mixins.resolveColor(color, theme))};
        }
      `}

    `)
}
  
  ${({disabled, gradient}) => disabled && css`
    opacity: 0.8;
    cursor: not-allowed;
    pointer-events: none;
    ${gradient && css`
      background-color: #dbdbdb;
      background-image: none;
    `}
  `}

  ${mixins.applyStyle}
  ${mixins.applyBreakpoints}
`;

const Button = ({
  fontSize,
  icon,
  iconPosition,
  onClick,
  customClick,
  customClickParams,
  children,
  ...props
}) => (
  <StyledButton
    onClick={(ev) => {
      customClick ? customClick(customClickParams) : onClick(ev);
    }
    }
    fontSize={fontSize}
    {...props}
  >
    {icon && iconPosition === 'before' && <Icon type={icon} margin={[0, 8, 0, 0]} size={fontSize * 1.5} fillColor="currentColor" />}
    {children}
    {icon && iconPosition === 'after' && <Icon type={icon} margin={[0, 0, 0, 8]} size={fontSize * 1.5} fillColor="currentColor" />}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  customClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.number,
  uppercase: PropTypes.bool,
  bgcolor: PropTypes.string,
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      top: PropTypes.string,
      bottom: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string
    })
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  radius: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.string,
  height: PropTypes.string,
  minwidth: PropTypes.string,
  minheight: PropTypes.string,
  customclick: PropTypes.func,
  customClickParams: PropTypes.shape({}),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  maxwidth: PropTypes.string,
  maxheight: PropTypes.string,
  fontcolor: PropTypes.string
};

Button.defaultProps = {
  width: 'initial',
  height: 'initial',
  minwidth: 'initial',
  minheight: 'initial',
  maxwidth: 'initial',
  maxheight: 'initial',
  margin: [5, 10],
  padding: [19, 50],
  radius: [4],
  color: 'primary',
  fontFamily: 'Simplon, OiTextRegular, simplon_bpregular, sans-serif',
  fontSize: 16,
  fontWeight: 'Regular',
  fontcolor: '#fff',
  disabled: false,
  uppercase: false,
  customClickParams: {},
  iconPosition: 'before',
  icon: undefined
};

export {Button};
export default Button;
