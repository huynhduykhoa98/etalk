/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2>
            <FormattedMessage id="mainHeader" values={{ order: 6 }} />
          </h2>
          <FormattedMessage
            id="contactText"
            values={{
              p: (...chunks) => <p>{chunks}</p>,
              strong: (...chunks) => <strong>{chunks}</strong>,
            }}
          />
          <ContactForm></ContactForm>
        </div>
      </section>
    );
  }
}

export default Contact;
