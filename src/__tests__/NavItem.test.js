/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollapsibleNavbar from '../components/Navbar/CollapseNavbar/CollapsibleNavbar';
import NavItem from '../components/Navbar/CollapseNavbar/NavItem';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<CollapsibleNavbar />);
  expect(wrapped.find(NavItem).length).toEqual(7);
});
