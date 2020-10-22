/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Img from '../components/Client/Img/Img';
import Client from '../components/Client/Client';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<Client />);
  expect(wrapped.find(Img).length).toEqual(13);
});
