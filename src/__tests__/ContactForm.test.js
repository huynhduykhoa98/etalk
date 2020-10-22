/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from '../components/Contact/ContactForm/ContactForm';
import Contact from '../components/Contact/Contact';

Enzyme.configure({ adapter: new Adapter() });
// test prop
test('render a document title (prop)', () => {
  const wrapper = shallow(<ContactForm prop="Events" />);
  expect(wrapper.prop('prop')).toEqual('Events');
});
// test shallow
it('test render', () => {
  const wrapped = shallow(<Contact />);
  expect(wrapped.find(ContactForm).length).toEqual(1);
});
