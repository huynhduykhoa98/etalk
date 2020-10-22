/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class CardShortcut extends Component {
  render() {
    return (
      <a href={`${this.props.href}`} title={`${this.props.title}`}>
        <img src={`${this.props.img}`} alt={`${this.props.title}`} />
        {`${this.props.title}`}
      </a>
    );
  }
}

export default CardShortcut;
