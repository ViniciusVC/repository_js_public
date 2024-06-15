import PropTypes from 'prop-types';
import React from 'react';

import {
  gradient, secondary, transition, primary
} from '../../../theme';
import StyledLabel from './styled';

const Radio = (props) => {
  const {disabled, checked, onChange} = props;
  const inputProps = {disabled, checked, onChange};
  return (
    <StyledLabel className="progress-bar" {...props}>
      <input type="checkbox" {...inputProps} />
      <span />
      {props.children}
    </StyledLabel>
  );
};


// Documentation
Radio.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

Radio.defaultProps = {
  onChange: () => true,
  disabled: false,
  checked: false,
  children: null,
  theme: {
    primary,
    gradient,
    secondary,
    transition
  }
};

export default Radio;
