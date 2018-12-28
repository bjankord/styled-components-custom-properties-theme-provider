import React from "react";
import styled from "styled-components";

// In your app, import from styled-components-custom-properties-theme-provider
// e.g. import { CustomPropertiesThemeProvider } from "styled-components-custom-properties-theme-provider";
import { CustomPropertiesThemeProvider } from "../lib";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  background-color: #fff;

  /* Theming Properties */
  color: var(--button-color, palevioletred);
  border-color: var(--button-border-color, palevioletred);
`;

const theme = {
  "button-color": "mediumseagreen",
  "button-border-color": "mediumseagreen"
};

function Home() {
  return (
    <div>
      <h1>styled-components-custom-properties-theme-provider</h1>
      <p>Custom styled-components theme provider which uses CSS custom properties in browsers that support them. Will fallback to using styled components theme provider implementation in browsers that do not support CSS custom properties.</p>
      <Button>Default Themed Button</Button>
      <CustomPropertiesThemeProvider theme={theme}>
        <Button>Custom Themed Button</Button>
      </CustomPropertiesThemeProvider>
      <h2>Implementation Notes</h2>
      <p>This first button use CSS Custom property fallback syntax, <code>color: var(--button-color, palevioletred);</code> for a default theme. In browsers that do not support CSS custom properties, <code>Button.defaultProps.theme</code> is used to set the default / fallback value.</p>
      <p>This second button sits inside the <code>CustomPropertiesThemeProvider</code> component. This component defines values for the CSS custom properties used in the <code>Button</code> component. e.g. <code>--button-color: mediumseagreen;</code>. In modern browsers, the CSS custom properties work as intended. In browsers that do not support CSS custom properties, the <code>CustomPropertiesThemeProvider</code> component uses <a href="https://www.styled-components.com/docs/advanced/#theming">styled-components theme provider implementation</a>.</p>
      <a href="https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/src/App.js">View Usage</a>
    </div>
  );
}

export default Home;
