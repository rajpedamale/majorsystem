import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Button } from "reactstrap";
import { Swipeable } from "react-swipeable";

import * as actions from "../../actions/randomNumbersActions";

class RandomNumbersPage extends Component {
  componentDidMount() {
    this.props.actions.generateRandomNumbers();
    document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = e => {
    switch (e.keyCode) {
      case 37: // Left
      case 38: // Up
        this.decrementCurrentLocation();
        break;
      case 39: // Right
      case 40: // Down
        this.incrementCurrentLocation();
        break;
      default:
    }
  };

  incrementCurrentLocation = () => {
    this.props.actions.forward(this.props.currentLocation);
  };

  decrementCurrentLocation = () => {
    this.props.actions.backward(this.props.currentLocation);
  };

  swipeConfig = {
    onSwipedLeft: this.decrementCurrentLocation,
    onSwipedUp: this.decrementCurrentLocation,
    onSwipedRight: this.incrementCurrentLocation,
    onSwipedDown: this.incrementCurrentLocation
  };

  render() {
    return (
      <Swipeable {...this.swipeConfig}>
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
      </Swipeable>
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
