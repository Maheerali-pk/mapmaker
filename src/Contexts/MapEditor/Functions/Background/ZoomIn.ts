import { setBackground } from "./SetBackground";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

export type ZoomInAction = { "zoom-in": null };

export function ZoomIn(state: IMapEditorState) {
   return setBackground(state, {
      zoomOffset: state.background.zoomOffset + state.background.zoomStep
   });
}
