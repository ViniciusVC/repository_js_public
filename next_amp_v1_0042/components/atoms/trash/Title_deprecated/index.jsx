import React from 'react';
import PropTypes from 'prop-types';
import { primary, secondary } from '../../../theme';
import StyledTitle from './styled';

const TitleDeprecated = props => <StyledTitle className="Title" {...props} />;

// Documentation
TitleDeprecated.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
};

TitleDeprecated.defaultProps = {
  theme: { primary, secondary },
};

export default TitleDeprecated;
