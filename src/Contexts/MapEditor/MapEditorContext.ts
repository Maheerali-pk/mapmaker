import * as React from "react";

import {
   mapEditorActionFunctions,
   MapEditorActions,
   MapEditorActionNames
} from "./MeActionTypes";
import {
   IMapEditorState,
   initalMapEditorState
} from "./Functions/MapEditorState/Data/MapEditorStateData";

export const MapEditorReducer = (
   state: IMapEditorState,
   action: Partial<MapEditorActions>
): IMapEditorState => {
   // console.log("dispatch caleed", action);
   let tempState: IMapEditorState = state;
   for (let key in action) {
      key = key as MapEditorActionNames;
      const func = mapEditorActionFunctions[key as MapEditorActionNames];
      tempState = func(tempState, action[key as MapEditorActionNames]);
   }

   return tempState;
};

const initialMapEditorConext: IMapEditorContext = [
   initalMapEditorState,
   () => {}
];

export type IMapEditorContext = [
   IMapEditorState,
   React.Dispatch<Partial<MapEditorActions>>
];

export const MapEditorContext = React.createContext(initialMapEditorConext);
