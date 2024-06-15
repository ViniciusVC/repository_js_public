import React from 'react';
import {storiesOf} from '@storybook/react';

import Widget from './index';

storiesOf('Atoms/Widget', module)
  .add('Widget', () => (
    <Widget />
  ));
