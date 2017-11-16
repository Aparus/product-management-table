import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductTable from "./product/components/ProductTable";
import store from "./product/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <ProductTable />
        </Provider>
      </div>
    );
  }
}

export default App;
