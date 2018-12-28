import React, { Component } from "react";

import { CustomThemeProvider } from "../lib";
import profilerLogger from '../utils/profilerLogger';
import createNArray from '../utils/createNArray';
import Button from '../components/ButtonCSSProperty';
import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';

const Profiler = React.unstable_Profiler;

class CustomPropertiesThemeProviderNoFallbackTest extends Component {
  state = { theme: 1 }

  changeTheme = () => {
    this.setState(prevState => ({
      theme: !prevState.theme
    }));
  };

  render() {
    const arry = createNArray(2000);
    return (<div>
      <h1>Custom Properties Theme Provider Test</h1>
      <button type="button" onClick={this.changeTheme}>Change Theme</button>
      <hr />
      <Profiler id="custom properties theme provider" onRender={profilerLogger}>
        <CustomThemeProvider theme={this.state.theme ? theme1 : theme2}>
          <div>
            {arry.map(i => <Button key={i}>Themed Button</Button>)}
          </div>
        </CustomThemeProvider>
      </Profiler>
    </div>);
  }
}

export default CustomPropertiesThemeProviderNoFallbackTest;
