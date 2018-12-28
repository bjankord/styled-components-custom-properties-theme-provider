import React, { Component } from "react";

import { CustomPropertiesFallbackThemeProvider } from "../lib";
import profilerLogger from '../utils/profilerLogger';
import createNArray from '../utils/createNArray';
import Button from '../components/ButtonCSSPropertyWithFallback';
import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';

const Profiler = React.unstable_Profiler;

class CustomPropertiesThemeProviderTest extends Component {
  state = { theme: 1 }

  changeTheme = () => {
    this.setState(prevState => ({
      theme: !prevState.theme
    }));
  };

  render() {
    const arry = createNArray(2000);
    return (<div>
      <h1>Custom Properties Theme Provider With Fallback Test</h1>
      <button type="button" onClick={this.changeTheme}>Change Theme</button>
      <hr />
      <Profiler id="custom properties theme provider" onRender={profilerLogger}>
        <CustomPropertiesFallbackThemeProvider theme={this.state.theme ? theme1 : theme2 }>
          <div>
            {arry.map(i => <Button key={i}>Themed Button</Button>)}
          </div>
        </CustomPropertiesFallbackThemeProvider>
      </Profiler>
    </div>);
  }
}

export default CustomPropertiesThemeProviderTest;
