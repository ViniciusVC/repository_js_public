import React from 'react';
import {storiesOf} from '@storybook/react';

import {Container} from './index';

storiesOf('Atoms/Container', module).add(
  'Container', () => <Container width={200} height={200} bgcolor="#fff" />
);
