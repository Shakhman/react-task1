import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Card } from "element-react";

const titleStyle = {
  textAlign: "center"
};

const cardStyle = {
  margin: "20px 0"
};
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
            <Card
              style={cardStyle}
              key={item.id}
              className="box-card"
              header={<h2 style={titleStyle}>{item.title}</h2>}
            >
              <div className="text item">{item.text}</div>
            </Card>
          );
        })}
      </Fragment>
    );
  }
}
