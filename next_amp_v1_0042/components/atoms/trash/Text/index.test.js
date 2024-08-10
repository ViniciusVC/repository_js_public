import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

export const tests = (component) => {
  return describe('Text', () => {
    it('should have the Text "Sample Text".', () => {
      const output = mount(component);
      expect(output.text()).toContain('Sample Text');
    });
    it('should have the attribute class.', () => {
      const output = mount(component);
      expect(output.getDOMNode().getAttribute('class')).toBeDefined();
    });
    it('should have a class containing "*__text".', () => {
      const output = mount(component);
      const className = output.getDOMNode().getAttribute('class').split(' ').filter(item => item.match(/(__text)$/) !== null);
      expect(className).toHaveLength(1);
    });
    it('should have prop "onClick".', () => {
      const output = mount(component);
      expect(output.prop('onClick')).toBeDefined();
    });
  });
};

export default tests;
