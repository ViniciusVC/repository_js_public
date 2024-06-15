import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import * as mixins from '../../../helpers';
import {
  gradient, secondary, primary, transition
} from '../../../theme';

const Bar = styled.div`
  background: lightgrey;
  position: relative;
  width: calc(100% - 10px);
  height: 20px;
  
  &::before {
    border-bottom: 0.625rem solid transparent;
    border-top: 0.625rem solid transparent;
    content: " ";
    display: block;
    height: 0;
    left: calc(100% - 1px);
    margin-top: -10px;
    position: absolute;
    top: 50%;
    width: 0;
    border-left: 10px solid lightgrey;
  }
`;

const Progress = styled.div`
  position: absolute;
  background: ${({theme, themecolor, color}) => (
    themecolor
      ? `linear-gradient(${mixins.gradient('to right', theme.gradients[themecolor])})`
      : color
  )};
  transition: ${({transition}) => transition || 'none'};
  width: ${({size}) => size}%;
  height: 100%;

  ${({size}) => size
    && size > 0
    && css`
      &:after {
        border-bottom: 0.625rem solid transparent;
        border-top: 0.625rem solid transparent;
        content: " ";
        display: block;
        height: 0;
        left: calc(100% - 1px);
        margin-top: -10px;
        position: absolute;
        top: 50%;
        width: 0;
        border-left: 10px solid ${({theme, themecolor}) => theme.gradients[themecolor][100] || theme.gradients[themecolor].to};
      }
    `};
`;

Progress.propTypes = {
  themecolor: PropTypes.string
};

Progress.defaultProps = {
  themecolor: 'success'
};

const ProgressBar = ({size, ...props}) => (
  <Bar>
    <Progress {...props} size={size} />
  </Bar>
);

// Documentation
ProgressBar.propTypes = {
  size: PropTypes.number
};

ProgressBar.defaultProps = {
  size: 0
};

export default ProgressBar;
