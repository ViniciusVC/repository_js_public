import styled from 'styled-components';

const Widget = styled.div`
  width: ${props => (props.fixed ? '100%' : 'auto')};
  ${props => props.theme.flex};
  height: auto;
  margin: 1rem;
  > div {
    box-shadow: ${props => props.theme.shadow};
    border: ${props => props.theme.border};
    ${props => props.theme.radius};
    flex-direction: column;
    background: white;
    display: flex;
    padding: 1rem;
    min-height: ${props => (props.minHeight ? props.minHeight : '0')};
  }
`;

export default Widget;
