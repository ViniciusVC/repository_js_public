import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Text from '../Text/index'

//Label element style
const Circle = styled.div`

  display: block;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-image: linear-gradient(to bottom, #f8562c, #d82482);
  z-index: 1;

`;

//Input element style
const InDiv = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left:50%;

    border-radius: 100%;
    background: ${props => props.backColor ? props.backColor : '#fdfdfd'};
    transform: translate(-50%, -50%);

    z-index: 2;
`;

const TextDiv = styled.div` 
  max-width:${props => props.stepCheck? 7:16}px;
  max-height:14px;

  font-size: 14px;
  color: #222222;
  position: relative;

  text-align:center;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%); 
`;

const Icon = () =>(
  <svg viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#222222">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.95673L3.4 7.63462L9.57143 13.6058L22.6 1L25 3.32212L9.57143 18.25L1 9.95673Z"></path>
    </g>
  </svg>
);

//StepCircle main element
const StepCircle = (props) => (
    <Circle {...props}>
      <InDiv {...props}>
        <TextDiv {...props}>
          <Text fontWeight="Medium">{props.stepCheck? props.stepCheck:(<Icon/>)}</Text>
        </TextDiv>
      </InDiv>
    </Circle>
);

//StepCircle props object.
StepCircle.props = {
  backColor:PropTypes.string,
  stepCheck:PropTypes.string,
}


export default StepCircle;
