import styled from 'styled-components';
import * as mixins from '../../../helpers';

const isLink = props => `
  color: ${props.color || props.theme.primary};
  background: transparent;
  text-decoration: none;
  display: inline-block;
  border-radius: 0;
  text-align: left;
  padding: 0;
  border: 0;
  font-family: Simplon, OiTextRegular, sans-serif;
  &:hover {
    text-decoration: underline;
  }
  &:disabled,
  &.disabled {
    color: #909090;
  }
`;

const defaultTransparent = props => (props.invert || props.outline ? props.theme.primary : 'transparent');
const defaultThemePrimary = props => (props.invert || props.outline ? 'white' : props.theme.primary);

const isButton = props => `
border-color: ${props.ghost ? 'white' : defaultTransparent(props)};
background:  ${props.ghost ? 'transparent' : defaultThemePrimary(props)};
color: ${props.invert || props.outline ? props.theme.primary : 'white'};
border-width:  ${props.borderless ? 0 : '1px'};
text-transform: ${props.upperCase ? 'uppercase' : 'none'};
text-decoration: none;
padding: 1rem 0;
border-style: solid;
text-align: center;
display: block;
width: ${props.width};
${props.theme.radius};
${
  props.borderless
    ? null
    : `
&:hover {
  border-color: ${
  props.invert || props.outline ? 'transparent' : props.theme.primary
};
  background: ${props.invert || props.outline ? props.theme.primary : 'white'};
  color: ${props.invert || props.outline ? 'white' : props.theme.primary};
}
&:disabled,
&.disabled {
  opacity: 0.5;
}
`
}

& svg {
  animation-name: spin;
  animation-duration: 400ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
}
`;

const setPadding = () => `
  padding: 11px 8px 10px 8px;
`;

const Button = styled.button`
  ${props => (props.link ? isLink(props) : isButton(props))};
  ${props => (props.loading ? setPadding(props) : null)};
  font: inherit;
  font-size: ${props => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${props => props.fontWeight || (props.bold ? 'bold' : 'inherit')};
  font-weight: ${props => props.fontWeight && `${mixins.fontWeight(props.fontWeight)}`};
  line-height: ${({lineheight}) => lineheight || '1em'};
  transition: 0.3s ease;
  white-space: nowrap;
  &:hover {
    cursor: pointer; /* mouse com mãozinha */
  }
  &:focus {
    outline: none; /* evita destaque indesejado pós clique !!! */
  }
  &:disabled,
  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default Button;
