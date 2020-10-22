/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Card extends Component {
  render() {
    return (
      <li>
        <img src={this.props.img} alt={this.props.maintext} width={100} />
        <div>
          <h3>
            <FormattedMessage
              id="serviceHeader"
              values={{ order: `${this.props.value}` }}
            />
          </h3>
          <FormattedMessage
            id="serviceText"
            values={{
              order: `${this.props.value}`,
              p: (chunks) => <p>{chunks}</p>,
            }}
          />
        </div>
      </li>
    );
  }
}

export default Card;
