import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mixins from '../../../helpers/styles_mixins';

const TooltipBalloon = styled.span`
  display: none;
  position: absolute;
  top: ${({balloon}) => balloon.top};
  right: ${({balloon}) => balloon.right};
  bottom: ${({balloon}) => balloon.bottom};
  left: ${({balloon}) => balloon.left};

  width: ${({balloon}) => balloon.width};
  padding: ${({balloon}) => (balloon.padding ? mixins.setSizes(balloon.padding) : '15px')};
  border-radius: 2px;
  background-color: ${({balloon}) => balloon.background};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  transform: translate(-50%, 8px);
  z-index: 10;

  &::before {
    content: '';
    display: block;
    width: ${({balloon}) => balloon.tip.width};
    height: ${({balloon}) => balloon.tip.height};
    background-color: ${({balloon}) => balloon.background};
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: ${({balloon}) => balloon.tip.top};
    right: ${({balloon}) => balloon.tip.right};
    bottom: ${({balloon}) => balloon.tip.bottom};
    left: ${({balloon}) => balloon.tip.left};
    transform: translate(-50%, 0) rotate(45deg);
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({balloon}) => balloon.background};
    z-index: -1;
  }
`;

const Trigger = styled.span`
  width: ${({width}) => width};
  position: relative;
  display: ${({display}) => display};

  margin: ${({margin}) => mixins.setSizes(margin)};

  &:hover ${TooltipBalloon} {
    display: block;
  }
`;

const defaultBalloon = {
  width: '250px',
  padding: 15,
  background: '#fff',
  top: '100%',
  left: '50%',
  bottom: 'initial',
  right: 'initial',
  tip: {
    width: '20px',
    height: '20px',
    top: '-8px',
    left: '50%',
    bottom: 'initial',
    right: 'initial'
  }
};

const Tooltip = ({balloon, ...props}) => {
  return (
    <Fragment>
      <Trigger {...props}>
        {props.renderTrigger()}
        <TooltipBalloon {...props} balloon={{...defaultBalloon, ...balloon}} />
      </Trigger>
    </Fragment>
  );
};

Tooltip.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  display: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  balloon: PropTypes.shape({
    width: PropTypes.string,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number)
    ]),
    background: PropTypes.string
  })
};

Tooltip.defaultProps = {
  display: 'inline-block',
  margin: [0],
  width: 'auto',
  balloon: defaultBalloon
};

export default Tooltip;
