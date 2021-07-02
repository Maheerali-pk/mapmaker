import { getPointByLocation } from "../../../../Components/Routes/MapEditor/MeSvgMap/hooks/getPointByLocation";
import { setPointAtLocation } from "./DrawingHelpers";
import { PointLocation } from "./Data/DrawingData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

type Data = PointLocation;
export type TooglePointSelectionAction = {
   "toogle-point-selection": PointLocation;
};

export function tooglePointSelection(state: IMapEditorState, data: Data) {
   let point = getPointByLocation(state.drawingData.lines, data);
   return setPointAtLocation(state, data, {
      isSelected: point!.isSelected ? undefined : true
   });
}
