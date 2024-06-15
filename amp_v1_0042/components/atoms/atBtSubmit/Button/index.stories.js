import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {specs} from 'storybook-addon-specifications';

import {Button} from './index';
import tests from './index.test';

const onClick = action('Button click');

storiesOf('Atoms/Button', module)
  .add('with text', () => {
    specs(() => tests);

    return (
      <Button onClick={onClick}>Button</Button>
    );
  })
  .add('inverted', () => (
    <Button inverted onClick={onClick}>Button</Button>
  ))
  .add('with color', () => (
    <Button color="secondary" onClick={onClick}>Button</Button>
  ))
  .add('with gradient', () => (
    <Button color="primary" gradient onClick={onClick}>Button</Button>
  ))
  .add('with icon', () => (
    <Button icon="plus" onClick={onClick}>Button</Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={onClick}>Button</Button>
  ));
