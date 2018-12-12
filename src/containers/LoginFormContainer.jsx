import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../redux/actions/authActions";
import { setIsProcessing } from "../redux/actions/commonActions";
import LoginForm from "../components/LoginForm/LoginForm";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    setIsProcessing: PropTypes.func.isRequired,
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

    const {
      current: {
        refs: { form }
      }
    } = this.childRef;

    form.validate(valid => {
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
    if (nextProps.errors.length > 0) {
      this.setState({
        form: Object.assign({}, this.state.form, { password: "" })
      });
    }
  }

  render() {
    return (
      <LoginForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state}
        ref={this.childRef}
        {...this.props}
      />
    );
  }
}

export default connect(
  ({ auth, common, errors }) => ({
    isAuth: auth.isAuth,
    isProcessing: common.isProcessing,
    errors
  }),
  { loginUser, setIsProcessing }
)(withRouter(LoginFormContainer));
