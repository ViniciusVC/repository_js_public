import React from 'react';
import PropTypes from 'prop-types';
import { flex } from '../../../theme';
import StyledRow from './styled';

const Row = props => <StyledRow className={props.noWrap ? 'no-wrap' : 'Row'} {...props} />;

// Documentation
Row.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  justify: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  align: PropTypes.string,
  mobile: PropTypes.string,
  noWrap: PropTypes.bool,
};

Row.defaultProps = {
  noWrap: false,
  justify: null,
  padding: null,
  margin: null,
  mobile: null,
  align: null,
  theme: {
    flex,
  },
};

export default Row;
