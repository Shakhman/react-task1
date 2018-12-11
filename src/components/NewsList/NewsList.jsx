import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class NewsList extends Component {
  static propTypes = {
    news: PropTypes.array.isRequired
  };
  render() {
    const { news } = this.props;
    return (
      <Fragment>
        {news.map(item => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
