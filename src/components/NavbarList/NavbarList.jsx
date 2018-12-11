import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "element-react";
import { connect } from "react-redux";

const linkStyle = {
  textDecoration: "none"
};

class NavbarList extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired
  };

  render() {
    const { menu } = this.props;
    return menu
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .map(
        ({ link, text, isAuth }, k) =>
          (!isAuth || isAuth === this.props.isAuth) && (
            <Menu.Item key={k} index={k + ""}>
              <Link style={linkStyle} to={link}>
                {text}
              </Link>
            </Menu.Item>
          )
      );
  }
}

export default connect(
  ({ auth }) => ({
    isAuth: auth.isAuth
  }),
  {}
)(NavbarList);
