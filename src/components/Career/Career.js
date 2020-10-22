/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Collape from './Collapse';

class Career extends Component {
  render() {
    return (
      <section>
        <div class="container">
          <a id="career">
            <h2>
              <FormattedMessage id="mainHeader" values={{ order: 7 }} />
            </h2>
          </a>
          <FormattedMessage
            id="careerText"
            values={{
              p: (...chunks) => <p>{chunks}</p>,
              strong: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
          <Collape dt="collapse" href="#contentId" id="contentId" value="1" />
          <Collape dt="collapse" href="#contentId1" id="contentId1" value="2" />
          <Collape dt="collapse" href="#contentId2" id="contentId2" value="3" />
        </div>
      </section>
    );
  }
}
export default Career;
