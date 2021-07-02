import { IMapData } from "./Data/MapData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";
import { setMapEditorState } from "../MapEditorState/SetMapEditorState";

type Data = Partial<IMapData>;
export type SetMapDataAction = { "set-map-data": Data };

export function setMapData(
   state: IMapEditorState,
   data: Data
): IMapEditorState {
   return setMapEditorState(state, { mapData: { ...state.mapData, ...data } });
}
