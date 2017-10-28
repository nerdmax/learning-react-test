import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { test } from "./test";
import { Chapter3 } from "./Chapter3";
import { Chapter5Recipe } from "./Chapter5";

class App extends Component {
  render() {
    // test();
    // Chapter3();
    Chapter5Recipe();
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="container">
        <h1>This is an h1 test{test()()}</h1>
      </div>
    );
  }
}

export default App;
