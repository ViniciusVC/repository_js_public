import React from 'react';
import {storiesOf} from '@storybook/react';

import Link from './index';
import Icon from '../Icon';

storiesOf('Atoms/Link', module)
  .add('with text', () => <Link href="#">Link</Link>)
  .add('with icon', () => (
    <Link href="#">
      <Icon type="plus" />
    </Link>
  ))
  .add('with text and icon', () => (
    <Link href="#" icon="plus">
      Link
    </Link>
  ));
