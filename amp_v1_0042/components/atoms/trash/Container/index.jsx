import React from 'react';
import styled, {css} from 'styled-components';
import {prop, switchProp} from 'styled-tools';
import PropTypes from 'prop-types';
import * as mixins from '../../../helpers';
import {applyBreakpoints} from '../../../helpers/styles_mixins';

const ContainerStyle = styled.div`
  display: ${({display}) => display};
  ${switchProp('display', {
    flex: css`
      flex-direction: ${({direction}) => direction};
      justify-content: ${({justify}) => justify};
      align-content: ${({aligncontent}) => aligncontent};
      align-items: ${({alignitems}) => alignitems};
      flex-wrap: ${({flexwrap}) => flexwrap};
      flex-grow: ${({grow}) => grow};
    `
  })};
  align-self: ${props => props.alignself};
  
  position: ${({position}) => position || 'static'};
  ${({top}) => top && `top: ${typeof top === 'number' ? `${top}px` : top}`};
  ${({left}) => left && `left: ${typeof left === 'number' ? `${left}px` : left}`};
  ${({bottom}) => bottom && `bottom: ${typeof bottom === 'number' ? `${bottom}px` : bottom}`};
  ${({right}) => right && `right: ${typeof right === 'number' ? `${right}px` : right}`};
  
  width: ${({width}) => (!Number.isNaN(width) ? width : `${width}px`)};
  min-width: ${({minwidth}) => (!Number.isNaN(minwidth) ? minwidth : `${minwidth}px`)};
  max-width: ${({maxwidth}) => (!Number.isNaN(maxwidth) ? maxwidth : `${maxwidth}px`)};
  height: ${({height}) => (!Number.isNaN(height) ? height : `${height}px`)};
  min-height: ${({minheight}) => (!Number.isNaN(minheight) ? minheight : `${minheight}px`)};
  max-height: ${({maxheight}) => (!Number.isNaN(maxheight) ? maxheight : `${maxheight}px`)};
  margin: ${({margin}) => mixins.setSizes(margin)};
  padding: ${({padding}) => mixins.setSizes(padding)};
  background-color: ${({bgcolor}) => bgcolor};
  box-shadow: ${({shadow, shadow_color}) => shadow
    && `${mixins.setSizes(shadow)} ${
      shadow_color ? `rgba(${shadow_color})` : 'rgba(204, 204, 204, 0.3)'
    }`};
  border-radius: ${({radius}) => radius && `${mixins.setSizes(radius)}`};
  
  background: ${({bgmedia}) => bgmedia
    && `
    background: url(${bgmedia.desktop}) center top no-repeat ${prop('bgcolor')};
    background-size: cover;
    @media (max-width: 800px) {
      background: url(${bgmedia.tablet}) center top no-repeat ${prop(
  'bgcolor'
)};
      background-size: cover;
    };
    @media (max-width: 480px) {
      background: url(${bgmedia.mobile}) center top no-repeat ${prop(
  'bgcolor'
)};
      background-size: cover;
    };`};
  
  ${({border}) => typeof border === 'string' && `border: ${border};`}
  
  ${({border}) => typeof border === 'object'
    && `
      border-top: ${border.top || 'none'};
      border-right: ${border.right || 'none'};
      border-bottom: ${border.bottom || 'none'};
      border-left: ${border.left || 'none'};
  `};
  
  ${switchProp('type', {
    ul: css`
      list-style-type: none;
    `
  })};
  
  transition: ${({transition}) => transition};
  z-index: ${({zindex}) => zindex};
  overflow-x: ${({overflowx}) => overflowx};
  overflow-y: ${({overflowy}) => overflowy};
  white-space:  ${({whitespace}) => whitespace};
  cursor: ${({cursor}) => cursor};
  outline: ${({outline}) => outline};
  order: ${({order}) => order};
  
  overflow-scrolling: touch;

  ${applyBreakpoints}
`;

const Container = React.forwardRef(({type, as, ...containerProps}, ref) => {
  return <ContainerStyle as={as || type} ref={ref} {...containerProps} />;
});

Container.propTypes = {
  display: PropTypes.oneOf(['flex', 'block', 'inline-block']),
  type: PropTypes.oneOf(['div', 'ul', 'ol', 'form', 'fieldset']),
  as: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  aligncontent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch'
  ]),
  alignitems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  alignself: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  flexwrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string
  ]),
  width: PropTypes.string,
  minwidth: PropTypes.string,
  maxwidth: PropTypes.string,
  height: PropTypes.string,
  minheight: PropTypes.string,
  maxheight: PropTypes.string,
  position: PropTypes.oneOf(['relative', 'absolute', 'static', 'fixed']),
  zindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bgcolor: PropTypes.string,
  bgmedia: PropTypes.shape({
    desktop: PropTypes.string,
    tablet: PropTypes.string,
    mobile: PropTypes.string
  }),
  shadow: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  shadow_color: PropTypes.arrayOf(PropTypes.number),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  overflowx: PropTypes.oneOf(['hidden', 'visible', 'auto', 'scroll']),
  overflowy: PropTypes.oneOf(['hidden', 'visible', 'auto', 'scroll']),
  whitespace: PropTypes.oneOf([
    'initial',
    'normal',
    'nowrap',
    'pre',
    'pre-wrap',
    'pre-line'
  ]),
  cursor: PropTypes.string,
  outline: PropTypes.string,
  order: PropTypes.number,
  grow: PropTypes.number,
  transition: PropTypes.string
};

Container.defaultProps = {
  type: 'div',
  display: 'flex',
  direction: 'column',
  grow: 0,
  justify: 'space-between',
  aligncontent: 'center',
  alignitems: 'center',
  flexwrap: 'nowrap',
  alignself: 'center',
  margin: [0],
  padding: [0],
  width: '100%',
  minwidth: 'initial',
  maxwidth: 'initial',
  height: 'auto',
  minheight: 'initial',
  maxheight: 'initial',
  position: 'relative',
  zindex: 'initial',
  bgcolor: 'transparent',
  bgmedia: {
    desktop: '',
    tablet: '',
    mobile: ''
  },
  border: '0',
  radius: 0,
  shadow: 0,
  shadow_color: [0],
  overflowy: 'hidden',
  overflowx: 'hidden',
  whitespace: 'initial',
  cursor: 'initial',
  outline: '0',
  order: 0,
  transition: 'all 0.3s ease'
};

export {Container};
export default Container;
