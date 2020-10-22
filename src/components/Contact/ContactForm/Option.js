/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Option extends Component {
  render() {
    return (
      <FormattedMessage
        id={this.props.id}
        values={{ order: `${this.props.value}` }}
      >
        {(message) => <option value={message}>{message}</option>}
      </FormattedMessage>
    );
  }
}

export default Option;
