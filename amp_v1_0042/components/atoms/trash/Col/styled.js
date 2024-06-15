import styled from 'styled-components';

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

const Col = styled.div`
  ${props => props.theme.flex}; /* não me mova daqui !!! */
  flex: ${props => (props.width || props.right ? 'none' : '1 1 0')};  /* não me mova daqui !!! */
  @media only screen and (max-width: 1023px) { flex-basis: auto !important; }
  flex-grow: ${props => props.grow}; /* não me mova daqui !!! */
  flex-basis: ${props => props.flexBasis};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  width: ${props => props.width};
  ${props => (props.mobile ? selectView(props) : null)};
  position: ${props => (props.right ? 'absolute' : 'relative')};
  right: ${props => (props.right ? '0' : null)};
  max-width: ${props => props.maxwidth && props.maxwidth};
`;

export default Col;
