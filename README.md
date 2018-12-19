# styled-components-custom-properties-theme-provider

Styled Components theme provider which uses CSS custom properties in browsers that support them, and falls back to styled components theme provider implementation in browsers that don't support CSS custom properties

This project is in initial concept development stages and may not be ready for production use.

## Install
This package hasn't been published to NPM yet, need to do some more testing on it.

## Usage

```jsx
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

// Fallback values for default theme when using SC theme provider implementation
Button.defaultProps = {
  theme: {
    "button-color": "palevioletred",
    "button-border-color": "palevioletred"
  }
};

// Custom Theme
const theme = {
  "button-color": "mediumseagreen",
  "button-border-color": "mediumseagreen"
};

function App() {
  return (
    <div>
      <Button>Default Themed Button</Button>
      <CustomPropertiesThemeProvider theme={theme}>
        <Button>Custom Themed Button</Button>
      </CustomPropertiesThemeProvider>
    </div>
  );
}

export default App;
```

## [License](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/LICENSE)


## CSS Custom Properties Browser Support

![CSS Custom Properties Browser Support](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/CSSCustomPropertiesSupport.png?raw=true)

## How it looks in browsers that support CSS custom properties

### Chrome
![Chrome](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Chrome71.png?raw=true)

### Firefox
![Firefox](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Firefox64.png?raw=true)

### Safari
![Safari](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Safari12.png?raw=true)

### Edge
![Edge](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Edge18.png?raw=true)

### Opera
![Opera](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Opera57.png?raw=true)

## How it looks in browser that don't natively support CSS custom properties

## Edge 15
![Edge15](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/Edge15.png?raw=true)

## IE 11
![IE11](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/IE11.png?raw=true)

## IE 10
![IE10](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/IE10.png?raw=true)

## IE 9
![IE9](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/IE9.png?raw=true)

## Android 4.4
![Android 4.4](https://github.com/bjankord/styled-components-custom-properties-theme-provider/blob/master/assets/GalaxyS4Android4.4.png?raw=true)