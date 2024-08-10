import styled from 'styled-components';

const Overlay = styled.aside`
  top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  background: rgba(0,0,0,0.6);
  opacity: ${props => (props.open ? 1 : 0)};
  width: ${props => (props.open ? '100vw' : 0)};
  height: ${props => (props.open ? '100vh' : 0)};
  overflow: ${props => (props.open ? 'hidden' : 'auto')};
`;

export default Overlay;
