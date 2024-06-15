import React from 'react';
import PropTypes from 'prop-types';
import { border, border2, shadow } from '../../../theme';
import LineStyle from './styled';

const Line = props => <LineStyle {...props} />;

// Documentation
Line.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  margin: PropTypes.string,
  shadow: PropTypes.bool,
  light: PropTypes.bool,
};

Line.defaultProps = {
  margin: '1rem 0',
  shadow: false,
  theme: {
    border,
    border2,
    shadow,
  },
  light: false,
};

export default Line;
