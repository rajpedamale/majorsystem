import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as actions from "../actions/authActions";
import config from "../../config";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: config.clientId,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.actions.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.actions.signOut();
    }
  };

  trySignIn = () => {
    this.auth.signIn();
  };

  trySignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button color="danger" onClick={this.trySignOut}>
          <i className="google icon" />
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button color="danger" onClick={this.trySignIn}>
          <i className="google icon" />
          Sign In with Google
        </Button>
      );
    }
  }
  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

GoogleAuth.propTypes = {
  isSignedIn: PropTypes.bool,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
