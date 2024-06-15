import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from './index';

storiesOf('Atoms/ButtonDeprecated', module)
  .add('Button', () => (
    <div style={{width: '300px'}}>
      <Button loading />
      <hr />
      <Button href="http://localhost:6006">Localhost</Button>
      <hr />
      <Button link href="http://localhost:6006">Localhost</Button>
      <hr />
      <Button href="http://localhost:6006" disabled>Disabled</Button>
    </div>
  ));
