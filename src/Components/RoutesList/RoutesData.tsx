import * as React from "react";
import { Component } from "react";
import { Path } from "../../App";
import Game from "../Routes/Game/Game";
import HowToPlay from "../Routes/HowToPlay/HowToPlay";
import LoadGame from "../Routes/LoadGame/LoadGame";
import NewGame from "../Routes/NewGame/NewGame";
import MapEditor from "../Routes/MapEditor/MapEditor";
import MainMenu from "../MainMenu/MainMenu";

interface IRoutesDataItem {
   path: Path;
   compnent: React.ReactElement;
}

export const routesData: IRoutesDataItem[] = [
   { path: "/game", compnent: <Game></Game> },
   { path: "/how-to-play", compnent: <HowToPlay></HowToPlay> },
   { path: "/load-game", compnent: <LoadGame></LoadGame> },
   { path: "/map-editor", compnent: <MapEditor></MapEditor> },
   { path: "/new-game", compnent: <NewGame></NewGame> },
   { path: "/", compnent: <MainMenu></MainMenu> }
];
