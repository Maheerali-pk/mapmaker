export interface IMapEditorSettings {
   borderWidth: number;
   borderColor: string;
   labelColor: string;
   pointRadius: number;
   showLabels: boolean;
   pointColor: string;
}

export const initalMapEditorSettings: IMapEditorSettings = {
   borderWidth: 40,
   borderColor: "#000000",
   labelColor: "black",
   pointRadius: 50,
   showLabels: true,
   pointColor: "#d3d3d3"
};
