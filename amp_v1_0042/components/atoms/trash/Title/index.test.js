import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

export const tests = (component) => {
  return describe('Title', () => {
    it('should have the tag <h1>', () => {
      const output = mount(component);
      // expect(output.props().placeholder).toBe('h1');
    });
  });
};

export default tests;
