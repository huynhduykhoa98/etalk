/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../components/Technology/Card/Card';
import Teachnology from '../components/Technology/Technology';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Teachnology />);
  expect(wrapped.find(Card).length).toEqual(1);
});
