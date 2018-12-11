import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar />
        </header>
      </Fragment>
    );
  }
}
