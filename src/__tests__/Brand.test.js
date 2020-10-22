/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Brand from '../components/Navbar/Brand';
import Navbar from '../components/Navbar/Navbar';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Navbar />);
  expect(wrapped.find(Brand).length).toEqual(1);
});
