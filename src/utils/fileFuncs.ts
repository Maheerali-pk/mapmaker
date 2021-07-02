import { readdir, readdirSync } from "fs";
import { tempBackgroundPath } from "./paths";
import { IMapData } from "../Contexts/MapEditor/Functions/MapData/Data/MapData";

const remote = window.require("electron").remote;

const fs = remote.require("fs") as typeof import("fs");
const { promises } = fs;

export const createNewMap = async (
   savingMapName: string,
   data: IMapData,
   backgroundImage: string
) => {
   const newData = { ...data, mapName: savingMapName };
   try {
      const doesDirectoryExixts = fs.existsSync(
         `../risk/data/maps/${savingMapName}`
      );
      data.mapName = savingMapName;
      if (!doesDirectoryExixts) {
         await promises.mkdir(`../risk/data/maps/${savingMapName}`);
      }
      await promises.writeFile(
         `../risk/data/maps/${savingMapName}/mapData.json`,
         JSON.stringify(newData)
      );
      await copyFile(
         `../risk/src/images/temp/${"temp-background.jpg"}`,
         `../risk/data/maps/${savingMapName}/background.jpg`
      );
   } catch (err) {
      console.log(err);
   }
};

export const getAllMapNames = () => {
   return fs.readdirSync("../risk/data/maps");
};

export const deleteTempBackground = () => {
   const doesTempBackgroundExist = fs.existsSync(
      `../risk/src/images/temp/temp-background.jpg`
   );
   if (doesTempBackgroundExist) {
      fs.unlink(`../risk/src/images/temp/temp-background.jpg`, () => {});
   }
};

export const doesTempBackgroundExists = () =>
   fs.existsSync(`../risk/src/images/temp/temp-background.jpg`);

export const getMapData = (mapName: string): IMapData => {
   return JSON.parse(
      fs.readFileSync(`../risk/data/maps/${mapName}/mapData.json`, "utf8")
   );
};

export const loadMapImageToTemp = async (mapName: string) => {
   await updateBackgroundImage(`../risk/data/maps/${mapName}/background.jpg`);
};

export const copyFile = async (from: string, to: string) => {
   const readStream = await fs.createReadStream(from);
   const writeStream = await fs.createWriteStream(to);
   await readStream.pipe(writeStream);
};

export const updateBackgroundImage = async (imagePath: string) => {
   return await copyFile(
      imagePath,
      "../risk/src/images/temp/temp-background.jpg"
   );
};
