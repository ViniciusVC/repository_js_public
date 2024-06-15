import styled from 'styled-components';

const Radio = styled.label`
  padding-left: 1.5rem;
  white-space: nowrap;
  position: relative;

  input {
    display: none;
  }

  span:before {
    border-radius: ${props => (props.rounded ? '50%' : '2px')};
    border: 2px solid #222;
    transition: 0.2s ease;
    position: absolute;
    background: white;
    height: 1rem;
    content: '';
    width: 1rem;
    left: 0;
  }

  span:after {
    border-radius: ${props => (props.rounded ? '50%' : '2px')};
    border: 2px solid ${props => props.theme.primary};
    transition: 0.2s ease;
    transform: scale(0);
    position: absolute;
    background: #222;
    height: 1rem;
    width: 1rem;
    content: '';
    left: 0;
  }

  input:checked ~ span:before {
    border: 2px solid ${props => props.theme.primary};
    transition: 0.2s ease;
  }

  input:checked ~ span:after {
    background: ${props => props.theme.primary};
    transition: 0.2s ease;
    transform: scale(0.5);
  }
`;

export default Radio;
