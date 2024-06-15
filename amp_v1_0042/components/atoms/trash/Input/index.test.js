import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import Input from '.';

describe('Input', () => {
  it('should render', () => {
    const component = shallow(<Input name="name" value="" />);

    expect(component.isEmptyRender()).toBeFalsy();
  });

  it('should accept prop value', () => {
    const value = 'value';

    const component = shallow(<Input name="name" value={value} />);

    expect(component.getElement().props.value).toBe(value);
  });
});
