import styled from 'styled-components';

const StyledTooltip = styled.span`
display: ${props => (props.show ? 'block' : 'none')};
box-shadow: 0 0 2rem  rgba(0,0,0,0.2);
position: absolute;
background: white;
font-size: 14px;
padding: 16px;
z-index: 1002;
top: 42px;
right: ${props => (props.position ? props.position : '0')};
width: ${props => (props.width ? props.width : '140px')};
&:after {
  transform: rotate(45deg);
  position: absolute;
  background: white;
  z-index: 998;
  height: 16px;
  width: 16px;
  right: 70px;
  content: '';
  top: -8px;
}
`;
export default StyledTooltip;
