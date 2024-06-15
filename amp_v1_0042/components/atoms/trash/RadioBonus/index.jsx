import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Icon from '../Icon';
import * as mixins from '../../../helpers';
import isIE from '../../../helpers/isIE';

const IECorner = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 32px 32px 0;
  border-color: transparent #e33465 transparent transparent;
  transition: opacity 0.4s ease-out;
  opacity: ${({opacity}) => opacity};
  z-index: 999;
`;

const DefaultCorner = styled.div`
  -webkit-transition: opacity 0.4s ease-out;
  transition: opacity 0.4s ease-out;
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 999;
  opacity: ${({opacity}) => opacity};
  right: -1px;
  top: -1px;
  border-top-right-radius: 2px;
  background: linear-gradient(0deg,#fe6b03,#e33465);
  clip-path: polygon(0 0, 100% 100%, 100% 0);
`;

const Corner = ({opacity}) => {
  return isIE()
    ? <IECorner opacity={opacity} />
    : <DefaultCorner opacity={opacity} />;
};

const Badge = ({opacity}) => (
  <React.Fragment>
    <Corner opacity={opacity} />
    <Icon
      size={12}
      type="clean_check"
      fillColor="#fff"
      style={{
        top: '-1px',
        right: '-1px',
        position: 'absolute',
        zIndex: '999',
        opacity
      }}
    />
  </React.Fragment>
);

// Label element style
const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;

  margin: ${props => props.margin && mixins.setSizes(props.margin) || '0px'};
  padding: ${props => props.padding && mixins.setSizes(props.padding) || '0px'};
  
  width: ${props => props.width};
  min-width: ${({minwidth}) => minwidth};
  max-width: ${({maxwidth}) => maxwidth};

  height: ${props => props.height};
  min-height: ${({minheight}) => minheight};
  max-height: ${({maxheight}) => maxheight};
  
  border: 1px solid #fff;
  background-color: white;
  box-shadow:0 7px 19px 0 rgba(34, 34, 34, 0.22);
  border: 1px solid #eee;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  
  color: #222;
  
  cursor: pointer;
  transition-duration: 0.4s;
  z-index: 0px;

  input[type=radio]:checked + & {
    border-top: solid 1px #e33465;
    border-left: solid 1px #e33465;
    border-right: solid 1px #e33465;
    border-bottom: solid 1px #fe6b03;
    z-index: 998;
  }

  input[type=radio] + &:before {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    z-index: -1;
    border-radius: 4px;
    -webkit-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }
  
  input[type=radio]:checked + &:before {
    background: linear-gradient(-90deg,#fe6b03,#e33465);
  }

  input[type=radio] + &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0px;
    top: 0px;
    border-radius: 2px;
    z-index: -1;
    -webkit-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
    background: white;
  }

  ${mixins.applyBreakpoints};
`;

// Input element style
const Input = styled.input.attrs({type: 'radio'})`
  display: none;
  visibility:hidden;
`;

// RadioBonus main element
const RadioBonus = ({
  checked, name, id, value, onChange, children, ...props
}) => (
  <React.Fragment>
    <Input
      checked={checked}
      id={id}
      onChange={onChange}
      name={name}
      value={value}
    />
    <Label htmlFor={id} name={name} {...props}>
      <Badge opacity={checked ? 1 : 0} />
      {children}
    </Label>
  </React.Fragment>
);

// RadioBonus props object.
RadioBonus.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default RadioBonus;
