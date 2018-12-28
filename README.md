# styled-components-custom-properties-theme-provider

Custom styled-components theme provider which uses CSS custom properties in browsers that support them. Will fallback to using styled components theme provider implementation in browsers that don't support CSS custom properties.

This project is in initial concept development stages and may not be ready for production use.

## Install

With npm:
```
npm install styled-components-custom-properties-theme-provider
```

With yarn:
```
yarn add styled-components-custom-properties-theme-provider
```

## Demo
[https://bjankord.github.io/styled-components-custom-properties-theme-provider/](https://bjankord.github.io/styled-components-custom-properties-theme-provider/)

## Usage

[![Edit Styled Components CSS Custom Properties Theming](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n09o56kw8l)

### Constraints
The CSS Custom Property Theme Proivder returns its children when rendering, so it must only wrap a __single child node__, similar to how the `<ThemeProvider>` component works from styled-components.

This single child node must be a DOM element, e.g. (this can't be a `React.Fragment` node), as this element is used to set inline styles for the CSS custom properties.

Another constraint is that your keys in your theme need to be a flat, single level with the key names being values that can be uses as CSS custom properties. eg. `"button-background-color": "mediumseagreen"`

## Performance Notes

Originally, I started exploring this idea thinking this would be faster for theming as the styled component wouldn't need to read multiple items off of the theme object.

I've set up 3 pages to test 3 implementations.

* [Default Styled Components Theme Provider with 2000 themed buttons](https://bjankord.github.io/styled-components-custom-properties-theme-provider/theme-provider-test-page)
* [CSS Custom Properties Theme Provider with 2000 themed buttons](https://bjankord.github.io/styled-components-custom-properties-theme-provider/custom-properties-theme-provider-test-page)
* [CSS Custom Properties Theme Provider (with fallback support) with 2000 themed buttons](https://bjankord.github.io/styled-components-custom-properties-theme-provider/custom-properties-theme-provider-with-fallback-test-page)

In testing I've found that using the CSS custom properties based theme provider (without including fallback support for browsers that don't support CSS properties) is faster compared to the default styled-components theme provider.

However, the implementation that uses the CSS custom properties based theme provider and falls back to using the the default styled-components theme provider is noticeably slower when throttling the CPU to 4x slowdown in Chrome compared to using the default styled-components theme provider. This can be seen in the demo when changing themes.

### Testing with React.unstable_Profiler

I've wrapped the theme provider in each demo with a Profiler component from [React.unstable_Profiler](https://github.com/reactjs/rfcs/pull/51);

Below is the mean average from 20 test runs for each demo collected from running create-react-app in development mode.

**MOUNT phase:**
| Measurements| Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|---|
| Actual time: | `283.78999704727903 ms`  | `258.3449993398972 ms` | `305.3549986798316 ms` |
| Base time: | `215.9399957745336 ms`  | `191.82999794511124 ms` | `238.46000083722174 ms` |

**UPDATE phase:**

| Measurements| Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|---|
| Actual time: | `116.15000036545098 ms`  | `104.96000404236838 ms` | `145.77000064309686 ms`  |
| Base time: | `104.3099999660626 ms`  | `94.8250048677437 ms` | `133.60500015551224 ms` |

Update phase was tested by supplying a new theme with entirely different values for each theme property.

### tl;dr
The CSS Custom Properties Theme Provider is a bit faster compared to the the default styled-components theme provider.

If you do need to support browsers that don't support CSS custom properties, the default styled-components theme provider will be faster compared to the CSS Custom Properties Theme Provider which offers fallback support.

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