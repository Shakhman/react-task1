import React, { Component, Fragment } from "react";
import { Navbar as ReactstapNavbar, Nav, Button } from "reactstrap";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavbarItem from "../NavbarItem/NavbarItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        text: "News",
        link: "/news",
        order: 1,
        isAuth: false
      },
      {
        text: "Profile",
        link: "/profile",
        order: 2,
        isAuth: true
      }
    ];
  }

  render() {
    return (
      <Fragment>
        <ReactstapNavbar color="light" light expand="md">
          <Logo link="/" text="React Task" />
          <Nav className="ml-auto" navbar>
            {this.items
              .sort((a, b) => (a.order > b.order ? 1 : -1))
              .map(
                ({ link, text, isAuth }, k) =>
                  (!isAuth || isAuth === this.props.isAuth) && (
                    <NavbarItem key={k} text={text} link={link} />
                  )
              )}
            <Link to={this.props.isAuth ? "/logout" : "/login"}>
              <Button color="primary">
                {this.props.isAuth ? "Log Out" : "Log In"}
              </Button>
            </Link>
          </Nav>
        </ReactstapNavbar>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth
});

export default connect(
  mapStateToProps,
  null
)(Navbar);
