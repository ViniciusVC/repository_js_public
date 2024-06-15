import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from './index';

storiesOf('Atoms/InputDeprecated', module)
  .add('Input', () => (
    <Input />
  ));
