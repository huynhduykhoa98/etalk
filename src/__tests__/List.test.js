/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from '../components/Service/List/List';
import Service from '../components/Service/Service';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Service />);
  expect(wrapped.find(List).length).toEqual(1);
});
