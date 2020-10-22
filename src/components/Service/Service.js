/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import List from './List/List';

class Service extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <a id="service">
            <h2>
              <FormattedMessage id="mainHeader" values={{ order: 3 }} />
            </h2>
          </a>
          <List />
        </div>
      </section>
    );
  }
}

export default Service;
