import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import ErrorMessage from './index';

export default describe('ErrorMessage', () => {
  it('should render', () => {
    const component = shallow(<ErrorMessage />);

    expect(component.isEmptyRender()).toBeFalsy();
  });

  it('should display children text', () => {
    const text = 'Error message';

    const component = shallow(<ErrorMessage>{text}</ErrorMessage>);

    expect(component.contains(text)).toBeTruthy();
  });
});
