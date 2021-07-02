import { IPoint } from "../../Drawing/Data/DrawingData";

type SetBackgroundAction = {
   name: "set-background";
   data: Partial<IBackground>;
};

export interface IBackground {
   mousePos: IPoint;
   currentPos: IPoint;
   prevPos: IPoint;
   startPos: IPoint;
   height: number;
   width: number;
   zoomOffset: number;
   zoomStep: number;
   isImageLoaded: boolean;
   hasClicked: boolean;
}

export const initalBackground: IBackground = {
   zoomStep: 0.4,
   mousePos: { x: 0, y: 0 },
   currentPos: { x: 0, y: 0 },
   prevPos: { x: 0, y: 0 },
   startPos: { x: 0, y: 0 },
   height: 0,
   width: 0,
   zoomOffset: 1,
   isImageLoaded: false,
   hasClicked: false
};
