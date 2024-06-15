import React from 'react';
import {storiesOf} from '@storybook/react';

import List from './index';

storiesOf('Atoms/List', module)
  .add('List', () => (
    <List>
      <li>item 01</li>
      <li>item 02</li>
      <li>item 03</li>
    </List>
  ));
