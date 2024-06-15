import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mixins from '../../../helpers';

const TitleStyle = styled.h2`
  width: ${({width}) => width};
  max-width: ${({maxwidth}) => maxwidth};
  margin: ${props => props.margin && mixins.setSizes(props.margin)};
  padding: ${props => props.padding && mixins.setSizes(props.padding)};

  ${props => props.gradient
    && `
      font-weight: ${props.font.weight && `${mixins.fontWeight(props.font.weight)}`};
      font-size: ${props.font.size && `${mixins.rem(props.font.size)}`};
      background: -webkit-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background: -moz-linear-gradient(${mixins.gradient(props.gradient.direction, props.gradient.colors)});
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    `
}
  
  text-align: ${({align}) => align};
  font-family: ${({fontFamily}) => fontFamily};
  font-weight: ${({fontWeight}) => mixins.fontWeight(fontWeight)};
  font-size: ${({type, fontSize, theme}) => (fontSize ? mixins.rem(fontSize) : theme.titles.size[type])};
  line-height: ${({lineheight}) => (isNaN(lineheight) ? lineheight : mixins.rem(lineheight))};
  color: ${({theme, themecolor}) => theme.colors[themecolor]};
  ${({fontcolor}) => fontcolor && `color: ${fontcolor}`};

  ${({uppercase}) => uppercase && 'text-transform: uppercase;'}

  ${mixins.applyBreakpoints}
`;

const Title = ({type, ...props}) => <TitleStyle as={type} {...props} />;

Title.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  themecolor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'light',
    'dark',
    'link',
    'white',
    'black'
  ]),
  gradient: PropTypes.shape({
    direction: PropTypes.string,
    colors: PropTypes.array
  }),
  fontFamily: PropTypes.oneOf(['Simplon', 'SimplonHeadline']),
  fontcolor: PropTypes.string,
  lineheight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.oneOf(['Light', 'Regular', 'Medium', 'Bold']),
  uppercase: PropTypes.bool,
  width: PropTypes.string,
  maxwidth: PropTypes.string
};

Title.defaultProps = {
  fontFamily: ({theme}) => theme.titles.font,
  type: 'h2',
  align: 'left',
  fontWeight: 'Regular',
  themecolor: 'dark',
  margin: 0,
  padding: 0,
  lineheight: 'normal',
  uppercase: false,
  width: '100%',
  maxwidth: 'iniital'
};

export {Title};
export default Title;
