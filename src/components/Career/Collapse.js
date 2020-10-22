/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Career extends Component {
  render() {
    return (
      <div>
        <a data-toggle={this.props.dt} href={this.props.href}>
          <h3>
            <FormattedMessage
              id="careerHeader"
              values={{ order: `${this.props.value}` }}
            />
          </h3>
        </a>
        <div class="collapse my-collapse" id={this.props.id}>
          <FormattedMessage
            id="careerDesc"
            values={{
              order: `${this.props.value}`,
              p: (...chunks) => <p>{chunks}</p>,
              h4: (...chunks) => <h4>{chunks}</h4>,
              ul: (...chunks) => <ul>{chunks}</ul>,
              li: (...chunks) => <li>{chunks}</li>,
            }}
          />
        </div>
        <br />
      </div>
    );
  }
}
export default Career;
