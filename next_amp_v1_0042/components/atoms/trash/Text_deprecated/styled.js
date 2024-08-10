import styled from 'styled-components';
import * as mixins from '../../../helpers';
import PropTypes from 'prop-types';

const colorSelect = (props) => {
  if (props.color) return props.color;
  else if (props.muted) return props.theme.secondary;
  return 'inherit';
};

const Text = styled.p`
  letter-spacing: ${props =>
    (props.letterSpacing ? props.letterSpacing : 'normal')};
  white-space: ${props => (props.nowrap || props.noWrap ? 'nowrap' : 'normal')};
  color: ${props => colorSelect(props)};
  height: auto;
  font-size: ${({ fontSize }) => fontSize ? mixins.rem(fontSize) : mixins.rem(16)};
  font-weight: ${({ fontWeight }) => (fontWeight ? mixins.fontWeight(fontWeight) : '400')};
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  ${({uppercase}) => uppercase && 'text-transform: uppercase'};
  .icon-subtitle:hover div p{
    color: inherit;
  }
`;

Text.propTypes = {
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
};

Text.defaultProps = {
  fontWeight: 'Regular',
};

export default Text;
