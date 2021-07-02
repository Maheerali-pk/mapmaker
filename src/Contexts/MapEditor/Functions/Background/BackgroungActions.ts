import { ResetBackgroundAction } from "./ResetBackground";
import { SetBackgroundAction } from "./SetBackground";
import { ZoomInAction } from "./ZoomIn";
import { ZoomOutAction } from "./ZoomOut";

export type BackgroundActions = ResetBackgroundAction &
   SetBackgroundAction &
   ZoomInAction &
   ZoomOutAction;
