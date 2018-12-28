import React from "react";
import { ThemeProvider } from "styled-components";

import CustomPropertiesThemeProvider from './CustomPropertiesThemeProvider';

const CustomPropertiesFallbackThemeProvider = props => {
  if (window.CSS && CSS.supports("color", "var(--c)")) {
    return (
      <CustomPropertiesThemeProvider theme={props.theme}>
        {props.children}
      </CustomPropertiesThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={props.theme}>
        {props.children}
      </ThemeProvider>
    );
  }
};

export default CustomPropertiesFallbackThemeProvider;