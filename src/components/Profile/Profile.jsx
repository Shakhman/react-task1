/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import PropTypes from "prop-types";

const wrapStyle = {
  margin: "0 auto",
  width: "60%"
};

const listStyle = {
  width: "20%",
  margin: "0 auto"
};

class Profile extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  };

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
        <ListGroupItem key={val.link}>
          <a href={val.link} target="_blank">
            {val.label}
          </a>
        </ListGroupItem>
      );
    });
  };

  render() {
    const { city, languages, social } = this.props.profile;
    return (
      Object.keys(this.props.profile).length !== 0 && (
        <div style={wrapStyle}>
          <div>City: {city}</div>
          <br />
          <div>Languages: {languages && languages.join(", ")}</div>
          <br />
          <div>Socials: </div>
          <br />
          <div>
            {social && (
              <ListGroup style={listStyle}>
                {this.filteredSocials(social)}
              </ListGroup>
            )}
          </div>
        </div>
      )
    );
  }
}

export default Profile;
