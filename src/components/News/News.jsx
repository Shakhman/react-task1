import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../redux/actions/newsActions";
import NewsList from "../NewsList/NewsList";

const newsTitle = {
  textAlign: "center"
};

const newsStyle = {
  margin: "0 auto",
  width: "50%"
};
class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { data, count } = this.props.news;
    return (
      <div style={newsStyle}>
        <h1 style={newsTitle}>News</h1>
        {data.length > 0 && <NewsList news={data} />}
        <h4>Total: {count}</h4>
      </div>
    );
  }
}

export default connect(
  ({ news }) => ({
    news
  }),
  { getNews }
)(News);
