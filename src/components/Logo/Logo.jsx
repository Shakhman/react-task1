import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Logo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };
  render() {
    const { text, link } = this.props;
    return (
      <Fragment>
        <Link className="navbar-brand" to={link}>
          {text}
        </Link>
      </Fragment>
    );
  }
}
