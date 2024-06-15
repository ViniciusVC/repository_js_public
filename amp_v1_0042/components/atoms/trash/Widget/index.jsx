import React from 'react';
import PropTypes from 'prop-types';
import { border, shadow, flex, radius } from '../../../theme';
import StyledWidget from './styled';

const Widget = props =>
  (
    <StyledWidget className="widget" {...props}><div>{props.children}</div></StyledWidget>
  );

// Documentation
const propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

Widget.propTypes = propTypes;

const defaultProps = {
  children: null,
  theme: {
    border,
    shadow,
    radius,
    flex,
  },
};

Widget.defaultProps = defaultProps;

export default Widget;
