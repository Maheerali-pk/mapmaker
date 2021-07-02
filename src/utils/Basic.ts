import { write } from "fs";
import {
   IPoint,
   IPointData
} from "../Contexts/MapEditor/Functions/Drawing/Data/DrawingData";

export const capitalize = (str: string) => {
   return str[0].toUpperCase() + str.slice(1);
};

export const unique = (array: any[]) => {
   return Array.from(new Set(array));
};

export const getImageHeightAndWidth = async (
   img: HTMLImageElement
): Promise<{ height: number; width: number }> => {
   //document.body.appendChild(img);
   return await new Promise(res => {
      img.onload = function() {
         const { height, width } = img;
         res({ height, width });
      };
   });
};

export const getSvgCords = (
   e: React.MouseEvent<SVGSVGElement, MouseEvent>
): { x: number; y: number } => {
   const cx = e.clientX;
   const cy = e.clientY;
   const { left, top } = document
      .getElementById("me-svg")!
      .getBoundingClientRect();
   return { x: cx - left, y: cy - top };
};
export const getZoomOffsetToFitSvg = (
   currentWidth: number,
   currentHeight: number,
   zoomStep: number
): number => {
   let heightDif = window.innerHeight - currentHeight;
   let widthDif = window.innerWidth - currentWidth;

   let heightIncreasePerZoom = currentHeight * zoomStep;
   let widthIncreasePerZoom = currentWidth * zoomStep;

   let maxNoOfZoomsForHeight = heightDif / heightIncreasePerZoom;
   let maxNoOfZoomsForWidth = widthDif / widthIncreasePerZoom;

   const minNoOfZooms = Math.min(maxNoOfZoomsForHeight, maxNoOfZoomsForWidth);
   return minNoOfZooms * zoomStep;
};

export const loadImage = (image: HTMLImageElement) => {
   return new Promise(res => {
      image.onload = function() {
         res(image);
      };
   });
};

export interface IMapImageData {
   data: Uint8ClampedArray;
   height: number;
   width: number;
   getColorAtPixel: ({ x, y }: { x: number; y: number }) => number[];
}

export class MapImageData implements IMapImageData {
   data: Uint8ClampedArray;
   height: number;
   width: number;
   constructor(image: HTMLImageElement, width: number, height: number) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.height = height;
      canvas.width = width;
      const pattern = context.createPattern(image, "repeat") as CanvasPattern;
      image.height = height;
      image.width = width;
      context.fillStyle = pattern;
      context.fill();
      context.drawImage(image, 0, 0);
      //document.getElementById("root")?.appendChild(canvas);
      this.data = context.getImageData(0, 0, width, height).data;
      this.height = height;
      this.width = width;
   }
   getColorAtPixel({ x, y }: { x: number; y: number }) {
      console.log(`pixel`, y * this.height + x);
      let value = this.getColorOfElement(
         Math.floor(y * this.width * 4 + x * 4)
      );
      console.log(`value`, value);
      return value;
   }
   getColorOfElement(index: number) {
      console.log(this.data);
      return Array(4)
         .fill(null)
         .map((x, i) => this.data[index + i]);
   }
}

export const getImageData = async () => {};

export const areObjectsEqual = (obj1: any, obj2: any) => {
   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
   }
   for (let k in obj1) {
      if (obj1[k] !== obj2[k]) {
         return false;
      }
   }
   return true;
};

export const getDistanceBetweenPoints = (pointA: IPoint, pointB: IPoint) => {
   const dx = Math.pow(pointA.x - pointB.x, 2);
   const dy = Math.pow(pointA.y - pointB.y, 2);
   return Math.sqrt(dx + dy);
};

export const arePointCollinear = (
   pointA: IPoint,
   pointB: IPoint,
   pointC: IPoint,
   lineWidth: number
) => {
   const totalDistance = getDistanceBetweenPoints(pointA, pointB);
   const deltaAC = getDistanceBetweenPoints(pointA, pointC);
   const deltaBC = getDistanceBetweenPoints(pointB, pointC);
   return totalDistance + Math.pow(lineWidth / 2, 2) >= deltaAC + deltaBC;
};

export function findNearest(p: IPoint, a: IPoint, b: IPoint) {
   var atob = { x: b.x - a.x, y: b.y - a.y };
   var atop = { x: p.x - a.x, y: p.y - a.y };
   var len = atob.x * atob.x + atob.y * atob.y;
   var dot = atop.x * atob.x + atop.y * atob.y;
   var t = Math.min(1, Math.max(0, dot / len));
   dot = (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);
   return { x: a.x + atob.x * t, y: a.y + atob.y * t };
}
