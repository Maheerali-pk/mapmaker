import * as React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Path } from "../../App";
import { routesData } from "./RoutesData";
import { GlobalContext } from "../../Contexts/Globalx/GlobalContext";
import allDialogs from "./../AllDialogs/AllDialogs";
import { useHistory } from "react-router";
import { render } from "@testing-library/react";

export interface RoutesListProps {}

const RoutesList: React.SFC<RoutesListProps> = () => {
   const [{ dialogs }] = React.useContext(GlobalContext);
   const renderedDialogs = React.useMemo(() => {
      return (
         <>
            {dialogs.map(dialogName => {
               const Dialog = allDialogs[dialogName];
               return <Dialog></Dialog>;
            })}
         </>
      );
   }, [dialogs]);
   const history = useHistory();
   const renderedRoutes = React.useMemo(() => {
      const currentRoute = window.location.pathname;
      const routes = routesData.map(route => (
         <Route path={route.path}>{route.compnent}</Route>
      ));
      return routes;
   }, [renderedDialogs]);
   return <Switch>{renderedRoutes}</Switch>;
};

export default RoutesList;
