import styled from 'styled-components';

export default styled.div`
  min-height: 0.825rem;
  margin-top: .1875rem;
  font-size: 12px;
  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
  &.success {
    color: ${props => props.theme.success};
  }
  &.erro {
    color: ${props => props.theme.danger};
  }
`;
