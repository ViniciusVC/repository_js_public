import React from 'react';
import {storiesOf} from '@storybook/react';

import Tooltip from './refactor';

storiesOf('Atoms/Tooltip', module)
  .add('Tooltip', () => (
    <Tooltip text="Tooltip text">
        Hover me
    </Tooltip>
  ));
