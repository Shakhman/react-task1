import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setIsProcessing } from "../../redux/actions/commonActions";
import Profile from "../../components/Profile/Profile";
import { Layout } from "element-react";

class ProfilePage extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.setIsProcessing(true);
    }
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect push to="/" />;
    }

    return (
      <Layout.Row>
        <Layout.Col>
          <Profile />
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default connect(
  ({ auth }) => ({
    user: auth.user,
    isAuth: auth.isAuth
  }),
  { setIsProcessing }
)(ProfilePage);
