import { IPointData, IPoint } from "../Drawing/Data/DrawingData";
import { IBackground } from "./Data/BackgroundData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

type Data = Partial<IBackground>;
export type SetBackgroundAction = {
   "set-background": Data;
};

export function setBackground(
   state: IMapEditorState,
   data: Data
): IMapEditorState {
   return { ...state, background: { ...state.background, ...data } };
}
