import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TinyTimer from "tiny-timer";

import * as actions from "../actions/timerActions";

class Timer extends Component {
  createNewTimer() {
    if (this.timer) {
      this.timer.stop();
    }

    this.timer = new TinyTimer({ stopwatch: true });

    this.timer.on("tick", ms => this.props.actions.timerTick(ms));

    this.timer.start(60 * 1000 * 10); // run for 10 minutes
  }

  componentDidMount() {
    this.createNewTimer();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  componentDidUpdate() {
    const { reset } = this.props;
    if (reset) {
      this.createNewTimer();
    }
  }

  render() {
    const { time } = this.props;

    return <div>{time}</div>;
  }
}

const mapStateToProps = state => {
  return { time: state.timerTick.time, reset: state.timerTick.reset };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  reset: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
