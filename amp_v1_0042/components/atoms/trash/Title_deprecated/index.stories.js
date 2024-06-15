import React from 'react';
import {storiesOf} from '@storybook/react';

import Title from './index';

storiesOf('Atoms/Title', module)
  .add('Title', () => (
    <Title />
  ));
