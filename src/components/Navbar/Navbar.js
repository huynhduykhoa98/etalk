/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Brand from './Brand';
import CollapsibleNavbar from './CollapseNavbar/CollapsibleNavbar';

class Navbar extends Component {
  render() {
    return (
      <nav className=" navbar navbar-expand-lg navbar-light bg-light fixed-top hidden-navbar ">
        <div className="container">
          <Brand img="./images/spider-logo.svg" alt="Spider" />
          <button
            id="toggleBtn"
            className="toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="icon-bar" />
          </button>

          <CollapsibleNavbar></CollapsibleNavbar>
        </div>
      </nav>
    );
  }
}

export default Navbar;
