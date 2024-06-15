import React from 'react';
import {storiesOf} from '@storybook/react';
import StepCircle from './index';

storiesOf('Atoms/StepCircle', module)
  .add('StepCircle', () => (
      <StepCircle backColor={''} stepCheck={''} />
  )); 