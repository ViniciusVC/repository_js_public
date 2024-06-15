import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {Container} from './index';

export default describe('Container', () => {
  it('should render".', () => {
    const component = shallow(<Container />);

    expect(component.isEmptyRender()).toBeFalsy();
  });

  it('should render children components', () => {
    const children = <h1>Children Component</h1>;

    const component = shallow(<Container>{children}</Container>);

    expect(component.contains(children)).toBeTruthy();
  });
});
