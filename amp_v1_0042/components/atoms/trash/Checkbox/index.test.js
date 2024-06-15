import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Checkbox from '.';
import Check from '../Check';

describe('Checkbox', () => {
  it('should render', () => {
    const component = shallow(<Checkbox checked={false} />);

    expect(component.isEmptyRender()).toBeFalsy();
  });

  it('should render check inside the box if checked', () => {
    const component = shallow(<Checkbox checked />);

    expect(component.find(Check)).toHaveLength(1);
  });
});
