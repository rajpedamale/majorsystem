/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import React from "react";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import RandomNumbers from "./containers/RandomNumbers";
import NavBar from "./NavBar";
import "../constants/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col" />
            <div className="col-sm-6 ">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/randomnumbers" component={RandomNumbers} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <div className="col" />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
