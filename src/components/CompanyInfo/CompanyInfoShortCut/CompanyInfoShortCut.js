/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class CompanyInfo extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h2>{this.props.companyName}</h2>

          <div className="main">
            <p>
              Address:
              <a
                href={this.props.linkAddress}
                title={this.props.titleAddress}
                rel="noreferrer"
              >
                {this.props.Address}
              </a>
            </p>
            <p>
              Mobile:
              <a href={this.props.linkPhone} title={this.props.titlePhone}>
                {this.props.Mobile}
              </a>
            </p>
            <p>
              Email:
              <a href={this.props.linkContact} title={this.props.titleContact}>
                {this.props.Email}
              </a>
            </p>
            <p>
              Website:
              <a href={this.props.linkWeb} title={this.props.titleWeb}>
                {this.props.Website}
              </a>
            </p>
            <p>
              Skype:
              <a
                href={this.props.linkSkyofBoss}
                title={this.props.titleSkyofBoss}
              >
                {this.props.Skype}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyInfo;
