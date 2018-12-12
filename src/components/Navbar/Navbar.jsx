import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Button } from "element-react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import NavbarList from "../NavbarList/NavbarList";

class Navbar extends Component {
  static propTypes = {
    handleBtnClick: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
  };

  render() {
    const { items, isAuth, handleBtnClick } = this.props;
    return (
      <Menu className="el-menu-demo" mode="horizontal">
        <Layout.Col span="3">
          <Menu.Item index="">
            <Logo link="/" text="React Task" />
          </Menu.Item>
        </Layout.Col>
        <Layout.Col span="16">
          {items.length > 0 && <NavbarList menu={items} />}
        </Layout.Col>
        <Layout.Col span="3">
          <Menu.Item index="" style={{ float: "right" }}>
            <Link onClick={handleBtnClick} to={isAuth ? "/logout" : "/login"}>
              <Button type="primary">{isAuth ? "Log Out" : "Log In"}</Button>
            </Link>
          </Menu.Item>
        </Layout.Col>
      </Menu>
    );
  }
}

export default Navbar;
