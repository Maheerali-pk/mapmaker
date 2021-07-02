import { IMapEditorState } from "../MapEditorState/Data/MapEditorStateData";
import { initalMapEditorSettings } from "./Data/SettingsData";
import { setSettings } from "./SetSettings";
export type ResetSettingsAction = { "reset-settings": null };
export function resetSettings(state: IMapEditorState): IMapEditorState {
   return setSettings(state, initalMapEditorSettings);
}
