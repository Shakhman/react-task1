import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getProfile } from "../../redux/actions/profileActions";
import { setIsProcessing } from "../../redux/actions/commonActions";
import ProfileComp from "../../components/Profile/Profile";

const profileWrapStyle = {
  textAlign: "center"
};

class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.setIsProcessing(true);
      this.props.getProfile(this.props.user.id);
    }
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect push to="/" />;
    }

    return (
      <div style={profileWrapStyle}>
        <br />
        <h1>Profile</h1>
        <br />
        <ProfileComp profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profile, errors }) => ({
  user: auth.user,
  profile,
  errors,
  isAuth: auth.isAuth
});

export default connect(
  mapStateToProps,
  { getProfile, setIsProcessing }
)(Profile);
