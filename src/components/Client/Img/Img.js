/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class Img extends Component {
  render() {
    return <img src={this.props.img} alt={this.props.alt} />;
  }
}
export default Img;
