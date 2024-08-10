import styled from 'styled-components';
import {rem, fontWeight} from '../../../helpers';

const Label = styled.label`
    position: relative;
    
    padding: 0 4px;
    width: auto;
    /* background: ${({backgroundColor}) => backgroundColor}; */

    font-family: Simplon, sans-serif;
    font-size: ${({fontSize}) => (Number.isNaN(fontSize) ? fontSize : rem(fontSize))};
    font-weight: ${({fontWeight: weight}) => fontWeight(weight)};
    line-height: ${({lineheight}) => lineheight};
    color: ${({color, theme}) => (color === 'currentColor' || color.indexOf('#') > -1 ? color : theme.colors[color])};

    z-index: 1;
    cursor: pointer;

    &::after{
      content: '';
      display: block;
      position: absolute;
      bottom: 3px;
      left: 0;

      background-color: ${({backgroundColor}) => backgroundColor};
      width: 100%;
      height: 50%;
      z-index: -1;
    }
`;

Label.defaultProps = {
  color: '#222',
  backgroundColor: 'transparent',
  fontSize: 16,
  fontWeight: 'Regular',
  lineheight: 1.2
};

export default Label;
