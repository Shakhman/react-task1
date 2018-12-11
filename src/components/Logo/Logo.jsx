import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const logoStyle = {
  color: "#1F2D3D",
  fontWeight: "bold",
  fontSize: "16px",
  textDecoration: "none"
};
class Logo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };

  render() {
    const { text, link } = this.props;
    return (
      <Link style={logoStyle} className="navbar-brand" to={link}>
        {text}
      </Link>
    );
  }
}

export default Logo;
