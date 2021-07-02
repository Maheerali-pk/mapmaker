import {
   IPoint,
   IDrawingData,
   initialDrawingData
} from "../../Drawing/Data/DrawingData";
import {
   IBackground,
   initalBackground
} from "../../Background/Data/BackgroundData";
import { IMapData, initalMapData } from "../../MapData/Data/MapData";
import {
   IMapEditorSettings,
   initalMapEditorSettings
} from "../../Settings/Data/SettingsData";

export type MeToolbarStatus = "started" | "not-started";

export interface IMapEditorState {
   background: IBackground;
   toolbarStatus: MeToolbarStatus;
   mapData: IMapData;
   drawingData: IDrawingData;
   settings: IMapEditorSettings;
}
export const initalMapEditorState: IMapEditorState = {
   toolbarStatus: "not-started",
   mapData: initalMapData,
   drawingData: initialDrawingData,
   background: initalBackground,
   settings: initalMapEditorSettings
};
