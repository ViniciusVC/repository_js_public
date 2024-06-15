import styled from 'styled-components';

const color = (props) => {
  if (props.primary) return props.theme.primary;
  if (props.secondary || props.sub) return props.theme.secondary;
  return 'inherit';
};

const Title = styled.h3`
  margin: 0;
  font-size: ${props => (props.sub ? '.875rem' : '1.25rem')};
  color: ${props => color(props)}};
`;

export default Title;
