import { ICountry, IContinent, ILine } from "../../Drawing/Data/DrawingData";

export interface IMapData {
   countries: { [k: string]: ICountry };
   continents: { [k: string]: IContinent };
   lines: ILine[];
   mapName: string;
}

export const initalMapData: IMapData = {
   countries: {},
   continents: {},
   lines: [],
   mapName: ""
};
