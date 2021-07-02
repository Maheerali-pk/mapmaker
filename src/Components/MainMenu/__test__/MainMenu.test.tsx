import * as React from "react";
import { Component } from "react";
import MainMenu from "../MainMenu";
import Enzyme, { mount, shallow, EnzymeAdapter } from "enzyme";
import { mainMenuData } from "../MainMenuData";
import MainMenuItem from "../MainMenuItem/MainMenuItem";
import { createMemoryHistory } from "history";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });
const history = createMemoryHistory();

jest.mock("react-router-dom", () => ({
   ...jest.requireActual("react-router-dom"),
   useHistory: () => ({
      push: jest.fn()
   })
}));

test("all items are rendering", () => {
   mainMenuData.forEach(itemProps => {
      const item = mount(
         <BrowserRouter>
            <MainMenuItem {...itemProps} />
         </BrowserRouter>
      );
      item.find("button").simulate("click");
      expect(item.find("button").text()).toBe(itemProps.text);
      if (itemProps.path) {
         expect(window.location.pathname).toBe(itemProps.path);
      }
   });
});
