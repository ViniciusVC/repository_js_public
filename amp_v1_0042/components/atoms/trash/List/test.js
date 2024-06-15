import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

describe('List >', () => {
    it('deve renderizar conforme snapshot', () => {
        const wrapper = shallow(<Component>children</Component>);
        expect(wrapper.dive().getElement()).toMatchSnapshot();
    });
});
