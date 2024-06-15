import React from 'react';
import PropTypes from 'prop-types';
import { transition, radius, shadow } from '../../../theme';
import StyledList from './styled';

const List = props => <StyledList {...props} />;

// Documentation
List.propTypes = {
  /* Descricao do theme */
  theme: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  theme: {
    transition,
    radius,
    shadow,
  },
};

export default List;
