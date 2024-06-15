import styled from 'styled-components';
import {rem} from '../../../helpers';

const ErrorMessage = styled.div`
  margin: 4px 0 0 1em;

  font-family: Simplon, sans-serif;
  font-size: ${({fontSize}) => (Number.isNaN(fontSize) ? fontSize : rem(fontSize))};
  color: ${({color, theme}) => (color === 'currentColor' || color.indexOf('#') > -1
    ? color
    : theme.colors[color])};
`;

ErrorMessage.defaultProps = {
  fontSize: 16,
  color: 'danger'
};

export default ErrorMessage;
