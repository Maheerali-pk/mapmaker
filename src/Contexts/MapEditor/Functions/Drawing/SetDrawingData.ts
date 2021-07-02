import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";
import { IDrawingData } from "./Data/DrawingData";
import { setMapEditorState } from "../MapEditorState/SetMapEditorState";

type Data = Partial<IDrawingData>;
export type SetDrawingDataAction = { "set-drawing-data": Data };

export function setDrawingData(
   state: IMapEditorState,
   data: Data
): IMapEditorState {
   return setMapEditorState(state, {
      drawingData: { ...state.drawingData, ...data }
   });
}
