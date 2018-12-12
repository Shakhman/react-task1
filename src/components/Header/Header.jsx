import React, { Component } from "react";
import { Layout } from "element-react";
import NavbarContainer from "../../containers/NavbarContainer";

class Header extends Component {
  render() {
    return (
      <Layout.Row gutter="22">
        <header>
          <NavbarContainer />
        </header>
      </Layout.Row>
    );
  }
}

export default Header;
