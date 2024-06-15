import React from 'react';
import {storiesOf} from '@storybook/react';

import Tooltip from './index';

storiesOf('Atoms/TooltipDeprecated', module)
  .add('Tooltip', () => (
    <Tooltip />
  ));
