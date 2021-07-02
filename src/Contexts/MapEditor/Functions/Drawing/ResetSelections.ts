import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";
import { getSelectedPoints } from "./DrawingHelpers";

export type ResetSelectionsAction = { "reset-selections": null };
export function resetSelections(state: IMapEditorState) {
   const selectedPoints = getSelectedPoints(state);
   selectedPoints.forEach(point => {
      point.isSelected = undefined;
   });
   return state;
}
