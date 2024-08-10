import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as mixins from '../../../helpers/styles_mixins';
import Icon from '../Icon';

const StyledLink = styled.a`
  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  justify-content: ${({justify}) => justify};
  align-items: ${({alignItems}) => alignItems};
  align-content: ${({alignContent}) => alignContent};
  align-self: ${({alignSelf}) => alignSelf};

  border: 0;
  background: transparent;
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin: ${({margin}) => mixins.setSizes(margin)};
  padding: ${({padding}) => mixins.setSizes(padding)};
  outline: 0;

  font-family: ${({fontFamily}) => fontFamily || '\'Simplon\', OiTextRegular, simplon_bpregular, sans-serif'};
  font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
  font-size: ${({fontSize}) => mixins.rem(fontSize)};
  color: ${({theme, color}) => (color.indexOf('#') !== -1 ? color : theme.colors[color])};
  text-decoration: ${({textDecoration}) => textDecoration};
  text-align: ${({align}) => align};
  line-height: ${({lineheight}) => (lineheight ? mixins.rem(lineheight) : '1em')};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${mixins.applyBreakpoints}
`;

const Link = ({
  icon, iconPosition, children, ...props
}) => (
  <StyledLink {...props}>
    {icon && iconPosition === 'before' && <Icon type={icon} size={20} margin={[0, 8, 0, 0]} />}
    {children}
    {icon && iconPosition === 'after' && <Icon type={icon} size={20} margin={[0, 0, 0, 8]} />}
  </StyledLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  alignSelf: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
  padding: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.arrayOf(PropTypes.number),
  textDecoration: PropTypes.string,
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  fontSize: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['before', 'after'])
};

Link.defaultProps = {
  inline: false,
  justify: 'center',
  alignItems: 'flex-end',
  alignContent: 'center',
  alignSelf: 'initial',
  padding: [0],
  margin: [0],
  fontWeight: 'Regular',
  fontSize: 16,
  color: 'primary',
  textDecoration: 'none',
  align: 'left',
  iconPosition: 'before',
  icon: undefined
};

export default Link;
