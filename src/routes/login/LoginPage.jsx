import React, { Component } from "react";
import { Layout } from "element-react";
import LoginFormContainer from "../../containers/LoginFormContainer";

class LoginPage extends Component {
  render() {
    return (
      <Layout.Row>
        <Layout.Col>
          <LoginFormContainer />
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default LoginPage;
