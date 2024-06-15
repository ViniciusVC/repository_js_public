import styled from 'styled-components';
import Row from '../Row/index';

const StyledRow = styled(Row)`
  justify-content: space-between;
  position: relative;
  padding-left: 1.5rem;
  font-size: 12px;
  display: flex;
  p {
    margin: 12px 0;
  }
  p:before {
    margin: -2px 0 0 -1.5rem;
    position: absolute;
    border-radius: 2px;
    height: 1rem;
    width: 1rem;
    content: '';
  }
  p.consumido:before {
    background: ${props => props.theme.gradient};
  }
  p.disponivel:before {
    background: ${props => props.theme.secondary};
  }
`;

export default StyledRow;
