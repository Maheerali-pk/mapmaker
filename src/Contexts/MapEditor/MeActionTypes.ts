import {
   SetBackgroundAction,
   setBackground
} from "./Functions/Background/SetBackground";

import {
   setMeToolbalStatus,
   SetMeToolbalStatusAction
} from "./Functions/MapEditorState/SetMeToolbarStatus";
import {
   DeletePointsAction,
   deletePoints
} from "./Functions/Drawing/DeletePoints";
import {
   SetMapEditorStateAction,
   setMapEditorState
} from "./Functions/MapEditorState/SetMapEditorState";
import {
   ResetBackgroundAction,
   resetBackground
} from "./Functions/Background/ResetBackground";
import { ZoomInAction, ZoomIn } from "./Functions/Background/ZoomIn";
import { ZoomOutAction, zoomOut } from "./Functions/Background/ZoomOut";
import {
   SetDrawingDataAction,
   setDrawingData
} from "./Functions/Drawing/SetDrawingData";
import {
   SetInitalPointCoordsAction,
   setInitalPointCoords
} from "./Functions/Drawing/SetInitalPointCoords";
import { SetModeAction, setMode } from "./Functions/Drawing/SetMode";
import {
   SetPointCoordsAction,
   setPointCoords
} from "./Functions/Drawing/SetPointCoords";
import {
   TooglePointSelectionAction,
   tooglePointSelection
} from "./Functions/Drawing/TooglePointSelection";
import {
   MouseDownAction,
   mouseDown
} from "./Functions/Drawing/MouseEvents/SvgEvents/MouseDown";
import {
   MouseMoveAction,
   mouseMove
} from "./Functions/Drawing/MouseEvents/SvgEvents/MouseMove";
import {
   MouseUpAction,
   mouseUp
} from "./Functions/Drawing/MouseEvents/SvgEvents/MouseUp";
import {
   MouseDownOnPointAction,
   mouseDownOnPoint
} from "./Functions/Drawing/MouseEvents/PointEvents/MouseDownOnPoint";

import { SetMapDataAction, setMapData } from "./Functions/MapData/SetMapData";
import {
   mouseClick,
   MouseClickAction
} from "./Functions/Drawing/MouseEvents/SvgEvents/MouseClick";
import {
   ResetSelectionsAction,
   resetSelections
} from "./Functions/Drawing/ResetSelections";
import {
   SetSettingsAction,
   setSettings
} from "./Functions/Settings/SetSettings";
import {
   ResetSettingsAction,
   resetSettings
} from "./Functions/Settings/ResetSettings";
import {
   MouseClickOnLineAction,
   mouseClickOnLine
} from "./Functions/Drawing/MouseEvents/MouseClickOnLine";
import {
   MouseMoveOnLineAction,
   mouseMoveOnLine
} from "./Functions/Drawing/MouseEvents/LineEvents/MouseMoveOnLine";
import {
   MouseLeaveOnLineAction,
   mouseLeaveOnLine
} from "./Functions/Drawing/MouseEvents/LineEvents/MouseLeaveOnLine";
import {
   MouseDownOnTempPointAction,
   mouseDownOnTempPoint
} from "./Functions/Drawing/MouseEvents/PointEvents/MouseDownOnTempPoint";
import {
   MouseClickOnPointAction,
   mouseClickOnPoint
} from "./Functions/Drawing/MouseEvents/PointEvents/MouseClickOnPoint";
export type MapEditorActions = SetMeToolbalStatusAction &
   DeletePointsAction &
   SetMapEditorStateAction &
   ResetBackgroundAction &
   SetBackgroundAction &
   ZoomInAction &
   ZoomOutAction &
   SetDrawingDataAction &
   SetInitalPointCoordsAction &
   SetModeAction &
   SetPointCoordsAction &
   TooglePointSelectionAction &
   MouseDownAction &
   MouseMoveAction &
   MouseUpAction &
   MouseDownOnPointAction &
   SetMapDataAction &
   MouseClickAction &
   ResetSelectionsAction &
   ResetSettingsAction &
   SetSettingsAction &
   MouseClickOnLineAction &
   MouseMoveOnLineAction &
   MouseLeaveOnLineAction &
   MouseDownOnTempPointAction &
   MouseClickOnPointAction;

export type MapEditorActionNames = keyof MapEditorActions;

export const mapEditorActionFunctions: {
   [k in MapEditorActionNames]: Function;
} = {
   "delete-points": deletePoints,
   "reset-background": resetBackground,
   "set-drawing-data": setDrawingData,
   "set-inital-point-coords": setInitalPointCoords,
   "set-map-editor": setMapEditorState,
   "set-background": setBackground,
   "set-mode": setMode,
   "zoom-in": ZoomIn,
   "set-point-coords": setPointCoords,
   "zoom-out": zoomOut,
   "set-toolbar-status": setMeToolbalStatus,
   "toogle-point-selection": tooglePointSelection,
   "mouse-down": mouseDown,
   "mouse-move": mouseMove,
   "mouse-up": mouseUp,
   "mouse-down-on-point": mouseDownOnPoint,
   "set-map-data": setMapData,
   "mouse-click": mouseClick,
   "reset-selections": resetSelections,
   "set-settings": setSettings,
   "reset-settings": resetSettings,
   "mouse-click-on-line": mouseClickOnLine,
   "mouse-leave-on-line": mouseLeaveOnLine,
   "mouse-move-on-line": mouseMoveOnLine,
   "mouse-down-on-temp-point": mouseDownOnTempPoint,
   "mouse-click-on-point": mouseClickOnPoint
};
