/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Technology from '../components/Technology/Technology';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Technology).length).toEqual(1);
});
