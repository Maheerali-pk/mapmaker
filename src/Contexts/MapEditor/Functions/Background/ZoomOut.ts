import { setBackground } from "./SetBackground";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";

export type ZoomOutAction = { "zoom-out": null };

export function zoomOut(state: IMapEditorState) {
   return setBackground(state, {
      zoomOffset: state.background.zoomOffset - state.background.zoomStep
   });
}
