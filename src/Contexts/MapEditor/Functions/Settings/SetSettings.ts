import { IMapEditorSettings } from "./Data/SettingsData";
import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";
import { setMapEditorState } from "../MapEditorState/SetMapEditorState";

type Data = Partial<IMapEditorSettings>;
export type SetSettingsAction = { "set-settings": Data };
export function setSettings(
   state: IMapEditorState,
   data: Data
): IMapEditorState {
   for (let k in data) {
      document.documentElement.style.setProperty(
         `--${k}`,
         data[k as keyof Data] as string
      );
   }
   return setMapEditorState(state, {
      settings: { ...state.settings, ...data }
   });
}
