import styled from 'styled-components';

const breakpoint = () => `
@media only screen and (max-width: 1023px) {
  justify-content: initial;
  flex-direction: column;
  align-items: initial;
  flex-grow: 1;
  > .col, .row {
    justify-content: initial !important;
    align-items: initial !important;
    flex-basis: auto !important;
    flex-grow: 1 !important;
  }
}
`;

const selectView = (props) => {
  switch (props.mobile) {
    case 'hidden':
      return '@media only screen and (max-width: 1023px) { display: none !important; }';
    case 'only':
      return '@media only screen and (min-width: 1024px) { display: none !important; }';
    default:
      return null;
  }
};

const Row = styled.div`
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  ${props => props.theme.flex};
  flex-direction: ${props => props.direction || 'row'};
  ${props => (!props.noWrap ? breakpoint() : null)} ${props =>
  (props.mobile ? selectView(props) : null)};
`;

export default Row;
