import { setBackground } from "./SetBackground";
import { IMapEditorState } from "./../MapEditorState/Data/MapEditorStateData";
export type ResetBackgroundAction = { "reset-background": null };

export function resetBackground(state: IMapEditorState) {
   return setBackground(state, {
      zoomOffset: 1,
      currentPos: { x: 0, y: 0 },
      prevPos: { x: 0, y: 0 }
   });
}
