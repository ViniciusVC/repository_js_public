import 'jsdom-global/register';
import React from 'react';
import {shallow, mount} from 'enzyme';

import Collapsible from './index';

const contentText = 'Collapsible';

describe('Collapsible', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Collapsible>
        {contentText}
      </Collapsible>
    );
  });

  it('should have height 0 if closed', () => {
    expect(component.state('height')).toBe(0);
  });

  it('should accept a open prop for its own isOpen state', () => {
    const isOpen = true;

    component = mount(<Collapsible open={isOpen}>{contentText}</Collapsible>);

    expect(component.state('isOpen')).toBe(isOpen);
  });

  it('should render custom render if passed', () => {
    const render = jest.fn(() => <div>{contentText}</div>);

    component.setProps({render}).update();

    expect(render).toBeCalled();
  });

  it('should update isOpen if prop open is updated', () => {
    const isOpen = true;

    component.setProps({open: isOpen}).update().update();

    expect(component.state('isOpen')).toBe(isOpen);
  });
});
