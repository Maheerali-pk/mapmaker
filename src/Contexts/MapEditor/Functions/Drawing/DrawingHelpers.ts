import {
   IPointData,
   PointLocation,
   IDrawingData,
   ILine
} from "./Data/DrawingData";
import { setMapEditorState } from "../MapEditorState/SetMapEditorState";
import { IMapEditorState } from "./../MapEditorState/Data/MapEditorStateData";
import { setDrawingData } from "./SetDrawingData";

export function setPointAtLocation(
   state: IMapEditorState,
   { lineNo, pointNo }: PointLocation,
   newPoint: Partial<IPointData>
): IMapEditorState {
   const lines = [...state.drawingData.lines];
   console.log(`lineno`, lineNo);
   console.log(lines);

   let requiredLine = getLine(state, lineNo);
   const pointIndex = requiredLine!.points.findIndex(
      p => p.location.pointNo === pointNo
   );
   let prevPoint = requiredLine!.points[pointIndex];

   requiredLine!.points[pointIndex] = { ...prevPoint, ...newPoint };
   return { ...state, drawingData: { ...state.drawingData, lines } };
}

//Get line by lineno
export function getLine(state: IMapEditorState, lineNo: number): ILine {
   return state.drawingData.lines.find(x => x.lineNo === lineNo) as ILine;
}

//Get temprory points of line
// export function getTemparoryPointsOfLine(
//    state: IMapEditorState,
//    lineNo: number
// ): IPointData[] {
//    return getLine(state, lineNo).points.filter(p => p.isTemparory);
// }

export function getSelectedPoints(state: IMapEditorState) {
   const allPoints = state.drawingData.lines.flatMap(line => line.points);
   return allPoints.filter(point => point.isSelected);
}

export function removeInvalidPoints(state: IMapEditorState) {
   const lines = state.drawingData.lines.map(line => {
      line.points = line.points.filter(
         ({ point: { x, y } }) => !(isNaN(x) && isNaN(y))
      );
      return line;
   });
   return setDrawingData(state, { lines });
}

export function updateLocationsOfLine(state: IMapEditorState, lineNo: number) {
   const line = state.drawingData.lines[lineNo];
}

// export function setLine(
//    state: IMapEditorState,
//    lineNo: number,
//    newLine: ILine
// ): IMapEditorState {
//    const lines = [...state.drawingData.lines];
//    lines[lineNo] = newLine;
//    return setDrawingData(state, { lines });
// }

// export function deletePoint(state: IMapEditorState, location: PointLocation) {
//    const myLine = state.drawingData.lines[location.lineNo];
//    myLine.points = myLine.points.filter(
//       (_, pointNo) => pointNo === location.pointNo
//    );
//    return setLine(state, location.lineNo, myLine);
// }
