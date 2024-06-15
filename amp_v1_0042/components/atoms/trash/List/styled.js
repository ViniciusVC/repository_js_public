import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  flex-wrap: ${props => (props.noWrap ? 'no-wrap' : 'wrap')};
  width: ${props => props.width || 'initial'};
  
  > li {
    ${props => props.horizontal && props.columns && `width: ${100 / props.columns}%`};
    padding: 0.5rem;
    border-${props => (props.horizontal ? 'right' : 'bottom')}: 1px solid lightgrey;
    &:last-child {
      border-${props => (props.horizontal ? 'right' : 'bottom')}-width: 0;
    }
    &.noPadLeft{
      padding-left: 0rem;
    } 
  }
`;

export default List;
