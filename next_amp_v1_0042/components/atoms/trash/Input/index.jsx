import styled from 'styled-components';
import {rem, applyBreakpoints, resolveColor} from '../../../helpers';

const Input = styled.input`
    width: calc(100% - 28px);
    height: 100%;
    background-color: transparent;
    border: 0;
    
    font-family: Simplon, sans-serif;
    font-size: ${({fontSize}) => (Number.isNaN(fontSize) ? fontSize : rem(fontSize))};
    color: ${({fontcolor, theme}) => resolveColor(fontcolor, theme)};
    
    outline: none;
    
    &:disabled {
        filter: grayscale(100%);
        pointer-events: none;
    }
    &:focus {
        outline: none;
    }
    &:active {
        outline: none;
    }

    ${applyBreakpoints}
`;

Input.defaultProps = {
  type: 'text',
  fontSize: 16
};

export default Input;
