import React, { Component } from "react";
import News from "../../components/News/News";
import { setIsProcessing } from "../../redux/actions/commonActions";
import { connect } from "react-redux";
import { Layout } from "element-react";

class NewsPage extends Component {
  componentDidMount() {
    this.props.setIsProcessing(true);
  }

  render() {
    return (
      <Layout.Row>
        <Layout.Col>
          <News />
        </Layout.Col>
      </Layout.Row>
    );
  }
}

export default connect(
  null,
  { setIsProcessing }
)(NewsPage);
