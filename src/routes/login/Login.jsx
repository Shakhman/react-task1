import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const titleStyle = {
  textAlign: "center"
};

export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <br />
          <h2 style={titleStyle}>Login</h2>
          <LoginForm />
        </div>
      </div>
    );
  }
}
