import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Loading } from "element-react";

const withLoading = WrappedComponent => {
  return class extends Component {
    render() {
      const { isProcessing } = this.props;
      return (
        <Fragment>
          {isProcessing && <Loading fullscreen />}
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
    {}
  )(withLoading(WrapperComponent));
