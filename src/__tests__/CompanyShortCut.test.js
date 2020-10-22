/* eslint-disable linebreak-style */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CompanyInfo from '../components/CompanyInfo/CompanyInfo';
import CompanyInfoShortCut from '../components/CompanyInfo/CompanyInfoShortCut/CompanyInfoShortCut';

Enzyme.configure({ adapter: new Adapter() });
it('test render', () => {
  const wrapped = shallow(<CompanyInfo />);
  expect(wrapped.find(CompanyInfoShortCut).length).toEqual(1);
});
