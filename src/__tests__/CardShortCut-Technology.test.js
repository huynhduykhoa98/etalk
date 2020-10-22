/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardShortcut from '../components/Technology/Card/CardShortcut';
import Card from '../components/Technology/Card/Card';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Card />);
  expect(wrapped.find(CardShortcut).length).toEqual(66);
});
