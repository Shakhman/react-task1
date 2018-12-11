import React, { Component } from "react";
import { Layout } from "element-react";
import Navbar from "../Navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <Layout.Row gutter="22">
        <header>
          <Navbar />
        </header>
      </Layout.Row>
    );
  }
}

export default Header;
