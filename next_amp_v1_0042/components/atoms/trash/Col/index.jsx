import React from 'react';
import PropTypes from 'prop-types';
import StyledCol from './styled';
import { flex } from '../../../theme';

const Col = props => <StyledCol className="col" {...props} />;

// Props Documentation
Col.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  justify: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.string,
  grow: PropTypes.number,
  right: PropTypes.bool,
  maxwidth: PropTypes.string,
  flexBasis: PropTypes.string,
};

Col.defaultProps = {
  justify: null,
  padding: null,
  margin: null,
  width: null,
  align: null,
  grow: null,
  right: false,
  flexBasis: null,
  maxwidth: 'none',
  theme: {
    flex,
  },
};

export default Col;
