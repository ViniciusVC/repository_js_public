import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const TooltipBalloon = styled.span`
  display: none;
  position: absolute;
  
  ${({direction}) => {
    switch (direction) {
      case 'right':
        return css`
          left: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'left':
        return css`
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'bottom':
        return css`
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'top':
      default:
        return css`
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0.5em 0.75em;

  word-wrap: break-word;
  opacity: 0;
  z-index: 10001;
  
  ${({multiple}) => !multiple && 'white-space: pre;'}

  &::before {
    content: "\00a0";
    display: block;
    position: absolute;

  ${({direction}) => {
    switch (direction) {
      case 'right':
        return css`
          left: -5px;
          top: 50%;
          transform: translateY(-50%) rotate( 45deg );
        `;
      case 'left':
        return css`
          right: -5px;
          top: 50%;
          transform: translateY(-50%) rotate( 45deg );
        `;
      case 'bottom':
        return css`
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) rotate( 45deg );
        `;
      case 'top':
      default:
        return css`
          top: 20px;
          left: 50%;
          transform: translateX(-50%) rotate( 45deg );
        `;
    }
  }}
    
    width:  20px;
    height: 20px;
    
    background-color: #fff;
    box-shadow: 0 0 3px rgba( 0,0,0,.2 );
    
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    
    background-color: #fff;
    width: 100%;
    height: 100%;
    
    border-radius: 4px;
    
    z-index: -1;
  }
`;

const BaseTooltip = styled.span.attrs({tabIndex: 0})`
  position: relative;

  outline: none;

  @keyframes tooltip-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover,
  &:active,
  &:focus {
    ${TooltipBalloon} {
      display: inline-block;
      animation-name: tooltip-appear;
      animation-delay: 0.4s;
      animation-duration: 0.1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
    }
  }
`;

const Tooltip = ({
  text, children, multiple, direction, ...props
}) => (
  <BaseTooltip {...props}>
    <TooltipBalloon multiple={multiple} direction={direction}>
      {typeof text === 'function' ? text() : text}
    </TooltipBalloon>
    {children}
  </BaseTooltip>
);

Tooltip.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ]).isRequired,
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Tooltip.defaultProps = {
  multiple: false,
  direction: 'top'
};

export default Tooltip;
