import React from 'react';
import {shallow} from 'enzyme';
import mock from 'jest-mock';
import expect from 'expect';

import {Table} from './index';
import Icon from '../Icon';

const clickFn = mock.fn();
const tableText = 'Table';
const iconType = 'alert';

let component;

describe('Table Snapshot', () => {
  it('renders correctly', () => {
const tableText = 'Table';
    component = shallow(<Table onClick={clickFn}>{tableText}</Table>);
    expect(component).toMatchSnapshot();
  });
});

export default describe('Table', () => {
  beforeEach(() => {
    component = shallow(<Table onClick={clickFn}>{tableText}</Table>);
  });
});
