/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Collapse from '../components/Career/Collapse';
import Career from '../components/Career/Career';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Career />);
  expect(wrapped.find(Collapse).length).toEqual(3);
});
