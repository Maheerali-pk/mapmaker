import { getSelectedPoints, removeInvalidPoints } from "./DrawingHelpers";
import { setPointCoords } from "./SetPointCoords";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

export type DeletePointsAction = { "delete-points": null };

export function deletePoints(state: IMapEditorState) {
   const selectedPoints = getSelectedPoints(state);
   const locations = selectedPoints.map(x => x.location);
   let tempState = { ...state };
   locations.forEach(location => {
      tempState = setPointCoords(tempState, {
         point: { x: NaN, y: NaN },
         location
      });
   });

   return removeInvalidPoints(tempState);
}
