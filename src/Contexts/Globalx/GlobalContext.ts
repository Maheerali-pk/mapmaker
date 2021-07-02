import * as React from "react";
import { Component } from "react";
import allDialogs from "../../Components/AllDialogs/AllDialogs";
import { unique } from "../../utils/Basic";

export type DialogName = keyof typeof allDialogs;

interface IGlobalState {
   dialogs: DialogName[];
}

export const globalReducer = (state: IGlobalState, action: ActionType) => {
   switch (action.name) {
      case "hide-dialog":
         return {
            ...state,
            dialogs: state.dialogs.filter(dialog => dialog !== action.data)
         };
      case "show-dialog":
         return { ...state, dialogs: [...state.dialogs, action.data] };
   }
};

type ActionType =
   | { name: "show-dialog"; data: DialogName }
   | { name: "hide-dialog"; data: DialogName };

type IGlobalContext = [IGlobalState, React.Dispatch<ActionType>];
export const initalGlobalState: IGlobalState = { dialogs: [] };

const initalGlobalConext: IGlobalContext = [initalGlobalState, () => 5];

export const GlobalContext = React.createContext(initalGlobalConext);
