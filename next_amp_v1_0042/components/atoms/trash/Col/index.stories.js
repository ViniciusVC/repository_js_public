import React from 'react';
import {storiesOf} from '@storybook/react';

import {Button} from '../Button';
import Col from './index';

storiesOf('Atoms/Col', module)
  .add('Col', () => (
    <Col>
      <Button loading />
      <hr />
      <Button href="http://localhost:6006">Localhost</Button>
      <hr />
      <Button href="http://localhost:6006" disabled>Disabled</Button>
    </Col>
  ));
