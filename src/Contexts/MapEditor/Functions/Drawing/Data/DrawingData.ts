export type IPointData = {
   point: IPoint;
   isSelected?: boolean;
   initalPoint?: IPoint;
   isMoving?: boolean;
   temparoryPoint?: IPoint;
   isStartingPoint?: boolean;
   isCompleted?: boolean;
   location: PointLocation;
};
export type IPoint = { x: number; y: number };
export type PointLocation = { pointNo: number; lineNo: number };
export type MouseButton = 0 | 1 | 2;
export type EditorMode =
   | "create-new-line"
   | "can-move-points"
   | "moving-points"
   | "moving-point"
   | "normal"
   | "selecting-points"
   | "drawing";
export interface ILine {
   points: IPointData[];
   lineNo: number;
}

export interface ICountry {
   countryNo: number;
   name: string;
   neighbours: string[];
   polygonNumbers: number[];
}

export interface IPolygon {
   lineNo: number;
   polygonNo: number;
   countryNo?: number;
}

export interface IDrawingData {
   currentLineNo: number;
   clickedMouseButton?: number;
   countries: ICountry[];
   continents: IContinent[];
   lines: ILine[];
   mode: EditorMode;
   movingPoint?: IPointData;
   polygons: IPolygon[];
   activePolygonFormNo?: number;
   activeCountryFormNo?: number;
}

export interface IContinent {
   continentNo: number;
   name: string;
   countries: string[];
}

export const initialDrawingData: IDrawingData = {
   continents: [],
   countries: [],
   currentLineNo: -1,
   lines: [],
   mode: "selecting-points",
   polygons: []
};
