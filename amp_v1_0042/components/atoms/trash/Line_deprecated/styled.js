import styled from 'styled-components';

const LineStyle = styled.div`
  box-shadow: ${props => (props.shadow ? props.theme.shadow : 'none')};
  border-bottom: ${props => (props.light ? props.theme.border : props.theme.border2)};
  margin: ${props => props.margin};
`;

export default LineStyle;
