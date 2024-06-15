import styled from 'styled-components';

export default styled.label`
  min-height: 0.825rem;
  font-weight: bold;
  font-size: 12px;

  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }

  &.success {
    color: ${props => props.theme.success};
  }

  &.err {
    color: ${props => props.theme.danger};
  }
`;
