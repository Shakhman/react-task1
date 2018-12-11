import React, { Component } from "react";
import { resetErrors } from "../redux/actions/errorActions";
import { connect } from "react-redux";
import { Message } from "element-react";

const withErrors = WrappedComponent => {
  return class extends Component {
    componentWillReceiveProps(nextProps) {
      if (nextProps.errors.length > 0) {
        nextProps.errors.map((error, k) => {
          Message({ message: error, type: "error", showClose: true });
        });
      }
    }

    componentWillUpdate(prevProps) {
      if (prevProps.errors.length > 0) {
        this.props.resetErrors();
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WrapperComponent =>
  connect(
    ({ errors }) => ({
      errors
    }),
    { resetErrors }
  )(withErrors(WrapperComponent));
