/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions";
import { Card } from "element-react";

const wrapStyle = {
  margin: "0 auto",
  width: "60%"
};

const cardStyle = {
  margin: "25px 0"
};

const profileTitleStyle = {
  textAlign: "center"
};

class Profile extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.getProfile(this.props.user.id);
    }
  }

  filteredSocials = social => {
    let webValue;

    let newSocialArr = social.filter((val, k) => {
      if (val.label === "web") {
        webValue = val;
      }
      return val.label !== "web";
    });

    newSocialArr.unshift(webValue);

    return newSocialArr.map(val => {
      return (
        <div className="text item" key={val.link}>
          <a href={val.link} target="_blank">
            {val.label}
          </a>
        </div>
      );
    });
  };

  render() {
    const { city, languages, social } = this.props.profile;

    return (
      Object.keys(this.props.profile).length > 0 && (
        <div style={wrapStyle}>
          <h1 style={profileTitleStyle}>Profile</h1>
          <Card
            style={cardStyle}
            className="box-card"
            header={<h3 style={{ textAlign: "center" }}>City</h3>}
          >
            <div className="text item">{city}</div>
          </Card>
          <Card
            style={cardStyle}
            className="box-card"
            header={<h3 style={{ textAlign: "center" }}>Languages</h3>}
          >
            {languages &&
              languages.map((lang, k) => {
                return (
                  <div key={k} className="text item">
                    {lang}
                  </div>
                );
              })}
          </Card>
          <Card
            style={cardStyle}
            className="box-card"
            header={<h3 style={{ textAlign: "center" }}>Socials</h3>}
          >
            {social && this.filteredSocials(social)}
          </Card>
        </div>
      )
    );
  }
}

export default connect(
  ({ profile, auth }) => ({
    profile,
    user: auth.user
  }),
  { getProfile }
)(Profile);
