import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from '../../../theme';
import StyledOverlay from './styled';

const Overlay = props => <StyledOverlay className="overlay" {...props} />;

// Documentation
Overlay.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  open: PropTypes.bool,
};

Overlay.defaultProps = {
  open: false,
  theme: {
    rgba,
  },
};

export default Overlay;
