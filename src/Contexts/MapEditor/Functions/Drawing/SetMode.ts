import { getPointByLocation } from "../../../../Components/Routes/MapEditor/MeSvgMap/hooks/getPointByLocation";
import { getSelectedPoints, setPointAtLocation } from "./DrawingHelpers";
import { setInitalPointCoords } from "./SetInitalPointCoords";
import { setMapEditorState } from "../MapEditorState/SetMapEditorState";
import { EditorMode } from "./Data/DrawingData";
import { setDrawingData } from "./SetDrawingData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

type Data = EditorMode;
export type SetModeAction = { "set-mode": Data };

export function setMode(state: IMapEditorState, data: Data): IMapEditorState {
   if (data === "moving-points") {
      let selectedPoints = getSelectedPoints(state);
      let tempState = { ...state };
      selectedPoints.forEach(point => {
         tempState = setPointAtLocation(tempState, point.location, {
            initalPoint: point.point,
            isMoving: true
         });
      });
      return setDrawingData(tempState, { mode: data });
   } else {
      return setDrawingData(state, { mode: data });
   }
}
