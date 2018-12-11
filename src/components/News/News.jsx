import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getNews } from "../../redux/actions/newsActions";
import NewsList from "../NewsList/NewsList";

const newsTitle = {
  textAlign: "center"
};

class News extends Component {
  componentDidMount() {
    this.props.getNews();
  }
  render() {
    const { data, count } = this.props.news;
    return (
      <Fragment>
        <br />
        <h1 style={newsTitle}>News</h1>
        <br />
        {data.length > 1 && <NewsList news={data} />}
        <br />
        <h6>Total: {count}</h6>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ news }) => ({
  news
});

export default connect(
  mapStateToProps,
  { getNews }
)(News);
