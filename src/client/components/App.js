/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import React from "react";
import { hot } from "react-hot-loader/index";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

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
        <Container fluid={true}>
          <Row>
            <Col md="" />
            <Col sm="12" md="8">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/randomnumbers" component={RandomNumbers} />
                <Route component={NotFoundPage} />
              </Switch>
            </Col>
            <Col md="" />
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
