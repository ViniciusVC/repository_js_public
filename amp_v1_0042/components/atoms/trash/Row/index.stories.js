import React from 'react';
import {storiesOf} from '@storybook/react';

import {Button} from '../Button';
import Row from './index';

storiesOf('Atoms/Row', module)
  .add('Row', () => (
    <Row>
      <Button loading />
      <hr />
      <Button href="http://localhost:6006">Localhost</Button>
      <hr />
      <Button href="http://localhost:6006" disabled>Disabled</Button>
    </Row>
  ));
