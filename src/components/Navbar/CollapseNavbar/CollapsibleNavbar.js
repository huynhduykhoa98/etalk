/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import NavItem from './NavItem';

class CollapsibleNavbar extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav">
          <NavItem id="#" value="1" />
          <NavItem id="#about" value="2" />
          <NavItem id="#service" value="3" />
          <NavItem id="#technology" value="4" />
          <NavItem id="#client" value="5" />
          <NavItem id="#contact" value="6" />
          <NavItem id="#career" value="7" />
        </ul>
      </div>
    );
  }
}

export default CollapsibleNavbar;
