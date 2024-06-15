import PropTypes from 'prop-types';
import React from 'react';

import { primary, radius } from '../../../theme';
import StyledButton from './styled';

const StyledA = StyledButton.withComponent('a');

const Button = (props) => {
  if (props.href) {
    return <StyledA className={props.disabled ? 'disabled' : ''} {...props} />;
  }

  return (<StyledButton disabled={props.load || props.disabled} {...props}>
    {props.loading ? (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="#FFF" fillRule="evenodd" d="M17.219 1.05C12.966-.887 7.809-.078 4.265 2.93.898 5.787-.683 10.394.277 14.714c.954 4.29 4.218 7.77 8.469 8.909 5.026 1.347 9.617-1.036 12.44-5.183-2.56 3.425-6.421 5.688-10.797 4.93-4.31-.746-7.849-4.037-8.834-8.318-1.05-4.559 1.05-9.336 5.107-11.648 4.207-2.398 10.035-1.512 12.836 2.599a9.625 9.625 0 0 1 1.443 3.416c.218 1.03.127 2.057.278 3.084.133.903.93 2.16 1.97 1.484.9-.585.84-1.804.782-2.736-.207-4.311-2.813-8.408-6.752-10.201z" />
      </svg>
    ) : props.children}
          </StyledButton>);
};

// Props Documentation
Button.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  borderless: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  invert: PropTypes.bool,
  link: PropTypes.bool,
  load: PropTypes.bool,
  show: PropTypes.bool,
  fontSize: PropTypes.string,
  bold: PropTypes.bool,
  loading: PropTypes.bool,
  upperCase: PropTypes.bool,
  ghost: PropTypes.bool,
  width: PropTypes.string
};

Button.defaultProps = {
  borderless: false,
  disabled: false,
  invert: false,
  link: false,
  load: false,
  href: null,
  show: true,
  theme: {
    primary,
    radius,
  },
  fontSize: '0.875rem',
  bold: false,
  loading: false,
  upperCase: true,
  ghost: false,
  width: '100%'
};

export default Button;
