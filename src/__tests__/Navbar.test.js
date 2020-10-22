/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/Navbar/Navbar';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Navbar).length).toEqual(1);
});
