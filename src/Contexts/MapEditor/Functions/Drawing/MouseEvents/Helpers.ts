import { IMapEditorState } from "../../MapEditorState/Data/MapEditorStateData";
import { getSelectedPoints, getLine } from "../DrawingHelpers";
import { setPointCoords } from "../SetPointCoords";
import { start } from "repl";
import { setDrawingData } from "../SetDrawingData";
import { IPointData, IPoint, IPolygon } from "../Data/DrawingData";

export function moveSelectedPoints(state: IMapEditorState): IMapEditorState {
   const {
      startPos: { x: sx, y: sy },
      mousePos,
      zoomOffset,
      currentPos: { x, y }
   } = state.background;

   const selectedPoints = getSelectedPoints(state);
   let mouseMoved = {
      x: mousePos.x - (sx / zoomOffset + x),
      y: mousePos.y - (sy / zoomOffset + y)
   };
   let tempState = state;
   selectedPoints.forEach(({ initalPoint, location }) => {
      if (initalPoint) {
         const { x: ix, y: iy } = initalPoint;
         const newPoint = { x: ix + mouseMoved.x, y: iy + mouseMoved.y };
         tempState = setPointCoords(tempState, { location, point: newPoint });
      }
   });
   return tempState;
}

export function moveSinglePoint(state: IMapEditorState): IMapEditorState {
   const {
      mousePos,
      startPos: { x: sx, y: sy }
   } = state.background;
   const { movingPoint } = state.drawingData;
   if (movingPoint) {
      let mouseMoved = {
         x: mousePos.x - sx,
         y: mousePos.y - sy
      };
      let newPoint = {
         x: sx + mouseMoved.x,
         y: sy + mouseMoved.y
      };
      state = setPointCoords(state, {
         location: movingPoint.location,
         point: newPoint
      });
   }
   return state;
}

export function getRandomNumber() {
   return Math.floor(Math.random() * 1000000000);
}

export function addPointToCurrentLine(
   state: IMapEditorState,
   coords?: IPoint
): IMapEditorState {
   const { lines, currentLineNo } = state.drawingData;
   const { mousePos } = state.background;
   const line = state.drawingData.lines.find(
      line => line.lineNo === currentLineNo
   );
   console.log(currentLineNo, lines);

   line!.points.push({
      point: { x: coords?.x || mousePos.x, y: coords?.y || mousePos.y },
      location: { lineNo: currentLineNo, pointNo: getRandomNumber() },
      isStartingPoint: line!.points.length === 0 ? true : undefined
   });
   console.log(line!.points);

   return setDrawingData(state, { lines });
}

export function getPolygon(
   state: IMapEditorState,
   polygonNo: number
): IPolygon {
   return state.drawingData.polygons.find(
      polygon => polygon.polygonNo === polygonNo
   ) as IPolygon;
}

export function createNewLine(state: IMapEditorState): IMapEditorState {
   const { lines } = state.drawingData;
   const randomNumber = getRandomNumber();
   return setDrawingData(state, {
      lines: [...lines, { lineNo: randomNumber, points: [] }],
      currentLineNo: randomNumber
   });
}

export function addPointAfterPoint(
   state: IMapEditorState,
   prevPoint: IPointData,
   newPoint: IPointData
): IMapEditorState {
   const { lines } = state.drawingData;
   const line = getLine(state, prevPoint.location.lineNo);
   const position = line!.points.findIndex(p => {
      return prevPoint.location.pointNo === p.location.pointNo;
   });
   line!.points.splice(position + 1, 0, newPoint);
   return setDrawingData(state, { lines });
}

export function createNewCountry(state: IMapEditorState) {
   const { countries } = state.drawingData;
   let countryNo = getRandomNumber();
   countries.push({
      countryNo,
      name: "New Country",
      neighbours: [],
      polygonNumbers: []
   });
   return setDrawingData(state, { activeCountryFormNo: countryNo, countries });
}
