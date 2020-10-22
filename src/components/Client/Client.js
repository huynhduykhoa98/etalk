/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Img from './Img/Img';

class Client extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <a id="client">
            <h2>
              <FormattedMessage id="mainHeader" values={{ order: 5 }} />
            </h2>
          </a>
          <FormattedMessage
            id="clientText"
            values={{
              p: (...chunks) => <p>{chunks}</p>,
            }}
          />
          <br />
          <div class="pic1">
            <Img
              img="https://spider.vn//images/tbwa-logo.png"
              alt="TBWA Vietnam"
            />
            <Img
              img="https://spider.vn//images/eightfour-logo.png"
              alt="EightFour"
            />
            <Img
              img="https://spider.vn//images/nor-feed-logo.png"
              alt="NorFeed"
            />
            <Img
              img="https://spider.vn//images/grab-logo.png"
              alt="Grab Vietnam"
            />
            <Img
              img="https://spider.vn//images/nashtech-logo.svg"
              alt="NashTech"
            />
            <Img
              img="https://spider.vn//images/pyco-logo.png"
              alt="Pyramid Consulting Vietnam"
            />
            <Img
              img="https://spider.vn//images/asia-plus-logo.png"
              alt="Asia Plus"
            />
            <Img
              img="https://spider.vn//images/coconuts-logo.png"
              alt="Coconuts Media"
            />
            <Img
              img="https://spider.vn//images/thespcenewsroom-logo.png"
              alt="The Spce Newsroom"
            />
            <Img img="https://spider.vn//images/aichat-logo.png" alt="AiChat" />
            <Img
              img="https://spider.vn//images/smartepisodes-logo.png"
              alt="Smart Episodes"
            />
            <Img img="https://spider.vn//images/chope-logo.png" alt="Chope" />
            <Img
              img="https://spider.vn//images/risktalk-logo.png"
              alt="RiskTalk"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Client;
