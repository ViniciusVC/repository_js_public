import styled from 'styled-components';

const Arrow = styled.span`
  width: 9px;
  height: 7px;
  svg {
    transform: ${props => (props.up ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: 0.3s ease;
  }
`;

export default Arrow;
