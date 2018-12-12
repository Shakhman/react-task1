import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "element-react";
import PropTypes from "prop-types";

const formStyle = {
  width: "50%",
  margin: "0 auto"
};

const titleStyle = {
  textAlign: "center"
};
class LoginForm extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    state: PropTypes.object.isRequired
  };

  render() {
    const { form, rules } = this.props.state;
    const { email, password } = this.props.state.form;
    const { isProcessing, handleChange, handleSubmit } = this.props;

    return (
      <Fragment>
        <h2 style={titleStyle}>Login</h2>
        <Form ref="form" style={formStyle} model={form} rules={rules}>
          <Form.Item label="Email" prop="email">
            <Input
              type="email"
              value={email}
              onChange={handleChange.bind(this, "email")}
              autoComplete="on"
            />
          </Form.Item>
          <Form.Item label="Password" prop="password">
            <Input
              type="password"
              value={password}
              onChange={handleChange.bind(this, "password")}
              autoComplete="on"
            />
          </Form.Item>
          <Button disabled={isProcessing} type="primary" onClick={handleSubmit}>
            {isProcessing ? "Checking" : "Log In"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default LoginForm;
