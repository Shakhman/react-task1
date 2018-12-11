import React, { Component } from "react";
import { Layout } from "element-react";

const wrapStyle = {
  height: "100vh"
};
class IndexPage extends Component {
  render() {
    return (
      <Layout.Row style={wrapStyle} type="flex" justify="center" align="middle">
        <h1>React Task</h1>
      </Layout.Row>
    );
  }
}

export default IndexPage;
