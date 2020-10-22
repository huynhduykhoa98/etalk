/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import CompanyInfoShortCut from './CompanyInfoShortCut/CompanyInfoShortCut';

class CompanyInfo extends Component {
  render() {
    return (
      <CompanyInfoShortCut
        companyName="SPIDER COMPANY LIMITED"
        linkAddress="https://goo.gl/maps/h1ygYS3HS8xfzrPS8"
        titleAddress="Google maps"
        linkPhone="tel:+84905549909"
        titlePhone="Call us"
        linkContact="mailto:contact@spider.vn"
        titleContact="Contact us"
        linkWeb="//spider.vn"
        titleWeb="Visit our website"
        linkSkyofBoss="skype:len.nguyenvan?chat"
        titleSkyofBoss="Chat with us"
        // info
        Address=" 8 Hoang Minh Giam Street, Ward 9, Phu Nhuan District, Ho Chi Minh City, Vietnam"
        Mobile="+84 90 5549909"
        Email="contact@spider.vn"
        Website="spider.vn"
        Skype="len.nguyenvan"
      />
    );
  }
}

export default CompanyInfo;
