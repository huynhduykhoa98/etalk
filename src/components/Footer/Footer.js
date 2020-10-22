/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <FormattedMessage
            id="footerText"
            values={{
              p: (...chunks) => <p>{chunks}</p>,
              strong: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
