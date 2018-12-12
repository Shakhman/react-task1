import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setIsProcessing } from "../redux/actions/commonActions";

const withIsProcessing = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      this.props.setIsProcessing(true);
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />;
        </Fragment>
      );
    }
  };
};

export default WrapperComponent =>
  connect(
    ({ common }) => ({
      isProcessing: common.isProcessing
    }),
    { setIsProcessing }
  )(withIsProcessing(WrapperComponent));
