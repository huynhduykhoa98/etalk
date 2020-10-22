/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// test shallow
it('test render', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
