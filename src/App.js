import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ThemeProviderTest from "./pages/ThemeProviderTest";
import CustomPropertiesThemeProviderTest from "./pages/CustomPropertiesThemeProviderTest";
import CustomPropertiesThemeProviderWithFallbackTest from "./pages/CustomPropertiesThemeProviderWithFallbackTest";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/theme-provider-test-page">ThemeProvider Test Page</Link>
          </li>
          <li>
            <Link to="/custom-properties-theme-provider-test-page">CustomPropertiesThemeProvider Test Page</Link>
          </li>
          <li>
            <Link to="/custom-properties-theme-provider-with-fallback-test-page">CustomPropertiesThemeProvider With Fallback Test Page</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/theme-provider-test-page" component={ThemeProviderTest} />
        <Route path="/custom-properties-theme-provider-test-page" component={CustomPropertiesThemeProviderTest} />
        <Route path="/custom-properties-theme-provider-with-fallback-test-page" component={CustomPropertiesThemeProviderWithFallbackTest} />
      </div>
    </Router>
  );
}

export default App;
