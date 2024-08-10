import React from 'react';
import PropTypes from 'prop-types';
import { border, shadow } from '../../../theme';
import StyledFieldset from './styled';

const Fieldset = props => <StyledFieldset {...props} />;

// Documentation
Fieldset.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  margin: PropTypes.string,
  shadow: PropTypes.bool,
};

Fieldset.defaultProps = {
  margin: '1rem 0',
  shadow: false,
  theme: {
    border,
    shadow,
  },
};

export default Fieldset;
