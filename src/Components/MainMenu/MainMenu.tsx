import * as React from "react";
import { Component } from "react";
import MainMenuItem, { MainMenuItemProps } from "./MainMenuItem/MainMenuItem";
import "./MainMenu.css";
import { mainMenuData } from "./MainMenuData";

const MainMenu: React.SFC = () => {
   return (
      <>
         <div id="main-menu">
            <img
               src={require("./images/backgroundimage.jpg")}
               alt="something"
            />
            <div data-testid="btn-group" className="btn-group">
               {mainMenuData.map(x => (
                  <MainMenuItem key={x.text} {...x}></MainMenuItem>
               ))}
            </div>
         </div>
      </>
   );
};

export default MainMenu;
