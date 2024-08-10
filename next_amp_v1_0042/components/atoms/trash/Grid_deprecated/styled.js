import styled from 'styled-components';

const Grid = styled.section`
  background: ${props => props.background};
  ${props => props.theme.flex};
  width: 100%;
  align-self: center;
  flex-basis: auto;
  max-width: ${({container, theme}) => container && theme.container};
`;

export default Grid;
