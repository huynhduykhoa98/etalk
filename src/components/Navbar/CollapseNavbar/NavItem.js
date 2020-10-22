/* eslint-disable linebreak-style */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class NavItem extends Component {
  render() {
    return (
      <li className="nav-item hover-underline-animation ">
        <a className="nav-link" href={this.props.id}>
          <FormattedMessage
            id="mainHeader"
            values={{ order: `${this.props.value}` }}
          />
        </a>
        <span className="sr-only" />
      </li>
    );
  }
}

export default NavItem;
