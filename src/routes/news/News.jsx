import React, { Component } from "react";
import NewsComponent from "../../components/News/News";
import { setIsProcessing } from "../../redux/actions/commonActions";
import { connect } from "react-redux";

class News extends Component {
  componentDidMount() {
    this.props.setIsProcessing(true);
  }

  render() {
    return <NewsComponent />;
  }
}

export default connect(
  null,
  { setIsProcessing }
)(News);
