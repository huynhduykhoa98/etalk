/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  render() {
    return (
      <section id="welcome">
        <div className="container">
          <img src="./images/spider-logo.svg" width={210} />
          <h1>
            <FormattedMessage id="brandMainText" />
          </h1>
          <h2>
            <span>
              <FormattedMessage id="brandChangeText" values={{ order: 1 }} />
            </span>
            <span>
              <FormattedMessage id="brandChangeText" values={{ order: 2 }} />
            </span>
            <span>
              <FormattedMessage id="brandChangeText" values={{ order: 3 }} />
            </span>
          </h2>
        </div>
      </section>
    );
  }
}

export default Home;
