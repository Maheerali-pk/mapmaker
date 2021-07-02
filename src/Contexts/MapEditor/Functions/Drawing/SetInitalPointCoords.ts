import { IPointData, PointLocation, IPoint } from "./Data/DrawingData";
import { setPointAtLocation } from "./DrawingHelpers";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

type Data = IPointData;

export type SetInitalPointCoordsAction = {
   "set-inital-point-coords": Data;
};

export function setInitalPointCoords(
   state: IMapEditorState,
   location: PointLocation,
   initalPoint: IPoint
) {
   return setPointAtLocation(state, location, { initalPoint });
}
