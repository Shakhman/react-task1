import React, { Component } from "react";
import Main from "../Main/Main";
import { Provider } from "react-redux";
import store from "../../redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
