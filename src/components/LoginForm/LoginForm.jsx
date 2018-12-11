import React, { Component, Fragment } from "react";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";
import { setError } from "../../redux/actions/errorActions";
import { setIsProcessing } from "../../redux/actions/commonActions";

const FormStyle = {
  width: "50%",
  margin: "0 auto"
};

class LoginForm extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired
  };

  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (this.validate(email, password)) {
      this.props.setIsProcessing(true);
      this.props.loginUser({ email, password }, this.props.history);
    }
  };

  validate(email, password) {
    if (!email) {
      this.props.setError("Empty email input");
      return false;
    }

    if (!password) {
      this.props.setError("Empty password input");
      return false;
    }

    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.setState({ isProcessing: false });
    }
  }

  render() {
    const { email, password } = this.state;
    const { isProcessing } = this.props;

    return (
      <Fragment>
        <Form
          style={FormStyle}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.handleSubmit(e);
            }
          }}
        >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              autoComplete="on"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              autoComplete="on"
            />
          </FormGroup>
          <Button
            disabled={isProcessing}
            color="primary"
            onClick={this.handleSubmit}
          >
            {isProcessing ? "Checking" : "Log In"}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth, common }) => ({
  isAuth: auth.isAuth,
  isProcessing: common.isProcessing
});

export default connect(
  mapStateToProps,
  { loginUser, setError, setIsProcessing }
)(withRouter(LoginForm));
