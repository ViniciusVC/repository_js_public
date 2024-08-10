import styled from 'styled-components';
import {rem} from '../../../helpers';

const InputHint = styled.div`
  margin: 4px 0 0 1em;
  
  font-family: Simplon, sans-serif;
  font-size: ${({fontSize}) => (Number.isNaN(fontSize) ? fontSize : rem(fontSize))};
  color: ${({color, theme}) => (color === 'currentColor' || color.indexOf('#') > -1 ? color : theme.colors[color])};
`;

InputHint.defaultProps = {
  fontSize: 16,
  color: '#909090'
};

export default InputHint;
