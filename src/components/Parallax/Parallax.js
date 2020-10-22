/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class Parallax extends Component {
  render() {
    return (
      <section
        className="parallax"
        data-parallax="scroll"
        style={{ backgroundImage: `url(${this.props.bg})` }}
      ></section>
    );
  }
}

export default Parallax;
