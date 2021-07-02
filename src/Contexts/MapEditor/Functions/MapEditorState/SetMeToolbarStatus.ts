import { IMapEditorState, MeToolbarStatus } from "./Data/MapEditorStateData";
import { setMapEditorState } from "./SetMapEditorState";

type Data = MeToolbarStatus;
export type SetMeToolbalStatusAction = { "set-toolbar-status": Data };

export function setMeToolbalStatus(state: IMapEditorState, data: Data) {
   return setMapEditorState(state, { toolbarStatus: data });
}
