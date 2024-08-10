import React from 'react';
import {storiesOf} from '@storybook/react';

import Loader from './index';

storiesOf('Atoms/Loader', module)
  .add('Loader', () => (
    <Loader />
  ));
