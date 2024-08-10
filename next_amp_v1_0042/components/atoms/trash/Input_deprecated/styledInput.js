import styled from 'styled-components';

const Input = styled.input`
  border: ${props => props.theme.border2};
  ${props => props.theme.radius};
  padding: 0.75rem 0.5rem;
  transition: 0.3s ease;
  font-size: 0.825rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
  &:focus {
    border-color: ${props => props.theme.primary};
  }
  &.success {
    border-color: ${props => props.theme.success};
  }
  &.err {
    border-color: ${props => props.theme.danger};
  }
`;

export default Input;
