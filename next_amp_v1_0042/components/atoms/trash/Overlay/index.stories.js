import React from 'react';
import {storiesOf} from '@storybook/react';

import Overlay from './index';


storiesOf('Atoms/Overlay', module)
  .add('Overlay', () => (
    <Overlay open />
  ));
