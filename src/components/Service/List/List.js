/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  render() {
    return (
      <ul className="list">
        <Card img="/images/frontend.svg" value="1" mainText="frontend" />
        <Card img="/images/backend.svg" value="2" mainText="backend" />
        <Card img="/images/mobile.svg" value="3" mainText="mobile" />
        <Card img="/images/fullstack.svg" value="4" mainText="fullstack" />
        <Card img="/images/dedicated.svg" value="5" mainText="dedicated" />
        <Card img="/images/maintenance.svg" value="6" mainText="maintenance" />
      </ul>
    );
  }
}

export default List;
