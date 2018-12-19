import React from "react";
import styled from "styled-components";

import { CustomPropertiesThemeProvider, themeProperty } from "./CustomPropertiesThemeProvider";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  background-color: #fff;

  /* Theming Properties */
  ${props =>
    themeProperty(props, "color", "button-color", "palevioletred")}
  ${props =>
    themeProperty(
      props,
      "border-color",
      "button-border-color",
      "palevioletred"
    )}
`;

/* Fallback values for default theme when using SC theme provider implementation */
Button.defaultProps = {
  theme: {
    "button-color": "palevioletred",
    "button-border-color": "palevioletred"
  }
};

const theme = {
  "button-color": "mediumseagreen",
  "button-border-color": "mediumseagreen"
};

function App() {
  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h1>styled-components-css-custom-properties-theme-provider</h1>
      <p>Custom theme provider which uses CSS custom properties in browsers that support them, and falls back to styled components theme provider implementation in browsers that don't support CSS custom properties.</p>
      <Button>Default Themed Button</Button>
      <CustomPropertiesThemeProvider theme={theme}>
        <Button>Custom Themed Button</Button>
      </CustomPropertiesThemeProvider>
    </div>
  );
}

export default App;
