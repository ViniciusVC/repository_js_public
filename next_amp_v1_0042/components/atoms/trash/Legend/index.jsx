import React from 'react';
import PropTypes from 'prop-types';
import StyledLegend from './styled';
import { primary, gradient, secondary } from '../../../theme';

const Legend = props => <StyledLegend {...props} />;

// Documentation
Legend.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};

Legend.defaultProps = {
  theme: {
    primary,
    secondary,
    gradient,
  },
};

export default Legend;
