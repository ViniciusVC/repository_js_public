import React from 'react';
import {mount} from 'enzyme';
import expect from 'expect';

export const tests = (component) => {
	return describe('Barra de consumo', () => {
		it('should have the text "dados de internet".', () => {
			const output = mount(component);
			expect(output.text()).toContain('dados de internet');
		});
	});
};
