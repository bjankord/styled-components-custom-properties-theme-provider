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

Tested in production mode in CRA thanks to [@bvaughn's](https://github.com/bvaughn) gist here: https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977

#### Production Mode

**MOUNT phase:**

| Measure | Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|
| Actual time: | `114.67500089202076 ms`  | `65.54000021424145 ms` | `122.44500109227374 ms` |
| Base time: | `93.18000212078914 ms`  | `44.91499869618565 ms` | `99.71500077517703 ms` |

**UPDATE phase:**

| Measure | Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|
| Actual time: | `42.78000054182485 ms`  | `18.06499983649701 ms` | `52.99499997636303 ms`  |
| Base time: | `39.890000072773546 ms`  | `15.694999718107283 ms` | `50.529999658465385 ms` |

Update phase was tested by supplying a new theme with entirely different values for each theme property.

#### Development Mode

**MOUNT phase:**

| Measure | Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|
| Actual time: | `243.0450000683777 ms`  | `234.49500190326944 ms` | `272.86500280024484 ms` |
| Base time: | `182.36999865621328 ms`  | `177.84500279230997 ms` | `209.2250018613413 ms` |

**UPDATE phase:**

| Measure | Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|
| Actual time: | `97.6450014859438 ms`  | `89.05499934917316 ms` | `108.44500467646867 ms`  |
| Base time: | `87.12000423111022 ms`  | `79.05499776825309 ms` | `99.06000515911728 ms` |

Update phase was tested by supplying a new theme with entirely different values for each theme property.

### Testing with puppeteer

| Measure | Styled Components ThemeProvider | CSS Custom Properties Theme Provider | CSS Custom Properties Theme Provider With Fallback |
|---|---|---|---|
| Total page time from start to load:   | `428ms` | `398ms` | `489ms` |
| Time spent constructing the DOM tree: | `179ms` | `165ms` | `179ms` |
| Time spent rendering:                 | `409ms` | `374ms` | `466ms`  |

### tl;dr
The CSS custom properties theme provider is a bit faster compared to the the default styled-components theme provider.

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