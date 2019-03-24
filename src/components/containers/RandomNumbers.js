import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Button } from "reactstrap";

import * as actions from "../../actions/randomNumbersActions";

class RandomNumbersPage extends Component {
  componentDidMount() {
    this.props.actions.generateRandomNumbers();
  }

  incrementCurrentLocation = () => {
    this.props.actions.forward(this.props.currentLocation);
  };

  decrementCurrentLocation = () => {
    this.props.actions.backward(this.props.currentLocation);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="3" className="nav-buttons">
            <Button
              size="lg"
              color="primary"
              block={true}
              onClick={this.decrementCurrentLocation}
            >
              Previous
            </Button>
          </Col>
          <Col sm="6">
            <div className="main-content display-1 text-center">
              <span className="align-middle">
                {this.props.randomNumbers[this.props.currentLocation]}
              </span>
            </div>
          </Col>
          <Col sm="3" className="nav-buttons">
            <Button
              size="lg"
              color="primary"
              block={true}
              onClick={this.incrementCurrentLocation}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    randomNumbers: state.randomNumbers,
    currentLocation: state.currentLocation
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

RandomNumbersPage.propTypes = {
  randomNumbers: PropTypes.array.isRequired,
  currentLocation: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomNumbersPage);
