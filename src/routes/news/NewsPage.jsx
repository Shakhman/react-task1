import React, { Component } from "react";
import News from "../../components/News/News";
import { Layout } from "element-react";
import withIsProcessing from "../../hocs/withIsProcessing";

class NewsPage extends Component {
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

export default withIsProcessing(NewsPage);
