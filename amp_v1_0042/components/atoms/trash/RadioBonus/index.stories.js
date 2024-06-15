import React from 'react';
import {storiesOf} from '@storybook/react';
import Radio from './index';

storiesOf('Atoms/Radio', module)
  .add('RadioBonus', () => (
    <div>
      <Radio padding={[24]} name="bonus" checked value="SIM" id="fill-murray" h>
        This text is a child content.
      </Radio>
      <Radio name="bonus" padding={[24]} margin={[16,0]} checked={false} value="NOPE" id="fill-murray-2">
        This text is a child content.
      </Radio>
    </div>
  ));
