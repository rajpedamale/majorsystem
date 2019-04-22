import React, { Component } from "react";
import {
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

export default class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand tag={RRNavLink} exact to="/" className="mr-auto">
            Home
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="navbar-dark mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/randomnumbers">
                  Random Numbers
                </NavLink>
              </NavItem>
              <GoogleAuth />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
