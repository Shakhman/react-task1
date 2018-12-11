import React, { Component, Fragment } from "react";
import { NavItem } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class NavbarItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };

  render() {
    const { link, text } = this.props;
    return (
      <Fragment>
        <NavItem>
          <Link className="nav-link" to={link}>
            {text}
          </Link>
        </NavItem>
      </Fragment>
    );
  }
}
