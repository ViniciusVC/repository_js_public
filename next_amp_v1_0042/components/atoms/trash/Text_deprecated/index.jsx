import React from 'react';
import PropTypes from 'prop-types';
import { border, shadow, flex, radius, secondary } from '../../../theme';
import StyledText from './styled';

const StyledSpan = StyledText.withComponent('span');
const StyledH1 = StyledText.withComponent('h1');
const StyledH2 = StyledText.withComponent('h2');
const StyledH3 = StyledText.withComponent('h3');
const StyledH4 = StyledText.withComponent('h4');
const StyledH5 = StyledText.withComponent('h5');
const StyledH6 = StyledText.withComponent('h6');
const StyledBold = StyledText.withComponent('strong');

const TextDeprecated = (props) => {
  switch (props.type) {
    case -1:
      return <StyledSpan {...props} />;
    case 1:
      return <StyledH1 fontSize={30} {...props} />;
    case 2:
      return <StyledH2 fontSize={24} fontWeight="Medium" {...props} />;
    case 3:
      return <StyledH3 fontSize={18} fontWeight="Medium" {...props} />;
    case 4:
      return <StyledH4 fontSize={16} fontWeight="Medium" {...props} />;
    case 5:
      return <StyledH5 fontSize={14} fontWeight="Medium" {...props} />;
    case 6:
      return <StyledH6 fontSize={12} fontWeight="Medium" {...props} />;
    case 'bold':
      return <StyledBold {...props} />;
    default:
      return <StyledText {...props} />;
  }
};

// Documentation
const propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
};

TextDeprecated.propTypes = propTypes;

TextDeprecated.defaultProps = {
  fontSize: 16,
  theme: {
    secondary,
    border,
    shadow,
    radius,
    flex,
  },
};

export default TextDeprecated;
