/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Card from './Card/Card';

class Technology extends Component {
  render() {
    return (
      <section>
        {/* form technology */}
        <div className="container">
          <a id="technology">
            <h2>
              <FormattedMessage id="mainHeader" values={{ order: 4 }} />
            </h2>
          </a>
          <br />
          <figure>
            <img
              src="./images/spider-technologies.jpg"
              alt="spider-technology"
            />
          </figure>
          <Card></Card>
        </div>
      </section>
    );
  }
}

export default Technology;
