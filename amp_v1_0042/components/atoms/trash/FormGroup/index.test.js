import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import FormGroup from '.';

describe('FormGroup', () => {
  it('should render', () => {
    const component = shallow(<FormGroup />);

    expect(component.isEmptyRender()).toBeFalsy();
  });
});
