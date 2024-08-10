/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {ifProp, prop, switchProp} from 'styled-tools';
import {isNumber} from 'util';
import * as mixins from '../../../helpers';
import {Default as theme} from '../../../themes';

const colorSelect = (props) => {
  if (props.muted) return theme.colors.gray;
  if (props.fontcolor) return props.fontcolor;
  return 'inherit';
};

// Component Styles
const TextType = (props) => {
  switch (props.type) {
    case 'span':
      return <span {...props}>{props.children}</span>;
    case 'strong':
      return <strong {...props}>{props.children}</strong>;
    case 'abbr':
      return <abbr {...props}>{props.children}</abbr>;
    case 'legend':
      return <legend {...props}>{props.children}</legend>;
    case 'small':
      return <small {...props}>{props.children}</small>;
    case 'sub':
      return <sub {...props}>{props.children}</sub>;
    case 'sup':
      return <sup {...props}>{props.children}</sup>;
    case 'label':
      return <label {...props}>{props.children}</label>; // eslint-disable-line
    default:
    case 'p':
      return <p {...props}>{props.children}</p>;
  }
};

const TextStyle = styled(TextType)`
  font-family: ${prop('fontFamily')};
  font-weight: ${props => props.fontWeight && mixins.fontWeight(props.fontWeight)};
  font-size: ${props => props.fontSize && mixins.rem(props.fontSize)};
  color: ${props => colorSelect(props)};
  text-align:${ifProp('align', prop('align'))};
  line-height: ${({lineheight}) => (isNumber(lineheight) ? mixins.rem(lineheight) : lineheight)};
  text-transform: none;
  letter-spacing: ${({letterSpacing}) => letterSpacing};
  ${ifProp('uppercase', 'text-transform: uppercase;')};
  ${ifProp('lowercase', 'text-transform: lowercase;')};
  margin: ${props => props.margin && mixins.setSizes(props.margin)};
  padding: ${props => props.padding && mixins.setSizes(props.padding)};
  width: ${props => props.width};
  max-width: ${({maxwidth}) => maxwidth};
  height: ${props => props.height};
  white-space: ${ifProp('nowrap', 'nowrap', prop('whitespace'))};
  ${props => props.opacity && `opacity: ${props.opacity}`};
  ${props => props.gradient && `
    font-family: ${ifProp('font.family', prop('font.family'))};
    font-weight: ${props.font.weight && mixins.fontWeight(props.font.weight)};
    font-size: ${props.font.size && mixins.calcSize(props.font.size)};
    background: -webkit-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background: -moz-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  `};
  ${switchProp('themecolor', {
    primary: css`color: ${prop('theme.colors.primary')};`,
    secondary: css`color: ${prop('theme.colors.secondary')};`,
    success: css`color: ${prop('theme.colors.success')};`,
    error: css`color: ${prop('theme.colors.error')};`,
    warning: css`color: ${prop('theme.colors.warning')};`,
    info: css`color: ${prop('theme.colors.info')};`,
    light: css`color: ${prop('theme.colors.light')};`,
    dark: css`color: ${({fontcolor}) => fontcolor || prop('theme.colors.dark')};`,
    link: css`color: ${prop('theme.colors.link')};`,
    white: css`color: ${prop('theme.colors.white')};`,
    black: css`color: ${prop('theme.colors.black')};`,
    gray: css`color: ${prop('theme.colors.gray')};`
  })};
  ${ifProp('muted', `color: ${theme.colors.gray}`)};
  ${switchProp('type', {
    span: css`display: ${props => (props.display ? props.display : 'inline')};`,
    strong: css`font-weight: 600;`,
    abbr: css`cursor: help;`,
    legend: css`display: inline-block;margin: 0; padding: 0;`,
    small: css`font-size: ${mixins.calcSize(-1)};text-transform: uppercase;`,
    sub: css`font-size: ${mixins.calcSize(-2)};`,
    sup: css`font-size: ${mixins.calcSize(-2)};`,
    p: css`width: ${props => (props.width ? props.width : '100%')};`,
    label: css`cursor: pointer;`
  })}

  ${mixins.applyBreakpoints}
`;

// Component Core
const Text = (props) => {
  return <TextStyle {...props}>{props.children}</TextStyle>;
};
// Component Props
Text.propTypes = {
  themecolor: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'light', 'dark', 'link', 'white', 'black', 'gray']),
  type: PropTypes.oneOf(['label', 'span', 'strong', 'abbr', 'legend', 'small', 'sub', 'sup', 'p']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  width: PropTypes.string,
  height: PropTypes.string,
  lineheight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  letterSpacing: PropTypes.string,
  whitespace: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontcolor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  gradient: PropTypes.shape({
    direction: PropTypes.string,
    colors: PropTypes.array
  }),
  nowrap: PropTypes.string
};

Text.defaultProps = {
  type: 'p',
  align: 'left',
  fontFamily: 'Simplon, OiTextRegular, simplon_bpregular, sans-serif',
  fontWeight: 'Regular',
  fontSize: 16,
  fontcolor: theme.colors.dark,
  themecolor: 'dark',
  margin: [0],
  padding: [0],
  width: '100%',
  height: 'auto',
  lineheight: '1em',
  letterSpacing: 'normal',
  whitespace: 'initial',
  maxwidth: 'initial'
};

export {Text};
export default Text;
