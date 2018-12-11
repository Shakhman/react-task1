import React, { Component, Fragment } from "react";
import { Form, Input, Button } from "element-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";
import { setError } from "../../redux/actions/errorActions";
import { setIsProcessing } from "../../redux/actions/commonActions";

const formStyle = {
  width: "50%",
  margin: "0 auto"
};

const titleStyle = {
  textAlign: "center"
};
class LoginForm extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired
  };

  state = {
    form: {
      email: "",
      password: ""
    },
    rules: {
      email: [
        { required: true, message: "Please input Email", trigger: "blur" },
        {
          type: "email",
          message: "Please input correct email address",
          trigger: "blur,change"
        }
      ],
      password: [
        { required: true, message: "Please input Password", trigger: "blur" }
      ]
    }
  };

  handleChange = (key, value) => {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.refs.form.validate(valid => {
      if (!valid) {
        return false;
      }
      this.props.setIsProcessing(true);
      this.props.loginUser({ ...this.state.form }, this.props.history);
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.setState({ isProcessing: false });
    }
  }

  render() {
    const { form, rules } = this.state;
    const { email, password } = this.state.form;
    const { isProcessing } = this.props;

    return (
      <Fragment>
        <h2 style={titleStyle}>Login</h2>
        <Form ref="form" style={formStyle} model={form} rules={rules}>
          <Form.Item label="Email" prop="email">
            <Input
              type="email"
              value={email}
              onChange={this.handleChange.bind(this, "email")}
              autoComplete="on"
            />
          </Form.Item>
          <Form.Item label="Password" prop="password">
            <Input
              type="password"
              value={password}
              onChange={this.handleChange.bind(this, "password")}
              autoComplete="on"
            />
          </Form.Item>
          <Button
            disabled={isProcessing}
            type="primary"
            onClick={this.handleSubmit}
          >
            {isProcessing ? "Checking" : "Log In"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default connect(
  ({ auth, common }) => ({
    isAuth: auth.isAuth,
    isProcessing: common.isProcessing
  }),
  { loginUser, setError, setIsProcessing }
)(withRouter(LoginForm));
