import styled from 'styled-components';

export default styled.div`
  z-index: ${props =>
    (props.open ? 999 : -1)}; /* evita problemas no hover quando fechado */
  height: ${props => (props.open ? `${props.height}px` : 0)};
  overflow-y: ${props => (props.disabled ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: .3s ease;
}
`;
