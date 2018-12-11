import React, { Component } from "react";
import { Layout, Menu, Button } from "element-react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavbarList from "../NavbarList/NavbarList";
import { getMenu } from "../../redux/actions/menuActions";
import { logoutUser } from "../../redux/actions/authActions";
import { setIsProcessing } from "../../redux/actions/commonActions";

class Navbar extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  handleBtnClick = e => {
    if (this.props.isAuth) {
      e.preventDefault();
      this.props.setIsProcessing(this);
      this.props.logoutUser();
    }
  };

  render() {
    const { items, isAuth } = this.props;
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
            <Link
              onClick={this.handleBtnClick}
              to={isAuth ? "/logout" : "/login"}
            >
              <Button type="primary">{isAuth ? "Log Out" : "Log In"}</Button>
            </Link>
          </Menu.Item>
        </Layout.Col>
      </Menu>
    );
  }
}

export default connect(
  ({ auth, menu }) => ({
    isAuth: auth.isAuth,
    items: menu
  }),
  { getMenu, logoutUser, setIsProcessing }
)(Navbar);
