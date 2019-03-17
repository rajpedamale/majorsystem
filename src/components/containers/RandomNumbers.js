import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

  renderNumbers = () => {
    if (this.props.randomNumbers.length === 0) {
      return "";
    }
    return (
      <div className="ui card">
        <div className="content">
          <div className="center aligned header">
            {this.props.randomNumbers[this.props.currentLocation]}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <button className="ui button" onClick={this.decrementCurrentLocation}>
          Previous
        </button>
        {this.renderNumbers()}
        <button className="ui button" onClick={this.incrementCurrentLocation}>
          Next
        </button>
      </div>
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
