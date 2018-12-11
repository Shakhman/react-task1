import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications, { notify } from "react-notify-toast";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import Header from "../Header/Header";

import Index from "../../routes/index/Index";
import Login from "../../routes/login/Login";
import News from "../../routes/news/News";
import Profile from "../../routes/profile/Profile";

class Main extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      nextProps.errors.map(error => notify.show(error, "error"));
    }
  }

  render() {
    const { isProcessing } = this.props;
    return (
      <Router>
        <Fragment>
          <Notifications />
          {isProcessing && <Progress animated value="100" />}
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

const mapStateToProps = ({ errors, common }) => ({
  errors,
  isProcessing: common.isProcessing
});

export default connect(
  mapStateToProps,
  null
)(Main);
