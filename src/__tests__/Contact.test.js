/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from '../components/Contact/Contact';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Contact).length).toEqual(1);
});
