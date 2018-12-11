import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Message } from "element-react";
import { connect } from "react-redux";
import { Loading } from "element-react";

import Header from "../Header/Header";

// Pages
import Index from "../../routes/index/IndexPage";
import Login from "../../routes/login/LoginPage";
import News from "../../routes/news/NewsPage";
import Profile from "../../routes/profile/ProfilePage";

import { resetErrors } from "../../redux/actions/errorActions";

class Main extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length > 0) {
      nextProps.errors.map((error, k) => {
        Message({ message: error, type: "error", showClose: true });
      });
    }
  }

  componentWillUpdate(prevProps) {
    if (prevProps.errors.length > 0) {
      this.props.resetErrors();
    }
  }

  render() {
    const { isProcessing } = this.props;
    return (
      <Router>
        <Fragment>
          {isProcessing && <Loading fullscreen />}
          <Header />
          <Switch>
            <Route path="/login" component={Login} exac />
            <Route path="/news" component={News} exac />
            <Route path="/profile" component={Profile} exac />
            <Route path="/" component={Index} exac />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  ({ errors, common }) => ({
    errors,
    isProcessing: common.isProcessing
  }),
  { resetErrors }
)(Main);
