import styled, {css} from 'styled-components';
import {resolveColor, lightOrDark} from '../../../helpers';

const Option = styled.div`
  padding: 0.5em 1em;

  font-family: Simplon, sans-serif;
  color: ${({fontcolor, theme}) => resolveColor(fontcolor, theme)};

  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  ${({disabled}) => disabled && css`
    color: #aeaeae;
  `}

  ${({placeholder}) => !placeholder && css`
    &:hover {
      /* background-color: ${({backgroundColor, theme}) => (lightOrDark(resolveColor(backgroundColor, theme)) === 'light'
    ? 'rgba(0, 0, 0, 0.05)'
    : 'rgba(255, 255, 255, 0.05)')}; */
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}

  ${({selected}) => selected
    && css`
    /* background-color: ${({backgroundColor, theme}) => (lightOrDark(resolveColor(backgroundColor, theme)) === 'light'
    ? 'rgba(0, 0, 0, 0.10)'
    : 'rgba(255, 255, 255, 0.10)')}; */
    background-color: rgba(0, 0, 0, 0.10);
    &:hover {
      /* background-color: ${({backgroundColor, theme}) => (lightOrDark(resolveColor(backgroundColor, theme)) === 'light'
    ? 'rgba(0, 0, 0, 0.15)'
    : 'rgba(255, 255, 255, 0.15)')}; */
      background-color: rgba(0, 0, 0, 0.15);
    }
  `}
`;

Option.defaultProps = {
  placeholder: false,
  selected: false,
  fontcolor: '#222'
};

export default Option;
