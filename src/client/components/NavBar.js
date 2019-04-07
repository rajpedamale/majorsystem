import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar color="dark">
        <Nav>
          <NavItem active={true}>
            <NavLink tag={RRNavLink} exact to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/randomnumbers">
              Random Numbers
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
