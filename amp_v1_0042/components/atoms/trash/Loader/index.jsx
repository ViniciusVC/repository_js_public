import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const StyledIcon = styled(Icon)``;

const StyledLoader = styled.div`
  position: relative;
  display: flex;
  
  ${StyledIcon} {
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }
    animation: infinite rotate 2s linear; 
  }

  & span{
    margin-left: 10px;
    padding-top: 8px;
  }
`;

const Loader = ({
  title, color, size, ...props
}) => (
  <StyledLoader {...props}>
    <StyledIcon type="loading" size={size} fillColor={color} />
    <span>{title}</span>
  </StyledLoader>
);

Loader.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
Loader.defaultProps = {
  title: '',
  size: 32,
  color: 'primary'
};

export default Loader;
