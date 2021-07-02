import { IPoint, IPointData } from "../Data/DrawingData";
import { IMapEditorState } from "../../MapEditorState/Data/MapEditorStateData";
import { arePointCollinear } from "../../../../../utils/Basic";
import { addPointAfterPoint, getRandomNumber } from "./Helpers";

type Data = { button: number; pointData: IPointData };
export type MouseClickOnLineAction = { "mouse-click-on-line": Data };
export function mouseClickOnLine(
   state: IMapEditorState,
   { button, pointData }: Data
): IMapEditorState {
   // const { mousePos } = state.background;
   // if (button === 2) {
   //    const newPoint: IPointData = {
   //       location: {
   //          lineNo: pointData.location.lineNo,
   //          pointNo: getRandomNumber()
   //       },
   //       point: { ...mousePos }
   //    };
   //    addPointAfterPoint(state, pointData, newPoint);
   // }
   return state;
}
