import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Layout } from "element-react";

class LoginPage extends Component {
  render() {
    return (
      <Layout.Row>
        <Layout.Col>
          <LoginForm />
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default LoginPage;
