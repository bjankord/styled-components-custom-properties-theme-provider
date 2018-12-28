import React from "react";
import { ThemeProvider } from "styled-components";

import CustomPropertiesThemeProvider from './CustomPropertiesThemeProvider';

const ComponentType = window.CSS && CSS.supports("color", "var(--color)") ? CustomPropertiesThemeProvider : ThemeProvider;

const CustomPropertiesFallbackThemeProvider = props => {
  return (<ComponentType theme={props.theme}>{props.children}</ComponentType>);
};

export default CustomPropertiesFallbackThemeProvider;