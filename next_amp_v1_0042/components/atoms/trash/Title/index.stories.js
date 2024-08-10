import React from 'react';
import {storiesOf} from '@storybook/react';

import {Title} from './index';

storiesOf('Atoms/Title', module)
  .add('Normal case', () => (
    <div>
      <Title type="h1"> Oi is Normal h1</Title>
      <Title type="h2"> Oi is Normal h2</Title>
      <Title type="h3"> Oi is Normal h3</Title>
      <Title type="h4"> Oi is Normal h4</Title>
      <Title type="h5"> Oi is Normal h5</Title>
      <Title type="h6"> Oi is Normal h6</Title>
    </div>
  ));
