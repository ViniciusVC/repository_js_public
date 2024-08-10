import React from 'react';
import PropTypes from 'prop-types';
import {flex, container} from '../../../theme';
import StyledGrid from './styled';

const Grid = props => <StyledGrid className="grid" {...props} />;

// Props Documentation
Grid.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  background: PropTypes.string
};

Grid.defaultProps = {
  background: 'white',
  theme: {
    flex,
    container
  }
};

export default Grid;
