/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

class Brand extends Component {
  render() {
    return (
      <div>
        <a className="navbar-brand" href="#">
          <img src={this.props.img} alt={this.props.alt} width={50} />
          <h1>
            <FormattedMessage id="brandMainText" />
          </h1>
        </a>
      </div>
    );
  }
}
export default Brand;
