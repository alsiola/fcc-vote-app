import NavLink from './NavLink';
import React from 'react';
import { shallow } from 'enzyme';

test('it renders without crashing', () => {
    const wrapper = shallow(<NavLink to="here">linky</NavLink>);
    expect(wrapper).toHaveLength(1);
});
