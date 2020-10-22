/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../components/Service/List/Card';
import List from '../components/Service/List/List';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<List />);
  expect(wrapped.find(Card).length).toEqual(6);
});
