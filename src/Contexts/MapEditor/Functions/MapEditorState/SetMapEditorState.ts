import { IMapEditorState } from "./Data/MapEditorStateData";

type Data = Partial<IMapEditorState>;
export type SetMapEditorStateAction = { "set-map-editor": Data };

export function setMapEditorState(
   state: IMapEditorState,
   data: Data
): IMapEditorState {
   return { ...state, ...data };
}
