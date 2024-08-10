import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from './index';

storiesOf('Atoms/TextDeprecated', module)
  .add('Text', () => (
    <Text />
  ));
