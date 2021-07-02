import { setPointAtLocation } from "./DrawingHelpers";
import { PointLocation, IPoint } from "./Data/DrawingData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

type Data = { location: PointLocation; point: IPoint };

export type SetPointCoordsAction = {
   "set-point-coords": Data;
};

export function setPointCoords(state: IMapEditorState, data: Data) {
   return setPointAtLocation(state, data.location, { point: data.point });
}
