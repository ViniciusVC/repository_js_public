import React from 'react';
import {storiesOf} from '@storybook/react';

import {Line} from './index';

storiesOf('Atoms/Line', module)
  .add('Horizontal', () => (
    <Line width="250px" color="#000" margin={[15]} />
  ))
  .add('Vertical', () => (
    <Line color="#000" width="1px" height="250px" margin={[15]} />
  ));
