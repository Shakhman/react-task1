import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";

// Pages
import Index from "../../routes/index/IndexPage";
import Login from "../../routes/login/LoginPage";
import News from "../../routes/news/NewsPage";
import Profile from "../../routes/profile/ProfilePage";

// HOCs
import withErrors from "../../hocs/withErrors";
import withLoading from "../../hocs/withLoading";

class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
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

export default withErrors(withLoading(Main));
