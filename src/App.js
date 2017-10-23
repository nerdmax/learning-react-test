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
    // const color_lawn = {
    //   title: "lawn",
    //   color: "#fff",
    //   rating: 0,
    // };
    // const rateColor = (color, rating) => {
    //   return {
    //     ...color,
    //     rating,
    //   };
    // };
    // const new_color_lawn = rateColor(color_lawn, 12);
    // console.log(color_lawn.rating);
    // console.log(new_color_lawn.rating);
    // // Functional Concepts: Immutability(Array)
    // const list = [
    //   { title: "title1" },
    //   { title: "title2" },
    //   { title: "title3" },
    // ];
    // const addColor = (colors, title) => {
    //   return [...colors, { title }];
    // };
    // const newList = addColor(list, "title4");
    // console.log(list);
    // console.log(newList);

    // Functional Concepts: Pure functions

    // Functional Concepts: Data Transformations
    // // .join();
    // const schools = ["Yourktown", "Washington & Lee", "Wakefield"];
    // console.log(schools.join(","));
    // // .filter();
    // const wSchools = schools.filter(school => {
    //   return school[0] === "W";
    // });
    // console.log(wSchools);
    // // .map();
    // const highSchools = schools.map(school => {
    //   return `${school} is a high school`;
    // });
    // console.log(highSchools);
    // // .map() with objects as items in Array
    // const schoolsWithObject = [
    //   {
    //     name: "Yourktown"
    //   },
    //   {
    //     name: "Stratford"
    //   },
    //   {
    //     name: "Washington & Lee"
    //   },
    //   {
    //     name: "Wakefield"
    //   }
    // ];
    // const editName = (oldName, name, arr) => {
    //   return arr.map(item => {
    //     return item.name === oldName
    //       ? {
    //           ...item,
    //           name
    //         }
    //       : item;
    //   });
    // };
    // console.log(editName("Yourktown", "Changed School", schoolsWithObject));
    // // .map() to hash
    // const hashTestValues = [
    //   {
    //     id: "-xekare",
    //     title: "rad red",
    //     rating: 3
    //   },
    //   {
    //     id: "-sdfdsd",
    //     title: "rad blue",
    //     rating: 4
    //   },
    //   {
    //     id: "-sdfsdf",
    //     title: "rad black",
    //     rating: 5
    //   }
    // ];
    // const transformedHashTestValues = hashTestValues.map(testValue => {
    //   return {
    //     [testValue.id]: {
    //       title: testValue.title,
    //       rating: testValue.rating
    //     }
    //   };
    // });
    // console.log("transformedHashTestValues", transformedHashTestValues);
    // // Object.keys(...)
    // const schoolsObject = {
    //   Yorktown: 10,
    //   "Washington & Lee": 2,
    //   Wakefield: 5
    // };
    // const schoolArray = Object.keys(schoolsObject).map(key => {
    //   return {
    //     name: key,
    //     id: schoolsObject[key]
    //   };
    // });
    // console.log("schoolArray", schoolArray);
    // // Array.reduce
    // const ages = [21, 18, 42, 40, 64, 63, 34];
    // const maxAge = ages.reduce((largerAge, age) => {
    //   return largerAge > age ? largerAge : age;
    // }, 0);
    // console.log("maxAge", maxAge);
    // // Array.reduce get distinct value
    // const colors = ["red", "red", "green", "blue", "green"];
    // const distinctColors = colors.reduce((distinct, color) => {
    //   return distinct.indexOf(color) !== -1 ? distinct : [...distinct, color];
    // }, []);
    // console.log("distinctColors", distinctColors);

    // Functional Concepts: Higher-Order Functions
    // const userLogs = userName => {
    //   return message => {
    //     console.log(`${userName} -> ${message}`);
    //   };
    // };
    // const log = userLogs('grandpa23');
    // log('We are going to get 23 grandpas');
    // log('Another log');

    // Functional Concepts: Recursion
    const dan = {
      type: "person",
      data: {
        gender: "male",
        info: {
          id: 22,
          fullname: {
            first: "Dan",
            last: "Deacon"
          }
        }
      }
    };
    const deepPick = (fields, object = {}) => {
      const [first, ...remaining] = fields.split(".");
      return remaining.length !== 0
        ? deepPick(remaining.join("."), object[first])
        : object[first];
    };
    console.log("type", deepPick("type", dan));
    console.log(
      "data.info.fullname.first",
      deepPick("data.info.fullname.first", dan)
    );

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
