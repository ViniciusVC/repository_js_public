import React from 'react';
import PropTypes from 'prop-types';
import StyledTooltip from './styled';

const Tooltip = props => (
  <StyledTooltip position={props.position} show={props.show} width={props.width}>{props.children}</StyledTooltip >);


Tooltip.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  position: PropTypes.string,
  width: PropTypes.string
};

Tooltip.defaultProps = {
  show: false,
  children: null,
  position: null,
  width: '140px'
};

export default Tooltip;
