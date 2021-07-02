import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { testData } from "./images/test";

const electron = window.require("electron");
//console.log(electron);
console.log(window.require("fs"));
console.log();
ReactDOM.render(
   <>
      <div>{JSON.stringify(testData)}</div>
      <App />
   </>,
   document.getElementById("root")
);

// if (module.hot) {
//    module.hot.accept("./images/temp/", () => {
//       console.log("the image is changed --------------------------");
//    });
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
