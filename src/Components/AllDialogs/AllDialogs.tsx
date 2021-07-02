import * as React from "react";
import { Component } from "react";
import NewMapForm from "../Routes/MapEditor/MeToolbar/Forms/NewMapForm/NewMapForm";
import BackgroundImageForm from "../Routes/MapEditor/MeToolbar/Forms/BackgroundImageForm/BackgroundImageForm";
import SaveMapForm from "./../Routes/MapEditor/MeToolbar/Forms/SaveMapForm/SaveMapForm";
import LoadMapForm from "../Routes/MapEditor/MeToolbar/Forms/LoadMapForm/LoadMapForm";
import SettingsForm from "./../Routes/MapEditor/MeToolbar/Forms/SettingsForm/SettingsForm";
import PolygonForm from "./../Routes/MapEditor/MeSvgMap/Forms/PolygonForm";
import CountryForm from "./../Routes/MapEditor/MeSvgMap/Forms/CountryForm";

const allDialogs = {
   NewMapForm,
   BackgroundImageForm,
   SaveMapForm,
   LoadMapForm,
   SettingsForm,
   PolygonForm,
   CountryForm
};

export default allDialogs;
