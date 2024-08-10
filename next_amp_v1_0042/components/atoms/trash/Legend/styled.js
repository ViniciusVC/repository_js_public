import styled from 'styled-components';

const color = (props) => {
  if (props.primary) return props.theme.primary;
  if (props.gradient) return props.theme.gradient;
  return props.theme.secondary;
};

const Legend = styled.legend`
  &:before {
    width: 1rem;
    height: 1rem;
    background: ${props => color(props)};
    ${props => props.theme.radius};
  }
`;

export default Legend;
