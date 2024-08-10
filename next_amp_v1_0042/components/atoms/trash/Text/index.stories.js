import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';

import {Text} from './index';

storiesOf('Atoms/Text', module)
  .add('Text', () => (
    <Fragment>
      <Text>Sample Text</Text>
      <Text fontWeight="Medium">Sample Text</Text>
      <Text fontSize={20}>Sample Text</Text>
    </Fragment>
  ));
