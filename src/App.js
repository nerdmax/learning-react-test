import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    // var vs let, if
    // let letTest = 'letTest';
    // if (1) {
    //   let letTest = 'letTestChanged';
    //   console.log(letTest);
    // }
    // console.log(letTest);

    // var vs let, for
    let div;
    let container = document.getElementsByClassName('container');

    array.forEach(function(element) {
      
    }, this);


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
      <div className='container'>
        {letTest}
      </div>
    );
  }
}

export default App;
