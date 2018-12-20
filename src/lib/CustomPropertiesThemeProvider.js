import React from "react";
import { ThemeProvider } from "styled-components";

/* Convert theme into CSS Custom Properties, set these on div inside ThemeProvider */
const CustomPropertiesThemeProvider = props => {
  const CSSCustomProperties = Object.keys(props.theme).reduce(function (
    newObj,
    key
  ) {
    let newKey = `--${key}`;
    newObj[newKey] = props.theme[key];
    return newObj;
  },
    {});

  return (
    <ThemeProvider theme={props.theme}>
      {/* Thought, would it be better/faster to clone the style prop onto the children rather than using this div wrapper */}
      <div style={CSSCustomProperties}>{props.children}</div>
    </ThemeProvider>
  );
};

export default CustomPropertiesThemeProvider;