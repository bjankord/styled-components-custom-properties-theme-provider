import React from 'react'
import {render} from 'react-dom'
import styled from 'styled-components';

import './index.css';
import { CustomPropertiesThemeProvider, themeProperty } from '../../src';

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

function Demo() {
  return (
    <div style={{ padding: '1rem 2rem', fontFamily: 'sans-serif', lineHeight: '1.5' }}>
      <h1>styled-components-css-custom-properties-theme-provider</h1>
      <p>Custom theme provider which uses CSS custom properties in browsers that support them. Will fallback to using styled components theme provider implementation in browsers that don't support CSS custom properties.</p>
      <Button>Default Themed Button</Button>
      <CustomPropertiesThemeProvider theme={theme}>
        <Button>Custom Themed Button</Button>
      </CustomPropertiesThemeProvider>
      <h2>Implementation Notes</h2>
      <p>This first button use CSS Custom property fallback syntax, <code>color: var(--button-color, palevioletred);</code> for a default theme. In browsers that don't support CSS custom properties, <code>Button.defaultProps.theme</code> is used to set the default / fallback value.</p>
      <p>This second button sits inside the <code>CustomPropertiesThemeProvider</code> component. This component defines values for the CSS custom properties used in the <code>Button</code> component. e.g. <code>--button-color: mediumseagreen;</code>. In modern browsers, the CSS custom properties work as intended. In browsers that don't support CSS custom properties, the <code>CustomPropertiesThemeProvider</code> component uses <a href="https://www.styled-components.com/docs/advanced/#theming">styled-components theme provider implementation</a>.</p>
    </div>
  );
}

render(<Demo/>, document.querySelector('#demo'))
