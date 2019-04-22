import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Swipeable } from "react-swipeable";

import * as actions from "../../actions/randomNumbersActions";
import RandomNumberContent from "./RandomNumberContent";
import Timer from "../Timer";

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
    if (this.props.randomNumbers.length === 0) return null;

    const propsForContent = {
      decrementCurrentLocation: this.decrementCurrentLocation,
      randomNumber: this.props.randomNumbers[this.props.currentLocation],
      incrementCurrentLocation: this.incrementCurrentLocation
    };

    return (
      <Fragment>
        <Swipeable {...this.swipeConfig}>
          <RandomNumberContent {...propsForContent} />
        </Swipeable>
        <div className=".col">{this.props.currentLocation}</div>
        <Timer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomNumbers: state.randomNumbers,
    currentLocation: state.currentLocation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

RandomNumbersPage.propTypes = {
  randomNumbers: PropTypes.array.isRequired,
  currentLocation: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomNumbersPage);
