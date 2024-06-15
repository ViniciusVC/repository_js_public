import React from 'react';
import {storiesOf} from '@storybook/react';

import Progress from './index';

storiesOf('Atoms/Progress', module)
  .add('Progress', () => (
    <div style={{width: '400px', padding: '15px', backgroundColor: 'white'}}>
      <Progress size={76} themecolor="success" />
    </div>
  ));
