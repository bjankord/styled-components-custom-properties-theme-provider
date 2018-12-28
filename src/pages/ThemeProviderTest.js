import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import profilerLogger from '../utils/profilerLogger';
import createNArray from '../utils/createNArray';
import Button from '../components/ButtonThemeProp';
import theme1 from '../themes/theme1';
import theme2 from '../themes/theme2';

const Profiler = React.unstable_Profiler;

class ThemeProviderTest extends Component {
  state = { theme: 1 }

  changeTheme = () => {
    this.setState(prevState => ({
      theme: !prevState.theme
    }));
  };

  render() {
    const arry = createNArray(2000);
    return (<div>
      <h1>Styled Components Theme Provider Test</h1>
      <button type="button" onClick={this.changeTheme}>Change Theme</button>
      <hr />
      <Profiler id="styled components theme provider" onRender={profilerLogger}>
        <ThemeProvider theme={this.state.theme ? theme1 : theme2}>
          <div>
            {arry.map(i => <Button key={i}>Themed Button</Button>)}
          </div>
        </ThemeProvider>
      </Profiler>
    </div>);
  }
}

export default ThemeProviderTest;
