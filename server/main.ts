const { app } = require("electron");
const MainBrowserWindow = require("./main_browser_window");
let win;
function createWindow() {
   // Create the browser window.
   win = MainBrowserWindow();
   win.loadURL("http://localhost:3000");
}
app.on("ready", createWindow);
