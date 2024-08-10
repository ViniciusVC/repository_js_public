import styled from 'styled-components';
import {
  rem, applyBreakpoints, setSizes, resolveColor
} from '../../../helpers';

const FormGroup = styled.div`
  position: relative;

  border: 1px solid ${({borderColor, theme}) => (borderColor === 'currentColor' || borderColor.indexOf('#') > -1 ? borderColor : theme.colors[borderColor])};
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 4px;
  padding: ${({padding}) => setSizes(padding)};

  font-size: ${({fontSize}) => (Number.isNaN(fontSize) ? fontSize : rem(fontSize))};

  transition: all 0.15s ease-in-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border: 1px solid ${({borderColor, theme}) => resolveColor(borderColor, theme)};
    border-radius: 4px;
    box-shadow: 0 0 0 rgb(0,0,0,0.1);

    opacity: 0;
    box-sizing: border-box;
    transition: all 0.15s ease-in-out;
    pointer-events: none;
  }

  &:hover, &:focus-within {
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    &::after{
      opacity: 1;
    }
  }

  ${applyBreakpoints}
`;

FormGroup.defaultProps = {
  borderColor: '#aeaeae',
  fontSize: 16,
  padding: ['0.875em', '17px', '1em']
};

export default FormGroup;
