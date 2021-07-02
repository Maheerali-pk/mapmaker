import { IMapEditorState } from "../../MapEditorState/Data/MapEditorStateData";
import { setDrawingData } from "../SetDrawingData";

type Data = { polygonNo: number; button: number };
export type MouseClickOnPolygonAction = { "mouse-click-on-polygon": Data };

export function mouseClickOnPolygon(
   state: IMapEditorState,
   { polygonNo, button }: Data
): IMapEditorState {
   const polygon = state.drawingData.polygons.find(
      x => x.polygonNo === polygonNo
   );
   if (button === 0) {
      return setDrawingData(state, { activeCountryFormNo: polygon?.countryNo });
   } else if (button === 2) {
      return setDrawingData(state, { activePolygonFormNo: polygonNo });
   } else return state;
}
