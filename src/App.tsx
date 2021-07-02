import * as React from "react";
import path from "path";
import { createNewMap, deleteTempBackground } from "./utils/fileFuncs";
import MainMenu from "./Components/MainMenu/MainMenu";
import "./Styles/main.css";

import {
   BrowserRouter as Router,
   Switch,
   Route,
   BrowserRouter,
   useHistory,
   Redirect
} from "react-router-dom";
import Game from "./Components/Routes/Game/Game";
import HowToPlay from "./Components/Routes/HowToPlay/HowToPlay";
import RoutesList from "./Components/RoutesList/RoutesList";
import {
   globalReducer,
   initalGlobalState,
   GlobalContext
} from "./Contexts/Globalx/GlobalContext";
import { hot } from "react-hot-loader/root";

export type Path =
   | "/"
   | "/game"
   | "/how-to-play"
   | "/map-editor"
   | "/load-game"
   | "/new-game";

const remote = window.require("electron").remote;

const fs = remote.require("fs");

//var remote = require("electron").remote;
// const fs = window.require("fs");
//const fs = require("browserify-fs");
const App: React.SFC = () => {
   // const history = useHistory();
   // history.push("/");

   //console.log(__dirname);

   const [state, dispatch] = React.useReducer(globalReducer, initalGlobalState);

   const [x, setX] = React.useState("x");
   //deleteTempBackground();
   // console.log("something hang");
   return (
      <>
         <Router>
            <Redirect to="/map-editor"></Redirect>
            <GlobalContext.Provider value={[state, dispatch]}>
               <RoutesList></RoutesList>
            </GlobalContext.Provider>
         </Router>
      </>
   );
};

export default App;
