const remote = window.require("electron").remote;
export const path = remote.require("path") as typeof import("path");

export const publicPath = path.join(path.resolve(), "/public");
export const imagesPath = path.join(path.resolve(), "/public/images");
export const tempBackgroundPath = path.join(
   path.resolve(),
   "/public/images/temp/temp-background.jpg"
);

//console.log(`publicPath: ${publicPath}`);
