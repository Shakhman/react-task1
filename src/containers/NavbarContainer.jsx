import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMenu } from "../redux/actions/menuActions";
import { logoutUser } from "../redux/actions/authActions";
import { setIsProcessing } from "../redux/actions/commonActions";
import Navbar from "../components/Navbar/Navbar";

class NavbarContainer extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
    getMenu: PropTypes.func.isRequired,
    setIsProcessing: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.getMenu();
  }

  handleBtnClick = e => {
    const { isAuth, setIsProcessing, logoutUser } = this.props;
    if (isAuth) {
      e.preventDefault();
      setIsProcessing(true);
      logoutUser();
    }
  };

  render() {
    return <Navbar {...this.props} handleBtnClick={this.handleBtnClick} />;
  }
}

export default connect(
  ({ auth, menu }) => ({
    isAuth: auth.isAuth,
    items: menu
  }),
  { getMenu, logoutUser, setIsProcessing }
)(NavbarContainer);
