import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { getFakeMembersFromUtil } from "./utilities-promise";

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
    // let div;
    // let container = document.getElementById('root');
    // console.log(container);
    // for (let i = 0; i < 5; i++) {
    //   div = document.createElement("div");
    //   div.onclick = () => {
    //     alert("This is box #" + i);
    //   };
    //   container.appendChild(div);
    // }

    // Default parameters for function
    // function defaultParametersForFunction (arg1 = 'This is the default value') {
    //   console.log(arg1);
    // }
    // defaultParametersForFunction('Passed in value');
    // defaultParametersForFunction();

    // arrow function
    // const tahoe = {
    //   resorts: ['Kirwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    //   print: function(delay=1000) {
    //     setTimeout(function() {
    //       console.log(this);
    //     }, delay);
    //   }
    // };
    // tahoe.print();
    // const tahoeCopy = tahoe;
    // tahoeCopy.resorts = ['Changed by tahoeCopy'];
    // console.log(tahoe.resorts);
    // console.log(tahoeCopy.resorts);

    // Promise
    // const getFakeMembers = (count) => {
    //   return new Promise((resolve, reject) => {
    //     const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    //     const request = new XMLHttpRequest();
    //     request.open('GET', api);
    //     request.onload = () => {
    //       (request.status === 200) ? resolve(JSON.parse(request.response)): reject(Error(request.statusText));
    //     }
    //     request.onerror = (err) => {
    //       return reject(err);
    //     }
    //     request.send();
    //   });
    // }
    // getFakeMembers(5).then(
    //   (members) => {
    //     console.log(members);
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // )

    // Import
    // getFakeMembersFromUtil(5).then(
    //   (members) => {
    //     console.log(members);
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // )

    // Function as argument
    // const argumentFun = (fn, mess) => {
    //   fn(mess);
    // };
    // argumentFun(message => {
    //   console.log(message);
    // }, "This is the message that sent to the fn");

    // Function as returned value
    // const createScream = logger => {
    //   return message => {
    //     logger(message.toUpperCase() + "!!!!");
    //   };
    // };
    // const scream = createScream(message => {
    //   console.log(message);
    // });
    // scream("test function");

    // Functional Concepts: Immutability(Object)
    const color_lawn = {
      title: "lawn",
      color: "#fff",
      rating: 0,
    };
    const rateColor = (color, rating) => {
      return {
        ...color,
        rating,
      };
    };
    const new_color_lawn = rateColor(color_lawn, 12);
    console.log(color_lawn.rating);
    console.log(new_color_lawn.rating);
    // Functional Concepts: Immutability(Array)
    const list = [
      { title: "title1" },
      { title: "title2" },
      { title: "title3" },
    ];
    const addColor = (colors, title) => {
      return [...colors, { title }];
    };
    const newList = addColor(list, "title4");
    console.log(list);
    console.log(newList);

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
      <div className="container" />
    );
  }
}

export default App;
