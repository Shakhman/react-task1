import React, { Component, Fragment } from "react";
import { Jumbotron as ReactstrapJumbotron, Container } from "reactstrap";

export default class Jumbotron extends Component {
  render() {
    return (
      <Fragment>
        <ReactstrapJumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </ReactstrapJumbotron>
      </Fragment>
    );
  }
}
