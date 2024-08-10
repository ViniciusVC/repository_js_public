import PropTypes from "prop-types";
import React from "react";

import { border2, primary, danger, success, radius } from "../../../theme";
import StyledFieldset from "./styledFieldset";
import StyledMessage from "./styledMessage";
import StyledLabel from "./styledLabel";
import StyledInput from "./styledInput";

const createClass = props => {
  if (props.err || props.erro) return "erro";
  else if (props.success) return "success";
  return props.className;
};

const Input = props => (
  <StyledFieldset>
    {props.label ? <StyledLabel>{props.label}</StyledLabel> : null}
    <StyledInput className={createClass(props)} {...props} />
    <StyledMessage className={createClass(props)} theme={props.theme}>
      {props.err || props.erro || props.success
        ? props.err || props.erro || props.success
        : null}
    </StyledMessage>
  </StyledFieldset>
);

// Documentation
Input.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  success: PropTypes.node,
  label: PropTypes.node,
  erro: PropTypes.node,
  err: PropTypes.node
};

Input.defaultProps = {
  success: null,
  label: null,
  erro: null,
  err: null,
  theme: {
    primary,
    success,
    border2,
    radius,
    danger
  }
};

export default Input;
