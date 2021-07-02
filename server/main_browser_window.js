const lodash = require("lodash");
const { BrowserWindow } = require("electron");
module.exports = (options = {}) => {
   lodash.defaultsDeep(options, {
      width: 200,
      height: 200,
      webPreferences: {
         nodeIntegration: true
      }
   });
   let win = new BrowserWindow(options);
   // attach any other event handlers as usual
   return win;
};
