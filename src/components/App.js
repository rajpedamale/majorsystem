/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";
import React from "react";
import { hot } from "react-hot-loader";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import RandomNumbers from "./containers/RandomNumbers";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    const activeStyle = { color: "blue" };
    return (
      <div>
        <div className="ui menu">
          <NavLink
            exact
            to="/"
            className="header item"
            activeStyle={activeStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/randomnumbers"
            className="item"
            activeStyle={activeStyle}
          >
            Random Numbers
          </NavLink>
        </div>
        <div className="ui centered grid">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/randomnumbers" component={RandomNumbers} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
